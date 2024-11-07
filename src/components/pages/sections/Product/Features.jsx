import Card from "../../../resuables/Card";
import { features } from "../../../../../public/constants/features";

const Features = () => {
  return (
    <div className="max-container section mx-auto mt-14 flex items-center flex-col pb-[60px]">
      <h2 className="w-96 text-center heading2  text-darkColors-grey mb-[50px] ">
        Your Best Product Management Platform
      </h2>
      <div className="flex items-center justify-between gap-x-14">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-center gap-4">
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
