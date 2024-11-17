import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SelectInputField from "../../../resuables/SelectInputField";
import ChartLegend from "./ChartLegend";
import { useEffect, useState } from "react";

const TaskProgressChart = () => {
  const [data, setData] = useState(null); // Entire JSON data
  const [selectedMonth, setSelectedMonth] = useState("january"); // Default month

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/database.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData); // Store the entire JSON
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle loading state
  if (!data)
    return (
      <p className="text-dashboardDarkBlue text-center bigBodyTextM">
        Loading...
      </p>
    );

  // Get data for the selected month
  const monthData = data[selectedMonth];

  // Handle cases where month data is unavailable
  if (!monthData) {
    return (
      <p className="text-red-500">No data available for the selected month.</p>
    );
  }

  const { weeklyTaskData, title } = monthData;

  return (
    <div className="p-6 bg-darkColors-lightestGrey rounded-[10px] flex flex-col gap-11 relative sm:max-w-[699px]">
      <div className="self-center flex justify-between items-center w-full relative">
        <div>
          <h4 className="heading4 text-[#5C5858] leading-[24.44px] mb-1 font-medium">
            {`Track Daily Task Progress (${title})`}
          </h4>
          <p className="tinyBodyTextR font-medium text-darkColors-grey">
            Overview of Daily Task Achievements
          </p>
        </div>
        <ChartLegend />
        <div>
          <SelectInputField
            border="0"
            name="monthFilter"
            id="monthFilter"
            width={"150px"}
            options={Object.keys(data).map((month) => ({
              value: month,
              label: month.charAt(0).toUpperCase() + month.slice(1),
            }))}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 relative">
        {weeklyTaskData.map((weekData, index) => (
          <div key={index} className="chart-container">
            <p className="text-center w-full tinyBodyTextM mb-2 text-[#848181] relative">
              {weekData.week}
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weekData.days}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="done" fill="#5555B2" name="Task Done" />
                <Bar dataKey="target" fill="#C8C4C4" name="Task Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskProgressChart;
