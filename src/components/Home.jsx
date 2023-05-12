import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="box textcenter">
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
