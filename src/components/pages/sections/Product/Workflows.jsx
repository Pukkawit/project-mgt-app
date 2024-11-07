import { workflows } from "../../../constants/worflows";
import WorkflowsCard from "../../../resuables/WorkflowsCard";

const Workflows = () => {
  return (
    <div className="max-container section">
      <h2 className="heading2 text-darkColors-grey mb-[30px]">
        Workflows for all projects
      </h2>
      <div className="flex justify-start gap-x-[28px]">
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
