

export default function Question({
  data,
  isAnswered,
  topic,
}) {
  const correctAnswerText = data.options[data.correctAnswer];

  return (
    <div className="quiz-body">
      <span
        className="category-badge"
        style={{ background: topic.color }}
      >
        {topic.label}
      </span>

      <h2 className="question-text">{data.question}</h2>

      {isAnswered && (
        <div className="qa-answer-container">
          <div className="correct-answer-box">
            <span className="correct-badge">✅ To'g'ri Javob:</span>
            <p className="correct-text">{correctAnswerText}</p>
          </div>

          <div className="explanation-box correct">
            <p className="explanation-title">💡 Tushuntirish:</p>
            <p className="explanation-text">{data.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
