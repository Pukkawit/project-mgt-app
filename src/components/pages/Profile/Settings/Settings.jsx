import InputField from "../../../resuables/InputField";
import Label from "../../../resuables/Label";
import RightItems from "../../../resuables/settings/RightItems";
import ProfileAvatar from "./ProfileAvatar";

const Settings = () => {
  return (
    <div>
      <div className="border-b border-[#5C5858] pb-6">
        <div className="flex justify-between items-start w-full mb-16 ">
          <ProfileAvatar />{" "}
          <RightItems
            title="Profile"
            description="Your personal information and account settings"
          />
        </div>
        <Label
          htmlFor="full-name"
          label="Full Name"
          component={
            <InputField
              width="400px"
              onChange={() => {}}
              id="full-name"
              type="text"
            />
          }
          id="full-name"
          name="full-name"
        />
        <Label
          htmlFor="email"
          label="Email"
          component={
            <InputField
              width="400px"
              onChange={() => {}}
              id="email"
              type="email"
            />
          }
          id="email"
          name="email"
        />
        <Label
          htmlFor="password"
          label="Password"
          component={
            <InputField
              width="400px"
              onChange={() => {}}
              id="password"
              type="password"
            />
          }
          id="password"
          name="password"
        />
      </div>
    </div>
  );
};

export default Settings;
