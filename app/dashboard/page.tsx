import { BsQuestionCircle } from "react-icons/bs";
import "./dashboard.css";
import Sidebar from "./sidebar/sidebar";

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="header">
        <h1>Good morning Mitesh!</h1>
        <a>
          Help & feedback
          <BsQuestionCircle />
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
