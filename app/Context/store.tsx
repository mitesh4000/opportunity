"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../interfaces/task.interface";

type DataType = {
  isAddTaskModelOpen: boolean;
  AuthToken: string;
};

interface ContextProps {
  isAddTaskModalOpen: boolean;
  toggleAddTaskModal: () => void;
  tasks: Task[];
  storeTasks: (data: Task[]) => void;
}

const GlobalContext = createContext<ContextProps>({
  isAddTaskModalOpen: false,
  toggleAddTaskModal: () => {},
  tasks: [],
  storeTasks: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isAddTaskModalOpen, setAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleAddTaskModal = () => {
    setAddTaskModal(!isAddTaskModalOpen);
    console.log("modal status changed to ", isAddTaskModalOpen);
  };

  const storeTasks = (data: Task[]) => {
    setTasks(data);
  };
  return (
    <GlobalContext.Provider
      value={{ isAddTaskModalOpen, toggleAddTaskModal, tasks, storeTasks }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
