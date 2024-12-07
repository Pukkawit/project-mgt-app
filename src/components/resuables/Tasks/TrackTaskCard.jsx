import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import trackTaskIcons from "../../../../public/assets/icons/dashboard/track-tasks-icons.svg";

function TrackTaskCard({ title, bgColor, textColor }) {
  return (
    <div className=" p-4 shadow-sm space-y-4">
      {/* Title Section */}
      <div
        className={`flex items-center justify-center p-[10px] rounded-lg  w-[130px] text-[16px] font-medium font-urbanist text-${textColor}`}
        style={{ backgroundColor: bgColor }}
      >
        {title}
      </div>

      {/* Task Section */}
      <div className=" flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <p className="smallBodyTextM text-darkColors-black font-roboto">
            Name
          </p>
          <p className="text-gray-900 font-semibold heading4">Task</p>
          <hr className="mt-1 mb-4 w-[130px]" />
        </div>
        {/* Icons Section */}
        <div className="flex flex-col items-center gap-4">
          <p className="m-0 leading-none smallBodyTextM text-darkColors-black">
            Assignee
          </p>
          <svg className="w-6 h-6">
            <use href={`${trackTaskIcons}#profile`}></use>
          </svg>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="m-0 leading-none smallBodyTextM text-darkColors-black">
            Due Date
          </p>
          <svg className="w-6 h-6">
            <use href={`${trackTaskIcons}#calendar`}></use>
          </svg>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="m-0 leading-none smallBodyTextM text-darkColors-black">
            Priority
          </p>
          <svg className="w-6 h-6">
            <use href={`${trackTaskIcons}#flag`}></use>
          </svg>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="m-0 leading-none smallBodyTextM text-darkColors-black">
            Comment
          </p>
          <svg className="w-6 h-6">
            <use href={`${trackTaskIcons}#comment`}></use>
          </svg>
        </div>
      </div>

      {/* Add Task Section */}
      <Link
        to={"/profile/tasks/new-project"}
        className="w-full bigBodyTextM text-darkColors-grey"
      >
        Add Task
      </Link>
    </div>
  );
}

TrackTaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default TrackTaskCard;
