/* import dotsMore from "../../../../public/assets/icons/dashboard/dotsMore.svg"; */
import TasksCard from "./TasksCard";
import PropTypes from "prop-types";

const dotsMore = "/assets/icons/dashboard/dotsMore.svg";
const TasksLists = ({ title, borderColor, tasks }) => {
  return (
    <div className="w-64 flex flex-col ">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-[14px]">
          <h2 className="text-[#1E293B] font-bold text-sm tracking-[1px] ">
            {title}
          </h2>
          <p className="w-9 h-6 text-[#94A3B8] border bg-[#FFFFFF] font-bold text-12px border-[#E2E8F0] rounded-[1000px] flex justify-center items-center">
            {tasks.length}
          </p>
        </div>
        <svg className="text-[#94A3B8] w-4 h-1">
          <use href={`${dotsMore}#dotsMore`}></use>
        </svg>
      </div>
      <div
        className="w-full h-[2px] rounded-[50px] mb-8"
        style={{ backgroundColor: borderColor }}
      ></div>
      <div className="flex flex-col gap-6 ">
        <TasksCard tasks={tasks} />
      </div>
    </div>
  );
};

TasksLists.propTypes = {
  title: PropTypes.string,
  borderColor: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

export default TasksLists;
