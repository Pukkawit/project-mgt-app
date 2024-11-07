import PropTypes from "prop-types";

const WorkflowsCard = ({ title, content }) => {
  return (
    <div className="mb-[60px]">
      <div className="bg-primary h-[91px] w-[388px] py-[18px] px-[71px] rounded-t-[20px] flex items-center justify-center ">
        <h3 className="heading3 text-darkColors-lightestGrey text-center">
          {title}
        </h3>
      </div>
      <div className="bg-darkColors-lightestGrey w-[388px] h-[157px] rounded-b-[20px] p-8">
        <p className="bigBodyTextM text-darkColors-grey">{content}</p>
      </div>
    </div>
  );
};

// props validation

WorkflowsCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default WorkflowsCard;
