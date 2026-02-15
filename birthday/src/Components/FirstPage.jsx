import { useNavigate } from "react-router-dom";
import MiniHearts from "./MiniHearts";
import "./FirstPage.css";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="first-page">
      <MiniHearts />

      <h2>🎉Something special is <br></br>
         waiting for you ngaa!!!🎉</h2>
      <h3>Tab the open to get to knowwwww</h3>

      <img
        src="https://wishes.photos/wp-content/uploads/2024/05/Blue-Watercolor-Happy-Birthday-Image-On-your-special-day-I-hope-all-your-dreams-come-true.-Happy-Birthday-1024x1024.jpg"
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