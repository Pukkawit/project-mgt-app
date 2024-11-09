import Button from "../resuables/Button";

const Onboarding2 = () => {
  return (
    <div className="max-container  h-[100vh]  max-w-[500px] flex flex-col items-center justify-center relative">
      <div className="">
        <h1 className="heading1 text-darkColors-grey text-center mb-24">
          Logo
        </h1>
        <h4 className="heading4 text-darkColors-grey text-center mb-12 max-w-96">
          Collaborate with your team, prioritize features, and manage your
          product roadmap with ease—all in one powerful platform.
        </h4>
      </div>

      <Button
        bg={"primary"}
        text="Let’s do it!"
        color={"white"}
        fontFamily={"urbanist"}
        hoverBg={"primaryShade2"}
      />
    </div>
  );
};

export default Onboarding2;
