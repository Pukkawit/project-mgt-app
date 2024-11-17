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
            type="text"
            width="350px"
            label="Task Title"
            value={newTaskData.taskTitle}
            onChange={handleChange}
            name="taskTitle"
          />
          <InputField
            type="text"
            label="Task Type"
            width="350px"
            value={newTaskData.taskType}
            onChange={handleChange}
            name="taskType"
          />
          <InputField
            type="date"
            label="Start Date"
            width="175px"
            value={newTaskData.startDate}
            onChange={handleChange}
            name="startDate"
          />
          <InputField
            type="date"
            label="End Date"
            width="175px"
            value={newTaskData.endDate}
            onChange={handleChange}
            name="endDate"
          />
        </div>
        <div className="flex flex-col gap-y-[10px] mt-4">
          <Label htmlFor="task-description" label="Task Description" />
          <textarea
            id="task-description"
            rows="10"
            value={newTaskData.taskDescription}
            onChange={handleChange}
            name="taskDescription"
            className="smallBodyTextM inputField h-24"
          />
        </div>
        <div className="flex items-center gap-8 mt-4">
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
          <Label
            htmlFor="assign-to"
            label="Assign to"
            component={
              <SelectInputField
                id="task-assigning"
                value={newTaskData.taskType}
                onChange={handleChange}
                width={"150px"}
                options={[
                  { value: "", label: "Select" },
                  { value: "High", label: "High" },
                  { value: "Low", label: "Low" },
                ]}
                name="task-assigning"
              />
            }
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

export default AssignTask;
