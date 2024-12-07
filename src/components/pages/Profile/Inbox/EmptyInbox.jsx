import inboxBell from "../../../../../public/assets/icons/dashboard/inbox-bell-icon.svg";

const EmptyInbox = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full">
      <div className="mb-6">
        <svg className="w-[76px] h-[76px]">
          <use href={`${inboxBell}#bell`}></use>
        </svg>
      </div>
      <div>
        <h3 className="heading3 text-darkColors-black text-center mb-6">
          You don’t have any cleared notification
        </h3>
        <p className="mediumBodyTextM text-darkColors-grey text-center">
          Congratulations! you cleared Your important notifications
        </p>
      </div>
    </div>
  );
};

export default EmptyInbox;
