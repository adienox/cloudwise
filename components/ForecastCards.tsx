import { Forecast } from "../types/types";

const createElement = (item: Forecast, index: number) => {
  return (
    <div
      key={index}
      className="flex cursor-pointer flex-col items-center rounded-xl bg-gradient-to-b from-gray-500 to-gray-500 p-4 text-white md:p-2"
    >
      <h3 className="text-lg font-medium">{item.forecastDay}</h3>
      <img src={item.icon} alt={item.detail} />
      <div>
        <span className="mr-2">{Math.round(item.temp_max)}°</span>
        <span className="ml-2">{Math.round(item.temp_min)}°</span>
      </div>
    </div>
  );
};

const ForecastCards = ({
  forecast,
  day,
}: {
  forecast: Forecast[];
  day: string;
}) => {
  const days = forecast.filter((item) => {
    if (item.forecastDayFull !== day && item.forecastTime === "12:00") {
      return item;
    }
  });

  const items = days.map((item, index) => {
    return createElement(item, index);
  });
  if (items.length === 4) {
    const element = createElement(forecast[forecast.length - 1], 4);
    items.push(element);
  }
  return <div className="grid grid-cols-5 gap-x-2 md:gap-x-4">{items}</div>;
};

export default ForecastCards;
