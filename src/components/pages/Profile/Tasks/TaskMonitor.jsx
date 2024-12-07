const TaskMonitor = () => {
  const tasks = [
    {
      name: "Landing page",
      todo: false,
      started: false,
      inProgress: true,
      completed: true,
      timeFrame: "",
    },
    {
      name: "Authentication screen",
      todo: false,
      started: true,
      inProgress: false,
      completed: false,
      timeFrame: "",
    },
    {
      name: "Dashboard",
      todo: false,
      started: false,
      inProgress: false,
      completed: false,
      timeFrame: "",
    },
    {
      name: "Settings screen",
      todo: true,
      started: false,
      inProgress: false,
      completed: false,
      timeFrame: "",
    },
  ];

  return (
    <div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr className="bg-primary ">
            <th className="text-white heading4 px-4 py-[20px] text-left border border-darkColors-black">
              Task Name
            </th>
            <th className="text-white heading4 px-4 py-[20px] text-left border border-darkColors-black">
              To-do
            </th>
            <th className="text-white heading4 px-4 py-[20px] text-left border border-darkColors-black">
              Started
            </th>
            <th className="text-white heading4 px-4 py-[20px] text-left border border-darkColors-black">
              In Progress
            </th>
            <th className="text-white heading4 px-4 py-[20px] text-left border border-darkColors-black">
              Completed
            </th>
            <th className="text-white heading4 px-4 py-[20px] text-left border border-darkColors-black">
              Time Frame
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="bigBodyTextM text-darkColors-grey text-left border border-darkColors-grey px-4 py-[20px]">
                {task.name}
              </td>
              <td
                className="bigBodyTextM text-darkColors-grey text-left border border-darkColors-grey px-4 py-[20px]"
                style={{ ...statusStyle(task.todo, "#CECDCD") }}
              ></td>
              <td
                className="bigBodyTextM text-darkColors-grey text-left border border-darkColors-grey px-4 py-[20px]"
                style={{
                  ...statusStyle(task.started, "#CCCCE8"),
                }}
              ></td>
              <td
                className="bigBodyTextM text-darkColors-grey text-left border border-darkColors-grey px-4 py-[20px]"
                style={{
                  ...statusStyle(task.inProgress, "#51A1FC"),
                }}
              ></td>
              <td
                className="bigBodyTextM text-darkColors-grey text-left border border-darkColors-grey px-4 py-[20px]"
                style={{
                  ...statusStyle(task.completed, "#26B735"),
                }}
              ></td>
              <td className="bigBodyTextM text-darkColors-grey text-left border border-darkColors-grey px-4 py-[20px]">
                {task.timeFrame}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles

const statusStyle = (active, color) => ({
  backgroundColor: active ? color : "transparent",
});

export default TaskMonitor;
