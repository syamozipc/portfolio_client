import { useEffect, useState } from "react";
import { Task, TaskListRes } from "../types/task";
import { Link } from "react-router-dom";
import TaskComponent from "../components/Task";

import { APP_URL } from "../constant/app";

export default function TaskList() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${APP_URL}/tasks`);
      const data: TaskListRes = await res.json();
      console.log(data.task_list);

      setTaskList(data.task_list);
    })();
  }, []);

  return (
    <>
      {taskList.length &&
        taskList.map((task: Task) => (
          <TaskComponent key={task.id} task={task} />
        ))}
      <Link to="/">go back home</Link>
    </>
  );
}
