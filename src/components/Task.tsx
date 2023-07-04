import { Task } from "../types/task";

type Props = {
  task: Task;
};

export default function Task(props: Props) {
  return <div style={{ fontSize: "20px" }}>{props.task.title}</div>;
}
