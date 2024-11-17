import { Legend } from "recharts";

const ChartLegend = () => {
  return (
    <div className="relative min-w-max left-0 flex justify-center items-center">
      <Legend
        layout="vertical"
        align="center"
        verticalAlign="middle"
        iconType="circle"
        wrapperStyle={{ fontSize: "14px", color: "#5C5858" }}
        payload={[
          { value: "Task Done", type: "circle", color: "#5555B2" },
          { value: "Task Target", type: "circle", color: "#C8C4C4" },
        ]}
      />
    </div>
  );
};

export default ChartLegend;
