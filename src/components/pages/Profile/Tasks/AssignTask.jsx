import { useState } from "react";
import InputField from "../../../resuables/InputField";
import Button from "../../../resuables/Button";
import Label from "../../../resuables/Label";
import SelectInputField from "../../../resuables/SelectInputField";

const AssignTask = () => {
  const [newTaskData, setNewTaskData] = useState({
    taskTitle: "",
    taskType: "",
    startDate: "",
    endDate: "",
    taskDescription: "",
  });

  // Universal handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <div className="flex w-full justify-between">
          <InputField
            id="task-name"
            type="text"
            width="350px"
            label="task-name"
            value={newTaskData.taskTitle}
            onChange={handleChange}
            name="task-name"
            htmlFor="task-name"
          />
          <InputField
            id="task-type"
            type="text"
            label="task-type"
            width="350px"
            value={newTaskData.taskType}
            onChange={handleChange}
            name="task-type"
            htmlFor="task-type"
          />
          <InputField
            id="task-start-date"
            type="date"
            label="task-start-date"
            width="175px"
            value={newTaskData.startDate}
            onChange={handleChange}
            name="task-start-date"
            htmlFor="task-start-date"
          />
          <InputField
            id="task-end-date"
            type="date"
            label="task-end-date"
            width="175px"
            value={newTaskData.endDate}
            onChange={handleChange}
            name="task-end-date"
            htmlFor="task-end-date"
          />
        </div>
        <div className="flex flex-col gap-y-[10px] mt-4">
          <Label htmlFor="task-description" label="Task Description" />
          <textarea
            id="task-description"
            rows="10"
            value={newTaskData.taskDescription}
            onChange={handleChange}
            name="task-description"
            className="smallBodyTextM inputField h-24"
          />
        </div>
        <div className="flex items-center gap-11 mt-4">
          <div className="flex flex-col gap-y-[10px] ">
            <Label htmlFor="assign-to" label="Assign to" />
            <SelectInputField
              id="assign-to"
              value={"value"}
              onChange={handleChange}
              name="assign-to"
              width={"150px"}
              options={[
                { value: "", label: "Select" },
                { value: "Team", label: "Team" },
                { value: "Manager", label: "Manager" },
              ]}
            />
          </div>
          <Label
            htmlFor="priority"
            label="Priority"
            component={
              <SelectInputField
                id="priority"
                value={newTaskData.taskType}
                onChange={handleChange}
                width={"150px"}
                options={[
                  { value: "", label: "Select" },
                  { value: "High", label: "High" },
                  { value: "Low", label: "Low" },
                ]}
                name="startDate"
              />
            }
          />
        </div>
      </form>
      <div className="flex justify-end gap-2 mt-11">
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
          hoverBg="var(--primary)"
          hoverText="var(--primaryShade5)"
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
    </div>
  );
};

export default AssignTask;
