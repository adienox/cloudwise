import { useState } from "react";
import {
  ErrorCard,
  LoadingCard,
  Search,
  WeatherDetails,
  ForecastCards,
  HeadElement,
  Graph,
} from "../components";
import { Weather } from "../types/types";
import useSWR from "swr";

export default function Home() {
  const [query, setQuery] = useState("paris");
  const [unit, setUnit] = useState("metric");

  const getUrl = (query: string, unit: string) => {
    return "/api/weatherService?q=" + query + "&units=" + unit;
  };

  const fetcher = async (url: string) => {
    const data = await fetch(url);
    if (!data.ok) {
      const error = new Error("An error has occurred while fetching the data.");
      throw error;
    }
    return data.json();
  };

  const { data, error } = useSWR<Weather>(() => getUrl(query, unit), fetcher);

  return (
    <>
      <HeadElement />
      <div className="mx-auto h-full w-[100vw] bg-gray-900/75 p-8 md:h-fit md:w-[700px] md:rounded-2xl">
        <Search setQuery={setQuery} />
        {data ? (
          <>
            <WeatherDetails data={data} unit={unit} setUnit={setUnit} />
            <Graph forecast={data.forecast} unit={unit} />
            <ForecastCards forecast={data.forecast} day={data.time} />
          </>
        ) : error ? (
          <ErrorCard>{error.message}</ErrorCard>
        ) : (
          <LoadingCard>Loading</LoadingCard>
        )}
      </div>
    </>
  );
}
