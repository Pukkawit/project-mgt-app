/* import CloseIcon from "../../../public/assets/icons/CloseIcon"; */
import InputField from "../resuables/InputField";
import Button from "../resuables/Button";
/* import GoogleIcon from "../../../public/assets/icons/google_icon.png"; */
import { useNavigate } from "react-router-dom";
import PasswordInputField from "../resuables/PasswordInputField";

const GoogleIcon = "/assets/icons/google_icon.png";
const CloseIcon = "/assets/icons/close-icon.svg";
const SignUpPage = () => {
  const navigate = useNavigate();

  const Navigate = useNavigate();

  const handleLogin = () => {
    Navigate("/login");
  };
  const home = () => {
    navigate("/");
  };
  return (
    <div className="max-container  section h-auto w-full flex flex-col items-center justify-center relative pb-10">
      <div className="max-w-[500px] mt-[160px] flex flex-col items-center ">
        <div
          className="absolute top-[60px] right-0 cursor-pointer hover:text-red-950 text-[#5C5858]"
          onClick={home}
        >
          <svg className="w-6 h-6">
            <use href={`${CloseIcon}#close-icon`}></use>
          </svg>
        </div>
        <div className="mb-[54px]">
          <h1 className="heading1 text-darkColors-grey text-center">Sign Up</h1>
          <h3 className="heading3 text-darkColors-grey text-center">
            Sign up to your account.
          </h3>
        </div>
        <form>
          <InputField label="Full name" width="499px" />
          <InputField label="Email Address" width="499px" />
          <PasswordInputField label="Create password" width="499px" />
        </form>
        <Button
          width="100%"
          bg="var(--primary)"
          text="Next"
          color="white"
          fontFamily="urbanist"
          hoverBg="var(--primaryShade2)"
        />
        <Button
          img={true}
          width={"100%"}
          bg={"transparent"}
          text="Sign Up with Google"
          color={"var(--darkColors-grey)"}
          imgSrc={GoogleIcon}
          imgAlt={"google-icon"}
          fontFamily={"urbanist"}
          border={"border"}
          borderColor="var(--primary)"
          onClick={""}
        />
        <p className="bigBodyTextM text-darkColors-grey mt-5">
          Already have an account?{" "}
          <span
            className="hover:text-primaryShade2 text-primary cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
