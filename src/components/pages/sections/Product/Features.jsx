import Card from "../../../resuables/Card";
import { features } from "../../../../../public/constants/features";

const Features = () => {
  return (
    <div className="max-container section  mt-14  pb-[60px]">
      <h2 className="w-96 text-center heading2 mx-auto  text-darkColors-grey mb-[50px] ">
        Your Best Product Management Platform
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-8 md:gap-14">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-auto">
            <Card
              image={feature.img}
              title={feature.title}
              description={feature.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
