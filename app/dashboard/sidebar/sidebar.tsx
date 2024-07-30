"use client";
import { useGlobalContext } from "@/app/Context/store";
import {
  BsBarChartLine,
  BsBell,
  BsBoxArrowInDown,
  BsChevronDoubleRight,
  BsClipboardData,
  BsFillPlusCircleFill,
  BsHouse,
  BsPeople,
  BsSuitDiamond,
  BsTools,
} from "react-icons/bs";
import "./sidebar.css";
const Sidebar = () => {
  const { toggleAddTaskModal, isAddTaskModalOpen } = useGlobalContext();

  return (
    <div className="sidebar">
      <div>
        <div className="userInfo">
          <img src="https://visualpharm.com/assets/527/Person-595b40b85ba036ed117da7ec.svg" />
          <p>mtesh Maurya</p>
        </div>
        <div className="options">
          <div>
            <a>
              <BsBell />
            </a>
            <a>
              <BsSuitDiamond />
            </a>
            <a>
              <BsChevronDoubleRight />
            </a>
          </div>

          <button className="logout-button">Logout</button>
        </div>
        <div className="menu">
          <ul>
            <li>
              <BsHouse /> Home
            </li>
            <li>
              <BsClipboardData />
              Boards
            </li>
            <li>
              <BsTools /> Settings
            </li>
            <li>
              <BsPeople />
              Teams
            </li>
            <li>
              <BsBarChartLine />
              Analytics
            </li>
            <button onClick={toggleAddTaskModal}>
              Create new task <BsFillPlusCircleFill />
            </button>
          </ul>
        </div>
      </div>

      <div className="down-card">
        <BsBoxArrowInDown />
        <div>
          <h1>Download the app</h1>
          <p>get the full experiance</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
