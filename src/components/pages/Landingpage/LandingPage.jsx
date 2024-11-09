import Hero from "../Landingpage/sections/Hero";
import Benefit from "../Landingpage/sections/Benefit";
import Features from "../Landingpage/sections/Features";
import ResourcesCategory from "../Landingpage/sections/ResourcesCategory";
import Partners from "../Landingpage/sections/Partners";
import Workflows from "../Landingpage/sections/Workflows";
const LandingPage = () => {
  return (
    <div className="max-container">
      <Hero />
      <Benefit />
      <Partners />
      <Features />
      <Workflows />
      <ResourcesCategory />
    </div>
  );
};

export default LandingPage;
