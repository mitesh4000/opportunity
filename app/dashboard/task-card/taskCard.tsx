"use client";

import { Priority, Task } from "@/app/interfaces/task.interface";
import { BsClock } from "react-icons/bs";
import "./taskCard.css";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const TaskCard = (props: Task) => {
  const timeAgo = new TimeAgo("en-US");
  const handleOnDrag = (
    e: React.DragEvent<HTMLDivElement>,
    widgetType: string
  ) => {
    e.dataTransfer.setData(widgetType, widgetType);
    console.log(e);
  };

  const getPriorityColor = (priority: Priority): string => {
    switch (priority) {
      case "High":
        return "#ff4d4d";
      case "Low":
        return "#ffcc00";
      case "Medium":
        return "#66b3ff";
      default:
        return "#d9d9d9";
    }
  };

  return (
    <div
      className="card"
      draggable
      onDragStart={(e) => handleOnDrag(e, props._id)}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div
        className="priority-badg"
        style={{ backgroundColor: getPriorityColor(props.priority) }}
      >
        {props.priority}
      </div>

      <div className="time">
        <BsClock />
        {String(props.deadline)}
      </div>
      <div className="time-ago">{timeAgo.format(props.createdAt)}</div>
    </div>
  );
};

export default TaskCard;
