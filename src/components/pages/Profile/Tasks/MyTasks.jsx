import { tasks } from "../../../../../public/constants/tasks";
import TasksLists from "../../../resuables/Tasks/TasksLists";

const MyTasks = () => {
  return (
    <div className="scrollbar-custom overflow-y-clip overflow-x-scroll flex flex-col lg:flex lg:flex-row md:grid md:grid-cols-2 items-start gap-8 justify-between">
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
  );
};

export default MyTasks;
