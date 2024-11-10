// TasksLists.jsx
import dotsMore from "../../../../public/assets/icons/dashboard/dotsMore.svg";
import PropTypes from "prop-types";
import TasksCard from "./TasksCard";

const TasksLists = ({ title, borderColor, noOfTasks, tasks }) => {
  return (
    <div className="w-64 flex flex-col">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-[14px]">
          <h2 className="text-[#1E293B] font-bold text-sm tracking-[1px] ">
            {title}
          </h2>
          <p
            className={`w-9 h-6 border bg-[#EFFFFFF] border-[${borderColor}] rounded-[1000px] flex justify-center items-center`}
          >
            {noOfTasks}
          </p>
        </div>
        <svg className="text-[#94A3B8] w-4 h-1">
          <use href={`${dotsMore}#dotsMore`}></use>
        </svg>
      </div>
      <div className="w-full h-[2px] bg-[#1E293B] rounded-[50px] mb-8"></div>
      <div className="flex flex-col gap-6 overflow-y-clip">
        {tasks.map((task, index) => (
          <TasksCard
            key={index}
            title={task.title}
            track={task.track}
            // Pass other task properties as needed
          />
        ))}
      </div>
    </div>
  );
};

TasksLists.propTypes = {
  title: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  noOfTasks: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      track: PropTypes.string.isRequired,
      // Define other prop types as needed
    })
  ).isRequired,
};

export default TasksLists;
