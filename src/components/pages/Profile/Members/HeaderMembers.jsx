import profileMember from "../../../../../public/assets/icons/dashboard/track-tasks-icons.svg";
import Button from "../../../resuables/Button";

const HeaderMembers = () => {
  return (
    <div className="flex justify-between w-full items-center h-[100px] p-7 bg-slate-100">
      <div className="flex gap-2 items-center">
        <svg className="w-6 h-6">
          <use href={`${profileMember}#profile`}></use>
        </svg>
        <h3 className="heading3 text-darkColors-black">Members</h3>
      </div>
      <div className="flex items-center gap-[10px]">
        <h4 className="heading4 text-darkColors-grey">4 total</h4>
        <div className="search-bar relative h-auto">
          <input
            type="text"
            className="border border-darkColors-lightGrey w-[251px] outline-none pl-[52px] px-4 py-2 rounded-[5px]"
            placeholder="Search Users"
          />
          <div className="icon absolute top-0 left-0 flex items-center justify-center h-full w-[52px] ">
            <svg className="w-6 h-6 text-[#848181] cursor-pointer">
              <use href={`${profileMember}#search`}></use>
            </svg>
          </div>
        </div>
        <Button
          text="Create"
          bg="var(--primary)"
          hoverText="var(--primary)"
          type="button"
          color="#F5F5F5"
          fontFamily="urbanist"
          hoverBg="var(--primaryShade5)"
          marginButtom={0}
          paddingTopBottom={10}
        />
      </div>
    </div>
  );
};

export default HeaderMembers;
