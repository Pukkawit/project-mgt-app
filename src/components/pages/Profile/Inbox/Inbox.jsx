import EmptyInbox from "./EmptyInbox";
import { sideBarMenuItems } from "../../../../constants/profileMenuItems";

const Inbox = () => {
  return (
    <div className="h-full">
      {sideBarMenuItems.map(
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
