import Button from "./resuables/Button";

const Nav = () => {
  return (
    <div className="h-[60px] mb-[56px] flex items-center justify-between">
      <h1 className="text-2xl font-bold font-unlock text-primary ">Tasky</h1>
      <div className="flex gap-x-3">
        <Button
          text="Contact Sales"
          color={"darkColors-grey"}
          bg={"primaryShade5"}
          border={"border"}
          borderColor={"primaryShade5"}
        />
        <Button color={"darkColors-grey"} text="Login" />
        <Button
          text="Sign Up"
          color={"white"}
          bg={"primary"}
          hoverBg={"primaryShade2"}
        />
      </div>
    </div>
  );
};

export default Nav;
