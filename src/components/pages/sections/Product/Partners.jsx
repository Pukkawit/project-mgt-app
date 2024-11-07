import { partners } from "../../../constants/partners";

const Partners = () => {
  return (
    <div>
      <h2 className="heading2 text-darkColors-grey text-center">
        Trusted by teams at
      </h2>
      <div className="flex flex-wrap justify-center gap-x-20">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center gap-x-20 h-28">
            <img src={partner.img} alt={partner.name} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
