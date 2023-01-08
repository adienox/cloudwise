import { Weather } from "../types/types";

interface setUnit {
  (unit: string): void;
}

const AdditionalDetails = ({
  data,
  unit,
  className,
}: {
  data: Weather;
  unit: string;
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-medium">{data.detail}</h3>
      <div className="flex flex-row">
        <div className="mr-3">
          <h4 className="font-light">Humidity:</h4>
          <h4 className="font-light">Wind:</h4>
          <h4 className="font-light">Pressure:</h4>
        </div>
        <div>
          <h4 className="font-light">{data.humidity}%</h4>
          <h4 className="font-light">
            {data.speed}
            {unit === "metric" ? " m/s" : " mph"}
          </h4>
          <h4 className="font-light">{data.pressure} hPa</h4>
        </div>
        <div></div>
      </div>
    </div>
  );
};

const CityInfo = ({
  data,
  className,
}: {
  data: Weather;
  className?: string;
}) => {
  return (
    <div className={`${className} mt-3 w-full text-white`}>
      <div className="flex flex-row justify-between text-2xl font-semibold">
        <h2>
          {data.name}, {data.country}
        </h2>
        <h2>{data.time}</h2>
      </div>
      <hr className="mt-2 border-gray-500" />
    </div>
  );
};

const WeatherDetails = ({
  data,
  setUnit,
  unit,
}: {
  data: Weather;
  setUnit: setUnit;
  unit: string;
}) => {
  const metric = unit === "metric" ? "text-blue-300" : "text-white";
  const imperial = unit === "imperial" ? "text-blue-300" : "text-white";
  return (
    <>
      <CityInfo data={data} className="text-white md:hidden" />
      <div className="grid grid-cols-2 grid-rows-1 gap-x-4 md:mt-5 md:grid-cols-[1fr_2fr]">
        <div className="mt-1 grid grid-cols-2 grid-rows-[1fr_minmax(0,_0.5fr)] items-center justify-items-center">
          <img src={data.icon} alt={data.detail} className="mt-1" />
          <h1 className="text-5xl font-bold text-white">
            {Math.round(data.temp)}°
          </h1>
          <div className="font-medium text-white">
            <span className="mr-2">{Math.round(data.temp_max)}°</span>
            <span className="ml-2">{Math.round(data.temp_min)}°</span>
          </div>
          <div className="flex w-full flex-row justify-center text-base font-medium">
            <button
              className={`${metric} transition ease-out hover:scale-150 hover:text-blue-300`}
              onClick={() => setUnit("metric")}
            >
              C
            </button>
            <p className="ml-3 mr-3 text-white">|</p>
            <button
              className={`${imperial} transition ease-out hover:scale-150 hover:text-blue-300`}
              onClick={() => setUnit("imperial")}
            >
              F
            </button>
          </div>
        </div>
        <AdditionalDetails
          data={data}
          unit={unit}
          className="mt-8 font-medium text-white md:hidden"
        />
        <div className="text-white">
          <CityInfo data={data} className="hidden md:block" />
          <AdditionalDetails
            data={data}
            unit={unit}
            className="mt-2 hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
