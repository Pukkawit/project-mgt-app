import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import googlePlay from "../../../../../public/assets/images/googleplay.png";
import appstore from "../../../../../public/assets/images/appstore.png";
import featuredGuy from "../../../../../public/assets/images/benefit-smiling-guy.png";

const Benefit = () => {
  return (
    <div className="max-container mx-auto my-14 pb-16 h-[1000px] sm:h-[565px] flex flex-col sm:flex-row gap-y-20 sm:gap-x-32 items-center section">
      <div className="min-w-96 max-w-[650px] text-center sm:text-left w-full sm:w-auto">
        <h2 className="heading2 text-darkColors-grey mb-5">
          Key Benefit of Taskly
        </h2>
        <p className="pb-5 bigBodyTextM text-darkColors-grey">
          Taskly focused on outcomes offers several key benefits. It streamlines
          product planning by organizing tasks, priorities, and timelines in one
          place, ensuring clarity and alignment. It also boosts team
          collaboration through real-time communication and document sharing,
          helping teams stay on the same page and work efficiently together.
          Additionally, such platforms enhance project delivery by tracking
          progress and deadlines, ensuring projects are completed on time and
          within scope. Overall, they foster accountability, improve
          productivity, and drive successful product outcomes.
        </p>
        <div className="flex gap-2">
          <Link to="#">
            <img src={googlePlay} alt="googleplay" className="w-52" />
          </Link>
          <Link to="#">
            <img src={appstore} alt="googleplay" className="w-52" />
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-primary rounded-full"></div>
        <LazyLoadImage
          src={featuredGuy}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-48"
        />
      </div>
    </div>
  );
};

export default Benefit;
