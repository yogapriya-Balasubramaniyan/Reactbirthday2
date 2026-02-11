import { useEffect, useState } from "react";
import MiniHearts from "./MiniHearts";
import BirthdayPop from "./BirthdayPop";
import "./SecondPage.css";

const SecondPage = () => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCard(true);
    }, 1000);
  }, []);

  return (
    <div className="second-page">
      <MiniHearts />
      <BirthdayPop />

      {showCard && (
        <div className="card">
          <h2>🎂 Happy Birthday Ngaaaa!!!!!!🎂</h2>

          <p>
            I had planned to celebrate your birthday with you here, but life had other plans,
             and you had to be away for a close friend’s wedding. 
             Even though you’re not in the city, I didn’t want your birthday to feel ordinary.
             So I tried something different. I may just be a beginner,
             but I wanted to create something special in my own way.
             </p>

          <p>
             This little website is my virtual surprise for you — not something big or fancy,
             but something I made with effort, learning, and a lot of heart.
             I hope it makes you feel how special you are to me.🌻✨
          </p>

          <p className="end">🤍🤍 PRIYA🤍🤍</p>
        </div>
      )}
    </div>
  );
};

export default SecondPage;