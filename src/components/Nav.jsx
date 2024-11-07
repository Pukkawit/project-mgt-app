import Button from "./resuables/Button";
import NavMenu from "./NavMenu";
const Nav = () => {
  return (
    <div className="h-[60px] py-2 px-20 mb-[56px] flex items-center justify-between">
      <h1 className="text-2xl font-bold font-unlock text-primary">Tasky</h1>
      <NavMenu />
      <Button text="Sign Up" />
    </div>
  );
};

export default Nav;
