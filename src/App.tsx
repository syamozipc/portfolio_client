import { useEffect, useState } from "react";
import "./App.css";

type Task = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
};

type TaskListRes = {
  task_list: Task[];
};

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8082/api/tasks");
      const data: TaskListRes = await res.json();
      console.log(data.task_list);

      setTaskList(data.task_list);
    })();
  }, []);

  return (
    <>
      {taskList.length &&
        taskList.map((task: Task) => <div key={task.id}>{task.title}</div>)}
    </>
  );
}

export default App;
