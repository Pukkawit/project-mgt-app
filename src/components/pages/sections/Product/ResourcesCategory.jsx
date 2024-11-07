import Card from "../../../resuables/Card";
import { resources } from "../../../../../public/constants/resources";
import { Link } from "react-router-dom";
import RightArrow from "../../../../../public/assets/icons/right-arrow.png";

const ResourcesCategory = () => {
  return (
    <div className="max-container  mx-auto section flex items-start flex-col pb-[60px] ">
      <div className="flex items-center w-full justify-between mb-8">
        <h2 className="text-darkColors-grey heading3">Resource Categories</h2>
        <Link to="#">
          <p className="text-darkColors-grey bigBodyTextR flex items-center gap-x-[15px] font-urbanist">
            See more{" "}
            <span>
              <img src={RightArrow} alt="" />
            </span>
          </p>
        </Link>
      </div>
      <div className=" flex items-start justify-items-start gap-x-[50px]">
        {resources.map((resource, index) => (
          <div key={index} className="">
            <Card
              image={resource.img}
              title={resource.title}
              description={resource.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesCategory;
