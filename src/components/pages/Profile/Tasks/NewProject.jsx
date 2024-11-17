import { useState } from "react";
import Button from "../../../resuables/Button";
import InputField from "../../../resuables/InputField";

const NewProject = () => {
  const [newProjectData, setNewProjectData] = useState({
    projectTitle: "",
    projectType: "",
    startDate: "",
    endDate: "",
    projectDescription: "",
  });

  // Universal handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <div className="flex w-full justify-between">
          <InputField
            type="text"
            width="350px"
            label="Project Title"
            value={newProjectData.projectTitle}
            onChange={handleChange}
            name="projectTitle"
          />
          <InputField
            type="text"
            label="Project Type"
            width="350px"
            value={newProjectData.projectType}
            onChange={handleChange}
            name="projectType"
          />
          <InputField
            type="date"
            label="Start Date"
            width="175px"
            value={newProjectData.startDate}
            onChange={handleChange}
            name="startDate"
          />
          <InputField
            type="date"
            label="End Date"
            width="175px"
            value={newProjectData.endDate}
            onChange={handleChange}
            name="endDate"
          />
        </div>
        <div className="flex flex-col gap-y-[10px] mt-4">
          <label
            htmlFor="project-description"
            className="mediumBodyTextM font-urbanist text-darkColors-grey"
          >
            Project Description
          </label>
          <textarea
            id="project-description"
            rows="10"
            value={newProjectData.projectDescription}
            onChange={handleChange}
            name="projectDescription"
            className="smallBodyTextM inputField h-24"
          />
        </div>
      </form>
      <div className="flex justify-end gap-2 mt-4">
        <Button
          type="submit"
          color="white"
          bg="var(--primary)"
          text="Create"
          fontFamily="urbanist"
          hoverBg="var(--primaryShade5)"
          hoverText="var(--primary)"
        />
        <Button
          type="button"
          color="var(--primary)"
          bg="var(--primaryShade5)"
          text="Cancel"
          fontFamily="urbanist"
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
    </div>
  );
};

export default NewProject;
