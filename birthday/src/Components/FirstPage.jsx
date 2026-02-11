import { useNavigate } from "react-router-dom";
import MiniHearts from "./MiniHearts";
import "./FirstPage.css";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="first-page">
      <MiniHearts />

      <h1>🎉Something special is
         waiting for you ngaa!!!🎉</h1>
      <h2>Tab the open to get to knowwwww</h2>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSos99RkFlSrUVNe0vnZ0SCD9GM5yNFZGh0pA&s"
        alt="Happy Birthday"
        className="birthday-img"
      />

      <p>
        I wanted to make this day a little more special,
        just in my own small way.
      </p>

      <div className="content">
  <p className="tap-text">
    Tap to open your surprise 🎁💖
  </p>

      <button onClick={() => navigate("/surprise")} className="open-btn">
       Open🎁
      </button>
      </div>
    </div>
  );
};

export default FirstPage;