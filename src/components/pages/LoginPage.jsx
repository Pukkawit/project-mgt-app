import InputField from "../resuables/InputField";
import PasswordInputField from "../resuables/PasswordInputField";
import Button from "../resuables/Button";

const LoginPage = () => {
  return (
    <div className="max-container section h-[100vh] w-full flex flex-col items-center justify-center relative">
      <div className="mb-[54px]">
        <h1 className="heading1 text-darkColors-grey text-center">Login</h1>
        <h3 className="heading3 text-darkColors-grey text-center">
          Login to your account.
        </h3>
      </div>
      <form>
        <InputField label="Email Address" />
        <PasswordInputField label="Password" />
        <Button
          width={"full"}
          bg={"primary"}
          text="Login"
          color={"white"}
          fontFamily={"urbanist"}
          hoverBg={"primaryShade2"}
        />
      </form>
      <p className="bigBodyTextM text-darkColors-grey">
        Don’t have an account? <span onClick={""}>Sign Up</span>
      </p>
    </div>
  );
};

export default LoginPage;
