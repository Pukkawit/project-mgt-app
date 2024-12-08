import { tasks } from "../../../../constants/tasks";
import TasksLists from "../../../resuables/Tasks/TasksLists";
import Button from "../../../resuables/Button";
import { useNavigate } from "react-router-dom";

const MyTasks = () => {
  const Navigate = useNavigate();

  return (
    <div className="flex flex-col w-full gap-20">
      <div className="h-full flex flex-col lg:flex lg:flex-row md:grid md:grid-cols-2 items-start gap-8 justify-between ">
        {tasks.map((taskCategoryObject, index) =>
          // Loop through each task category
          Object.keys(taskCategoryObject).map((categoryKey) => {
            const category = taskCategoryObject[categoryKey][0];
            return (
              <TasksLists
                key={`${index}-${categoryKey}`} // unique key for each category
                title={category.title.toUpperCase()}
                borderColor={category.borderColor}
                tasks={category.tasks}
              />
            );
          })
        )}
      </div>
      <div className="text-right self-end w-full">
        <Button
          width="350px"
          bg={"var(--primary)"}
          text="New Task"
          type="submit"
          color={"#ffffff"}
          img={true}
          imgSrc={"../../../../../public/assets/icons/Tasks/tasks-icons.svg"}
          hoverBg={"var(--primaryShade2)"}
          onClick={() => Navigate("/profile/tasks/create-task")}
        />
      </div>
    </div>
  );
};

export default MyTasks;
