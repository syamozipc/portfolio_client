export type Task = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
};

export type TaskListRes = {
  task_list: Task[];
};
