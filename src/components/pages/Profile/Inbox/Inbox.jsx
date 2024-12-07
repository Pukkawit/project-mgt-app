import EmptyInbox from "./EmptyInbox";
import { sideBarMenuitems } from "../../../../../public/constants/profileMenuItems";

const Inbox = () => {
  return (
    <div className="h-full">
      {sideBarMenuitems.map(
        (item, index) =>
          item.inbox &&
          item.inbox < 1 && (
            <div className="h-full w-full" key={index}>
              <EmptyInbox />
            </div>
          )
      )}
    </div>
  );
};

export default Inbox;
