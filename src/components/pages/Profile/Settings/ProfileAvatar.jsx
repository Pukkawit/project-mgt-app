import settingsUserPhoto from "../../../../../public/assets/images/Avatars/dashboard-user.png";

const ProfileAvatar = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="avatar-image w-[100px] h-[100px] rounded-full overflow-hidden">
        <img
          src={settingsUserPhoto}
          alt="Profile Avatar"
          className="w-full h-full"
        />
      </div>
      <h4 className="heading4 text-darkColors-grey">Username</h4>
    </div>
  );
};

export default ProfileAvatar;
