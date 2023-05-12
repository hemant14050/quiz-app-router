import { useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Home = ({isDarkMode, setIsDarkMode}) => {
  const navigate = useNavigate();

  return (
    <div className="box textcenter">
      <DarkModeSwitch
        checked={!isDarkMode}
        onClick={() => setIsDarkMode(!isDarkMode)}
        moonColor={"#000"}
        sunColor={"#fff"}
        style={{ position: "absolute", right: "10", top: "10" }}
      />

      <h1 className="title">Welcome to Quiz Challenge App</h1>

      <div className="description">
        <p>You will be presented with 5 questions.</p>
        <p>Can you score 100%?</p>
      </div>

      <button className="btn" onClick={() => navigate("/quiz")}>
        Start Quiz
      </button>
    </div>
  );
};
export default Home;
