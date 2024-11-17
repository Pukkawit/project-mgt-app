/* import { useState } from "react"; */
import taskIcons from "../../../../public/assets/icons/dashboard/tasksIcons.svg";
import { textsColors } from "../../../../public/constants/textDynamicColors";
import PropTypes, { object } from "prop-types";

const TasksCard = ({ tasks }) => {
  /* const [isGrabbing, setIsGrabbing] = useState(false); */

  /*   const text = "UX Writing";*/

  const getTextColor = (text) => {
    const colorObj = textsColors.find((item) => item.text === text);
    return colorObj ? colorObj.color : "#000"; // Default to black if no match is found
  };

  const formatDueDate = (dateString) => {
    let day, month, year;

    // Split by either "/" or "-" based on the separator used
    const parts = dateString.includes("/")
      ? dateString.split("/")
      : dateString.split("-");

    if (parts[0].length === 4) {
      // If the first part has 4 digits, it's in yyyy/mm/dd or yyyy-mm-dd format
      [year, month, day] = parts;
    } else {
      // Otherwise, assume it's in dd/mm/yyyy or dd-mm-yyyy format
      [day, month, year] = parts;
    }

    // Create a date object with parsed values, adjusting month to 0-indexed
    const dateObj = new Date(year, month - 1, day);

    // Get current date and tomorrow's date for comparison
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // Check if the date matches tomorrow's date
    if (
      dateObj.getDate() === tomorrow.getDate() &&
      dateObj.getMonth() === tomorrow.getMonth() &&
      dateObj.getFullYear() === tomorrow.getFullYear()
    ) {
      return "Tomorrow";
    }

    // Format date to 'Mon DD' for dates after tomorrow
    return dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  /* const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  const handleMouseLeave = () => {
    setIsGrabbing(false);
  }; */

  /* ${ isGrabbing ? "rotate-12 shadow-xl cursor-grabbing" : "cursor-grab} */

  return (
    <div className="flex relative flex-col gap-6 ">
      {tasks &&
        tasks.map((taskDetail, index) => (
          <div
            key={index}
            className={`w-[250px]  border rounded-lg bg-white border-[#E2E8F0] transition-transform duration-300 "
            `}
            /* onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave} */
          >
            <div className="p-4">
              <div className="mb-4">
                <h3 className="text-[#1E293B] leading-18.75px font-bold text-base tracking-[0.2px] mb-2">
                  {taskDetail.title}
                </h3>
                {taskDetail.description !== "" ? (
                  taskDetail.description && (
                    <p className="text-[#94A3B8] leading-16.8px font-normal text-sm tracking-[0.2px]">
                      {taskDetail.description}
                    </p>
                  )
                ) : (
                  <div
                    className={`max-h-20 w-ful overflow-hidden grid ${
                      taskDetail.filesUploads.length > 1
                        ? "grid-cols-2 gap-3"
                        : "grid-cols-1"
                    }`}
                  >
                    {taskDetail.filesUploads.map((file, index) => (
                      <img
                        key={index}
                        src={file.src}
                        alt={file.alt}
                        className=" object-contain bg-[#C4C4C4] rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="h-7 flex items-center justify-between">
                <h4
                  className={`text-xs font-semibold text-[${taskDetail.color}] leading-[14.06px] tracking-[0.2px] bg-[#F0F4FF] w-max py-1 px-2`}
                  style={{ color: getTextColor(taskDetail.category) }}
                >
                  {taskDetail.category}
                </h4>
                <div className="w-24 flex items-center justify-end">
                  {taskDetail.contributors &&
                    taskDetail.contributors
                      .slice(0, 3)
                      .map((contributor, index) => (
                        <div
                          key={index}
                          className="flex items-center h-7 w-7 overflow-hidden rounded-full border-2 border-white -ml-2"
                        >
                          <img
                            className="object-fit object-cover h-full w-full "
                            src={contributor.avatar}
                            alt={contributor.alt}
                          />
                        </div>
                      ))}
                  {taskDetail.contributors.length > 3 && (
                    <div className="text-[10px] text-[#94A3B8] font-medium h-7 w-7 rounded-full border-2 border-white -ml-2 flex justify-center items-center bg-[#EAF0FF] tracking-[0.2px] leading-[11.72px]">
                      {`+${taskDetail.contributors.length - 3}`}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="border-t-[1px] border-[#E2E8F0] w-full h-12 flex justify-between items-center p-4">
              <div className="flex items-center gap-3 min-w-[50%]">
                {taskDetail.contributors &&
                  taskDetail.contributors.length > 0 &&
                  (() => {
                    // Calculate the total number of messages
                    const totalMessages = taskDetail.contributors.reduce(
                      (count, contributor) => {
                        return (
                          count +
                          (contributor.message ? contributor.message.length : 0)
                        );
                      },
                      0
                    );

                    // Only render the SVG and message count if there are messages
                    return totalMessages > 0 ? (
                      <div className="flex items-end gap-1">
                        <svg className="w-4 h-4">
                          <use href={`${taskIcons}#chat`}></use>
                        </svg>
                        <div className="text-[#94A3B8] text-[12px] font-medium tracking-[0.2px] leading-[11px]">
                          {totalMessages}
                        </div>
                      </div>
                    ) : null;
                  })()}

                {taskDetail.filesUploads &&
                  taskDetail.filesUploads.length > 0 && (
                    <div className="flex items-end gap-1">
                      <svg className="w-4 h-4">
                        <use href={`${taskIcons}#link`}></use>
                      </svg>
                      <div className="text-[#94A3B8] text-[12px] font-medium tracking-[0.2px] leading-[12px]">
                        {taskDetail.filesUploads.length}
                      </div>
                    </div>
                  )}
              </div>
              <div className="flex items-center gap-3">
                {taskDetail.likes && taskDetail.likes.length > 0 && (
                  <div className="flex items-end gap-1">
                    <div className="text-[#306BFF] text-[12px] font-medium tracking-[0.2px] leading-[11px]">
                      {taskDetail.likes.length}
                    </div>
                    <svg className="w-4 h-4">
                      <use href={`${taskIcons}#likes`}></use>
                    </svg>
                  </div>
                )}
                {taskDetail.dueDate && taskDetail.dueDate !== "" && (
                  <div className="flex items-end gap-1">
                    <svg className="w-4 h-4">
                      <use href={`${taskIcons}#calender`}></use>
                    </svg>
                    <div className="text-[#94A3B8] text-[12px] font-semibold tracking-[0.2px] leading-[11px]">
                      {formatDueDate(taskDetail.dueDate)}
                    </div>
                  </div>
                )}
                {taskDetail.completed && (
                  <div className="flex items-end gap-1">
                    <svg className="w-4 h-4">
                      <use href={`${taskIcons}#doubleTick`}></use>
                    </svg>
                    <div className="text-[#78C552] text-[12px] font-semibold tracking-[0.2px] leading-[11px]">
                      {taskDetail.completed && "Done"}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-[246px] border rounded-lg border-[#E2E8F0] h-10 -bottom-1 left-0.5 -z-10 absolute"></div>
          </div>
        ))}
    </div>
  );
};

TasksCard.propTypes = {
  tasks: PropTypes.arrayOf(object),
};
export default TasksCard;
