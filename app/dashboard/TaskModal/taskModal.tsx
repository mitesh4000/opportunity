"use client";
import { useGlobalContext } from "@/app/Context/store";
import { BsArrowsAngleExpand, BsX } from "react-icons/bs";
import "./taskModal.css";

const TaskModal = () => {
  const { toggleAddTaskModal, isAddTaskModalOpen } = useGlobalContext();

  return (
    <div className={`task-modal ${isAddTaskModalOpen ? "open" : ""}`}>
      <aside>
        <div className="modal-header">
          <div>
            <a>
              <BsX />{" "}
            </a>
            <a>
              <BsArrowsAngleExpand />
            </a>
          </div>

          <div>
            <button>
              share
              <BsX />{" "}
            </button>
            <button>
              share
              <BsX />{" "}
            </button>
          </div>
          <div></div>
        </div>
        <form>
          <input className="title-input" placeholder="Title" />
          <div>
            <div className="task-inputs">
              <select id="fruits" name="fruits">
                <option value="To do">To do</option>
                <option value="In process">In process</option>
                <option value="Under review">Under review</option>
                <option value="Finished">Finished</option>
              </select>
            </div>
            <div className="task-inputs">
              <select id="fruits" name="fruits">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="task-inputs">
              <input type="date"></input>
            </div>

            <div className="task-input">
              <textarea></textarea>
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </aside>
    </div>
  );
};

export default TaskModal;
