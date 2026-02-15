import "./MiniHearts.css";

const MiniHearts = () => {
  return (
    <div className="mini-hearts">
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
        💗
        </span>
      ))}
    </div>
  );
};

export default MiniHearts;