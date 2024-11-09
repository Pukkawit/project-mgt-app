import Button from "../resuables/Button";

const Onboarding1 = () => {
  return (
    <div className="max-container  h-[100vh]  max-w-[500px] flex flex-col items-center justify-center relative">
      <div className="">
        <h1 className="heading1 text-darkColors-grey text-center mb-24">
          Logo
        </h1>
        <h4 className="heading4 text-darkColors-grey text-center mb-12 max-w-96">
          Welcome to Product name, where product meets innovation-designed to
          help you plan, track, and execute your product strategy seamlessly.
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

export default Onboarding1;
