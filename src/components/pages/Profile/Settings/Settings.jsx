import Button from "../../../resuables/Button";
import InputField from "../../../resuables/InputField";
import Label from "../../../resuables/Label";
import CustomRadioButton from "../../../resuables/settings/CustomRadioButton";
import RightItems from "../../../resuables/settings/RightItems";
import ToggleSwitch from "../../../resuables/ToggleSwitch";
import ProfileAvatar from "./ProfileAvatar";
import www from "/assets/icons/dashboard/world-wide-web.svg";

const Settings = () => {
  return (
    <div>
      <div className="border-b border-[#5C5858] pb-6 mb-10">
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
      <div className="border-b border-[#5C5858] pb-6 mb-10">
        <div className="flex justify-between items-start w-full  ">
          <div className="flex flex-col gap-10">
            <ToggleSwitch
              title="Text Message (SMS)"
              description="Receive a one-time passcode via SMS each time you log in."
            />
            <ToggleSwitch
              title="Authenticator App (TOTP)"
              description="Use an app to receive a temporary one-time passcode each time you log in."
            />
          </div>
          <RightItems
            title="Two factors authentication (2FA)"
            description="Keep your account secure by enabling 2FA via SMS or using a temporary one-time passcode (TOTP) from an authenticator app."
          />
        </div>
      </div>
      <div className="border-b border-[#5C5858] pb-6 mb-10">
        <div className="flex justify-between items-start w-full  ">
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <img
                src="/assets/images/light_dark_theme/light_theme.png"
                alt="light-theme-img"
              />
              <h3 className="heading3 text-darkColors-grey">Light</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src="/assets/images/light_dark_theme/dark_theme.png"
                alt="light-theme-img"
              />
              <h3 className="heading3 text-darkColors-grey">Dark</h3>
            </div>
          </div>
          <RightItems
            title="Appearance"
            description="Choose light or dark mode."
          />
        </div>
      </div>
      <div className="border-b border-[#5C5858] pb-6 mb-10">
        <div className="flex justify-between items-start w-full  ">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="language"
                className="mediumBodyTextM text-[#5C5858] "
              >
                Language
              </label>
              <div className="relative h-[60px]">
                <select
                  className="inputField w-96 bigBodyTextM pl-10"
                  id="language"
                  name="language"
                >
                  {/* language options */}
                  <option value="" selected>
                    Select Language
                  </option>
                  <option value="eng">English</option>
                </select>
                <svg className="w-6 h-6 absolute top-1/2 left-4 -translate-y-1/2">
                  <use href={`${www}#www`}></use>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="time-zone"
                className="mediumBodyTextM text-[#5C5858] "
              >
                Time Zone
              </label>
              <div className="relative h-[60px]">
                <select
                  className="inputField w-96 bigBodyTextM pl-10"
                  id="time-zone"
                  name="time-zone"
                >
                  {/* language options */}
                  <option value="" selected>
                    Select Time Zone
                  </option>
                  <option value="eng">GMT</option>
                </select>
                <svg className="w-6 h-6 absolute top-1/2 left-4 -translate-y-1/2">
                  <use href={`${www}#www`}></use>
                </svg>
              </div>
            </div>
          </div>
          <RightItems
            title="Language & Region"
            description="Customize your language and region."
          />
        </div>
      </div>
      <div className="border-b border-[#5C5858] pb-6 mb-10">
        <div className="flex justify-between items-start w-full  ">
          <div className="flex flex-col gap-10">
            <CustomRadioButton
              title="Start of the calendar week"
              options={["Sunday", "Monday"]}
            />
            <CustomRadioButton
              title="Time format"
              options={["24 hour", "12 hour"]}
            />
            <CustomRadioButton
              title="Date format"
              options={["mm/dd/yyyy", "dd/mm/yyyy", "yyyy/mm/dd"]}
            />
          </div>
          <RightItems
            title="Time & Date format"
            description="Select the way times & dates are displayed."
          />
        </div>
      </div>
      <div className="border-b border-[#5C5858] pb-6 mb-10">
        <div className="flex justify-between items-start w-full  ">
          <div className="flex flex-col gap-10">
            <div className="flex gap-12">
              <p className="bigBodyTextM text-darkColors-lightGrey w-[349px]">
                Log out all sessions including any session on mobile, iPad, and
                other browsers
              </p>
              <Button
                text="Logout all sections"
                bg="transparent"
                color="#5C5858"
                onClick={() => {}}
                type="button"
                borderColor="#5C5858"
                border={true}
              />
            </div>
            <div className="flex flex-col gap-4 items-start">
              <Button
                text="Delete Account"
                bg="var(--statusColors-error)"
                color="#ffffff"
                onClick={() => {}}
                type="button"
              />
              <Button
                type="button"
                text="Save Changes"
                bg="var(--primary)"
                color="#ffffff"
                onClick={() => {}}
              />
            </div>
          </div>
          <RightItems title="Danger zone" description="Proceed with caution." />
        </div>
      </div>
    </div>
  );
};

export default Settings;
