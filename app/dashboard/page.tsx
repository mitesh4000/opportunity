"use client";
import {
  BsCalendar4Week,
  BsFillPlusCircleFill,
  BsFunnel,
  BsQuestionCircle,
  BsSearch,
  BsShare,
  BsStars,
} from "react-icons/bs";
import "./dashboard.css";
import Sidebar from "./sidebar/sidebar";
import Taskboard from "./taskboard/taskboard";
import TaskModal from "./TaskModal/taskModal";
const Dashboard = () => {
  return (
    <div className="container">
      <TaskModal></TaskModal>
      <Sidebar />
      <div className="dashboard-content">
        <div className="header">
          <h1>Good morning Mitesh!</h1>
          <a>
            Help & feedback
            <BsQuestionCircle />
          </a>
        </div>

        <div className="feature-bar">
          <div className="search-input">
            <input placeholder="search" type="text" />

            <BsSearch />
          </div>
          <div className="other-features">
            <a>
              calander view <BsCalendar4Week />
            </a>

            <a>
              Automation <BsStars />
            </a>

            <a>
              share <BsShare />
            </a>

            <a>
              filter <BsFunnel />
            </a>

            <button>
              create new <BsFillPlusCircleFill />
            </button>
          </div>
        </div>
        <Taskboard></Taskboard>
      </div>
    </div>
  );
};

export default Dashboard;
