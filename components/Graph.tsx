import { ResponsiveLine } from "@nivo/line";
import { Forecast } from "../types/types";

const getData = (forecast: Forecast[]) => {
  const time = forecast.slice(0, 8);
  const items = time.map((item) => {
    return {
      x: item.forecastTimeLocal,
      y: item.temp,
    };
  });
  return [
    {
      id: "temperature",
      color: "hsl(151, 70%, 50%)",
      data: items,
    },
  ];
};

const Graph = ({ forecast, unit }: { forecast: Forecast[]; unit: string }) => {
  const data = getData(forecast);

  const theme = {
    textColor: "#ffffff",
    fontSize: 13,
    tooltip: {
      container: {
        background: "#11182740",
        color: "#ffffff",
      },
    },
  };

  const minValue = unit === "metric" ? 0 : 32;

  return (
    <div className="h-[250px] w-full">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, bottom: 50, left: 20, right: 20 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: minValue,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        enableArea={true}
        enableSlices="x"
        areaBaselineValue={minValue}
        useMesh={true}
        legends={[]}
        motionConfig="stiff"
        theme={theme}
      />
    </div>
  );
};

export default Graph;
