import { useState } from "react";
import taskIcons from "../../../../public/assets/icons/dashboard/tasksIcons.svg";
import { textsColors } from "../../../../public/constants/textDynamicColors";
import screenShot1 from "../../../../public/assets/images/tasks/screenshot1.png";

const TasksCard = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const paragraph = false;

  const text = "UX Writing";
  // Function to get the color based on text content
  const getTextColor = (text) => {
    const colorObj = textsColors.find((item) => item.text === text);
    return colorObj ? colorObj.color : "#000"; // Default to black if no match is found
  };

  const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  const handleMouseLeave = () => {
    setIsGrabbing(false);
  };

  return (
    <div className="flex relative">
      <div
        className={`w-[250px] border rounded-lg bg-white border-[#E2E8F0] transition-transform duration-300 ${
          isGrabbing ? "rotate-12 shadow-xl cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-[#1E293B] leading-18.75px font-bold text-base tracking-[0.2px] mb-2">
              Design System
            </h3>
            {paragraph ? (
              <p className="text-[#94A3B8] leading-16.8px font-normal text-sm tracking-[0.2px]">
                Create a consistent look and feel both on web and mobile.
              </p>
            ) : (
              <div className="h-24 w-full bg-slate-400">
                <img
                  src={screenShot1}
                  alt="screenshots"
                  className="object-fit object-contain"
                />
              </div>
            )}
          </div>
          <div className="h-7 flex items-center justify-between">
            <h4
              className="text-xs font-semibold leading-[14.06px] tracking-[0.2px] bg-[#F0F4FF] w-max py-1 px-2"
              style={{ color: getTextColor(text) }} // Dynamically set color
            >
              {text}
            </h4>
            <div className="w-24 flex items-center justify-end">
              <img
                className="object-fit object-cover h-7 w-7 rounded-full border-2 border-white -ml-2"
                src="../../../../../../public/assets/images/Avatars/UI Design/avatar1.png"
                alt="avatar1"
              />
              <img
                className="object-fit object-cover h-7 w-7 rounded-full border-2 border-white -ml-2"
                src="../../../../../../public/assets/images/Avatars/UI Design/avatar2.png"
                alt="avatar2"
              />
              <img
                className="object-fit object-cover h-7 w-7 rounded-full border-2 border-white -ml-2"
                src="../../../../../../public/assets/images/Avatars/UI Design/avatar3.png"
                alt="avatar3"
              />
              <div className="text-[10px] text-[#94A3B8] font-medium h-7 w-7 rounded-full border-2 border-white -ml-2 flex justify-center items-center bg-[#EAF0FF] tracking-[0.2px] leading-[11.72px]">
                +3
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#E2E8F0] w-full h-12 flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4">
                <use href={`${taskIcons}#chat`}></use>
              </svg>
              <div className="text-[#94A3B8] text-[12px] font-medium tracking-[0.2px] leading-[14.06px]">
                10
              </div>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4">
                <use href={`${taskIcons}#link`}></use>
              </svg>
              <div className="text-[#94A3B8] text-[12px] font-medium tracking-[0.2px] leading-[14.06px]">
                2
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-[#306BFF] text-[12px] font-medium tracking-[0.2px] leading-[14.06px]">
              10
            </div>
            <svg className="w-4 h-4">
              <use href={`${taskIcons}#likes`}></use>
            </svg>
          </div>
        </div>
        <div className="w-[246px] border rounded-lg border-[#E2E8F0] h-10 -bottom-1 left-0.5 -z-10 absolute"></div>
      </div>
    </div>
  );
};

export default TasksCard;
