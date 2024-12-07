import TrackTaskCard from "../../../resuables/Tasks/TrackTaskCard";

const TrackTask = () => {
  const trackTask = {
    Todo: { title: "TODO", textColor: "darkColorsGrey", bgColor: "#CECDCD" },
    Started: { title: "Started", textColor: "white", bgColor: "#CCCCE8" },
    InProgress: {
      title: "In Progress",
      textColor: "white",
      bgColor: "#51A1FC",
    },
    Completed: { title: "Completed", textColor: "white", bgColor: "#26B735" },
  };

  return (
    <div>
      {/* Iterate over the tasks */}
      {Object.entries(trackTask).map(([key, task]) => (
        <TrackTaskCard
          key={key}
          title={task.title}
          textColor={task.textColor}
          bgColor={task.bgColor}
        />
      ))}
    </div>
  );
};

export default TrackTask;
