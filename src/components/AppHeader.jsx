import { useNavigate } from "react-router-dom";
import Button from "./resuables/Button";

const AppHeader = () => {
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    navigate("/");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="shrink-0 mobile-section sm:max-container sm:section  py-10 flex items-center justify-between">
      <h1
        className="text-2xl font-bold font-unlock text-primary cursor-pointer"
        onClick={handleHomeNavigate}
      >
        ProductHive
      </h1>

      <div className="flex gap-x-3">
        <Button
          text="Contact Sales"
          color={"var(--darkColors-grey)"}
          bg={"var(--primaryShade5)"}
          border={"border"}
          borderColor={"primaryShade5"}
        />
        <Button color={"var(--darkColors-grey)"} text="Login" />
        <Button
          text="Sign Up"
          color={"white"}
          bg={"var(--primary)"}
          hoverBg={"var(--primaryShade2)"}
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
};

export default AppHeader;
