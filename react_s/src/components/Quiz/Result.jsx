export default function Result({ total, topic, onRestart, onHome }) {
  return (
    <div className="result-container">
      <h2 className="result-title">
        {topic ? `${topic.label} o'rganildi!` : "Mavzu o'rganildi!"}
      </h2>

      <div className="circle-progress">
        <svg viewBox="0 0 36 36">
          <path
            className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle-fill good"
            strokeDasharray="100, 100"
            strokeDashoffset="0"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="circle-text" style={{ color: "#10b981" }}>✓</div>
      </div>

      <p className="result-stats">
        Jami <b>{total}</b> ta savol-javob ko'rildi
      </p>

      <div className="result-msg">
        Ushbu mavzudagi barcha ma'lumotlarni muvaffaqiyatli o'rganib chiqdingiz. Bilimingiz yanada boyidi! 🚀
      </div>

      <div className="result-actions">
        <button className="restart-btn" onClick={onRestart}>
          🔁 Qayta o'qish
        </button>
        <button className="back-home-btn" onClick={onHome}>
          🏠 Mavzular ro'yxati
        </button>
      </div>
    </div>
  );
}
