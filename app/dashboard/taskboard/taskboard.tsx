"use client";
import { useGlobalContext } from "@/app/Context/store";
import { Task } from "@/app/interfaces/task.interface";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import TaskCard from "../task-card/taskCard";
import "./taskboard.css";

const Taskboard = () => {
  const { tasks, storeTasks } = useGlobalContext();
  const columns = ["To do", "In progress", "Under review", "Finished"];
  const [taskBoardState, setTaskBoardState] = useState({ DragOverColumn: "" });

  const handleDrop = (e: React.DragEvent, column: string) => {
    e.preventDefault();
    setTaskBoardState({ ...taskBoardState, DragOverColumn: "" });
    updateStatus(e.dataTransfer.types[0], column);
    console.log(`dropped in ${column}`, e.dataTransfer.types[0]);
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    column: string
  ) => {
    e.preventDefault();
    setTaskBoardState({ ...taskBoardState, DragOverColumn: column });
    console.log(column);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get<Task[]>(
        `${process.env.NEXT_PUBLIC_API_KEY}/tasks`
      );
      if (response) {
        await storeTasks(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (id: String, status: String) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_KEY}/tasks/${id}`,
        { status: status }
      );

      if (response) {
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="board">
      {columns?.map((column, index) => (
        <div
          className={`column ${
            taskBoardState.DragOverColumn === column ? "highlight-column" : ""
          }`}
          key={index}
          onDrop={(e) => handleDrop(e, column)}
          onDragOver={(e) => handleDragOver(e, column)}
        >
          <div className="column-header">
            <p>{column}</p>
            <BsFilterLeft />
          </div>
          {tasks
            ?.filter((item) => item.status === column)
            .map((task) => (
              <TaskCard
                key={task._id}
                _id={task._id}
                title={task.title}
                description={task.description}
                status={task.status}
                priority={task.priority}
                deadline={task.deadline}
                createdAt={new Date(task.createdAt)}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Taskboard;
