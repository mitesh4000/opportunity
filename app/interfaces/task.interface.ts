export type Status = "To do" | "Under review" | "In progress" | "Finished";
export type Priority = "High" | "Low" | "Medium";

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  deadline: Date;
  createdAt: Date;
}

export interface TaskCardProps {
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  deadline: Date;
  createdAt: Date;
}
