import { useState } from "react";
import CloseIcon from "../../../public/assets/icons/CloseIcon";
import InputField from "../resuables/InputField";
import Button from "../resuables/Button";
import GoogleIcon from "../../../public/assets/icons/google_icon.png";
const SignUpPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="max-container  section h-auto w-full flex flex-col items-center justify-center relative">
      <div className="max-w-[500px] mt-[160px] flex flex-col items-center ">
        <div
          className="absolute top-[60px] right-0 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CloseIcon isHovered={isHovered} />
        </div>
        <div className="mb-[54px]">
          <h1 className="heading1 text-darkColors-grey text-center">Sign Up</h1>
          <h3 className="heading3 text-darkColors-grey text-center">
            Sign up to your account.
          </h3>
        </div>
        <form>
          <InputField label="Full name" />
          <InputField label="Email Address" />
          <InputField label="Create password" />
        </form>
        <Button
          width="full"
          bg="primary"
          text="Next"
          color="white"
          fontFamily="urbanist"
          hoverBg="primaryShade2"
        />
        <Button
          width={"full"}
          bg={"transparent"}
          text="Sign Up with Google"
          color={"darkColors-grey"}
          imgSrc={GoogleIcon}
          imgAlt={"google-icon"}
          fontFamily={"urbanist"}
          border={"border"}
          borderColor="primary"
          px={"[25px]"}
          py={"[17px]"}
        />
        <p className="bigBodyTextM text-darkColors-grey mt-[54px]">
          Already have an account? <span onClick={""}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
