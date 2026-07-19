

export default function ProgressBar({ current, total, topic }) {
  const percentage = (current / total) * 100;

  return (
    <div className="quiz-header" style={{ background: topic.color }}>
      <div className="quiz-header-top">
        <span style={{ fontSize: '1.3rem' }}>{topic.icon}</span>
        <span className="quiz-title">{topic.label}</span>
        <span className="quiz-counter">
          {current} / {total}
        </span>
      </div>
      <div className="progress-bg">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
