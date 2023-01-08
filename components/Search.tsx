import { UilSearch } from "@iconscout/react-unicons";
import { useState } from "react";

interface setQuery {
  (query:  string ): void;
}

const Search = ({ setQuery }: { setQuery: setQuery }) => {
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (city !== "") {
      setQuery(city);
      setCity("");
    }
  };
  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="flex flex-row">
      <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search"
        className="mr-5 h-[40px] w-full rounded-xl bg-gray-500/70 p-3 font-medium text-gray-300 outline-none placeholder:text-gray-300"
      />
      <button
        className="ml-auto h-[40px] w-[40px] rounded-3xl bg-gray-500/70 p-2 text-center font-medium text-gray-300 transition ease-out hover:scale-125 hover:text-blue-300"
        onClick={handleClick}
      >
        <UilSearch />
      </button>
    </div>
  );
};

export default Search;
