import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../../resuables/Button";
/* import HeroImage from "../../../../../public/assets/images/hero-img.jpg"; */

const HeroImage = "/assets/images/hero-img.jpg";
const Hero = () => {
  return (
    <div className="h-[623px] relative">
      <LazyLoadImage
        src={HeroImage}
        className="w-full h-full brightness-[0.35] object-cover"
      />
      <div className="w-full px-5 sm:max-w-[724px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white flex flex-col items-center">
        <h2 className="text-[40px] font-urbanist text-darkColors-lightestGrey font-bold text-center leading-10">
          Plan, Collaborate And Execute
        </h2>
        <p className="bigBodyTextR text-darkColors-lightestGrey font-urbanist text-center mb-[103px] mt-[17px]">
          Plan with clear goals and resources. Then, collaborate effectively
          with teams to ensure smooth communication. Finally, execute tasks
          efficiently to achieve key milestones and project outcomes, this
          fosters teamwork and ensures project goals are met..
        </p>
        <Button
          type="button"
          text="Get Started"
          bg="var(--primary)"
          hoverBg="var(--primaryShade2)"
          fontFamily="urbanist"
        />
      </div>
    </div>
  );
};

export default Hero;
