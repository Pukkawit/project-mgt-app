import Hero from "./sections/Product/Hero";
import Benefit from "./sections/Product/Benefit";
import Features from "./sections/Product/Features";
import ResourcesCategory from "./sections/Product/ResourcesCategory";
import Partners from "./sections/Product/Partners";
import Workflows from "./sections/Product/Workflows";

const Products = () => {
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

export default Products;
