import { partners } from "../../../../../public/constants/partners";

const Partners = () => {
  return (
    <div className="max-container section">
      <h2 className="heading2 text-darkColors-grey text-center mb-9">
        Trusted by teams at
      </h2>
      <div className="grid grid-cols-2  sm:flex sm:flex-row  justify-items-center gap-y-10 sm:gap-x-20 sm:justify-center">
        {partners.map((partner, index) => (
          <div key={index} className=" ">
            <img src={partner.img} alt={partner.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
