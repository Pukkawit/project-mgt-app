import { workflows } from "../../../../../public/constants/worflows";
import WorkflowsCard from "../../../resuables/WorkflowsCard";

const Workflows = () => {
  return (
    <div className="w-full max-container section">
      <h2 className="heading2 text-darkColors-grey mb-[30px] text-center sm:text-left">
        Workflows for all projects
      </h2>
      <div className="flex flex-col sm:flex-row justify-start gap-x-[28px]">
        {workflows.map((workflow, index) => (
          <div key={index}>
            <WorkflowsCard title={workflow.title} content={workflow.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
