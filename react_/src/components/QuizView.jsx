import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
import { topics } from "../data/topics";
import { ArrowLeftIcon, TimerIcon, SparklesIcon } from "./Icons";

function QuizView({
  answersByTopic,
  setAnswersByTopic,
  submittedByTopic,
  setSubmittedByTopic,
  highScores,
  setHighScores,
  quizMode,
  setQuizMode
}) {
  const { slug } = useParams();
  const navigate = useNavigate();

  const activeTopic = useMemo(() => {
    return topics.find((topic) => topic.slug === slug);
  }, [slug]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const timerRef = useRef(null);

  const currentAnswers = useMemo(() => {
    return activeTopic ? (answersByTopic[activeTopic.slug] || {}) : {};
  }, [activeTopic, answersByTopic]);

  const isSubmitted = activeTopic ? Boolean(submittedByTopic[activeTopic.slug]) : false;

  // Timer Logic
  useEffect(() => {
    if (!activeTopic) return;
    if (!isSubmitted) {
      timerRef.current = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSubmitted, slug, activeTopic]);

  const handleSelect = (questionId, optionIndex) => {
    if (!activeTopic || isSubmitted) return;

    setAnswersByTopic((prev) => ({
      ...prev,
      [activeTopic.slug]: {
        ...(prev[activeTopic.slug] || {}),
        [questionId]: optionIndex,
      },
    }));
  };

  const score = useMemo(() => {
    if (!activeTopic) return 0;
    return activeTopic.questions.reduce((count, question) => {
      return count + (currentAnswers[question.id] === question.correctIndex ? 1 : 0);
    }, 0);
  }, [activeTopic, currentAnswers]);

  const handleSubmit = () => {
    if (!activeTopic) return;
    setSubmittedByTopic((prev) => ({ ...prev, [activeTopic.slug]: true }));

    // Save High Score
    const currentHighScore = highScores[activeTopic.slug] || 0;
    if (score > currentHighScore) {
      const updatedHighScores = {
        ...highScores,
        [activeTopic.slug]: score,
      };
      setHighScores(updatedHighScores);
      localStorage.setItem("js_quiz_high_scores", JSON.stringify(updatedHighScores));
    }
  };

  const handleReset = () => {
    if (!activeTopic) return;
    setAnswersByTopic((prev) => ({ ...prev, [activeTopic.slug] : {} }));
    setSubmittedByTopic((prev) => ({ ...prev, [activeTopic.slug]: false }));
    setTimeSpent(0);
    setCurrentQuestionIndex(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const answeredCount = Object.keys(currentAnswers).length;
  const isComplete = activeTopic ? answeredCount === activeTopic.questions.length : false;

  const getMotivationalFeedback = (currentScore, total) => {
    const percent = (currentScore / total) * 100;
    if (percent === 100) return { title: "Mukammal Natija! 🎉", desc: "Siz barcha savollarga to'g'ri javob berdingiz. Haqiqiy React ustasisiz!" };
    if (percent >= 80) return { title: "Ajoyib Natija! 🌟", desc: "Juda kuchli bilim! React bo'yicha mustahkam poydevorga egasiz." };
    if (percent >= 50) return { title: "Yaxshi Natija! 👍", desc: "Yomon emas! Mavzuni yana bir bor o'qib, natijani yanada yaxshilashingiz mumkin." };
    return { title: "Yana bir bor urinib ko'ring! 📚", desc: "Xafalik yoxud tushkunlikka o'rin yo'q. Qayta o'qib, o'z bilimingizni boyiting va yana sinab ko'ring!" };
  };

  const feedbackMessage = activeTopic ? getMotivationalFeedback(score, activeTopic.questions.length) : null;

  // Redirect to home if invalid topic (after all Hooks are evaluated)
  if (!activeTopic) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      className="quiz-container fade-in"
      style={{
        "--topic-color": activeTopic.color,
        "--topic-color-alpha": `${activeTopic.color}15`
      }}
    >
      {/* Back Navigation Bar */}
      <div className="quiz-nav-bar glass-card">
        <Link to="/" className="action-pill-btn back-btn" style={{ textDecoration: "none" }}>
          <ArrowLeftIcon />
          <span>Mavzularga qaytish</span>
        </Link>
        <div className="quiz-topic-title-wrapper">
          <span className="pill-category">Faol mavzu</span>
          <h2>{activeTopic.title}</h2>
        </div>
        <div className="timer-display">
          <TimerIcon />
          <span>{formatTime(timeSpent)}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Left Column: Question Navigator */}
        <aside className="sidebar-column">
          <div className="glass-card question-navigation-card">
            <div className="card-header">
              <h3>Savollar</h3>
            </div>
            
            <div className="question-nav-grid">
              {activeTopic.questions.map((q, idx) => {
                const isQAnswered = currentAnswers[q.id] !== undefined;
                const isActive = idx === currentQuestionIndex;

                return (
                  <button
                    key={q.id}
                    type="button"
                    className={`q-nav-item ${isActive ? "active" : ""} ${isQAnswered ? "answered" : ""}`}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    title={`Savol ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="progress-status-box">
              <div className="status-row">
                <span>Javob berildi:</span>
                <strong>{answeredCount} / {activeTopic.questions.length}</strong>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${(answeredCount / activeTopic.questions.length) * 100}%` }}
                />
              </div>
            </div>

            {!isSubmitted && (
              <div className="quiz-sidebar-actions">
                <button
                  type="button"
                  className="sidebar-reset-btn"
                  onClick={handleReset}
                >
                  Qayta boshlash
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Right Column: Active Question Form or Results Screen */}
        <section className="quiz-console-column">
          {isSubmitted ? (
            /* Results View */
            <div className="glass-card results-container">
              {score / activeTopic.questions.length >= 0.8 && (
                <div className="confetti-overlay">
                  <div className="confetti-emitter"></div>
                </div>
              )}

              <div className="results-hero">
                <div className="gauge-wrapper">
                  <svg className="gauge-svg" viewBox="0 0 120 120">
                    <circle className="gauge-bg" cx="60" cy="60" r="54" />
                    <circle
                      className="gauge-progress"
                      cx="60"
                      cy="60"
                      r="54"
                      style={{
                        strokeDasharray: 339.3,
                        strokeDashoffset: 339.3 - (339.3 * score) / activeTopic.questions.length
                      }}
                    />
                  </svg>
                  <div className="gauge-text">
                    <span className="score-num">{score}</span>
                    <span className="score-divider">/</span>
                    <span className="score-total">{activeTopic.questions.length}</span>
                  </div>
                </div>

                <div className="results-summary-text">
                  <div className="results-score-pill">
                    {Math.round((score / activeTopic.questions.length) * 100)}% To'g'ri
                  </div>
                  <h3>{feedbackMessage.title}</h3>
                  <p>{feedbackMessage.desc}</p>
                  <div className="result-time-box">
                    <span>Sarf etilgan vaqt: <strong>{formatTime(timeSpent)}</strong></span>
                  </div>
                </div>
              </div>

              <div className="results-actions">
                <button
                  type="button"
                  className="results-primary-btn"
                  onClick={handleReset}
                >
                  Qayta urinish
                </button>
                <button
                  type="button"
                  className="results-secondary-btn"
                  onClick={() => {
                    // Navigate to the next uncompleted topic if available
                    const nextTopic = topics.find((t) => !submittedByTopic[t.slug]);
                    if (nextTopic) {
                      navigate(`/quiz/${nextTopic.slug}`);
                      setCurrentQuestionIndex(0);
                    } else {
                      // Loop back to next topic
                      const currentIndex = topics.findIndex((t) => t.slug === activeTopic.slug);
                      const nextIndex = (currentIndex + 1) % topics.length;
                      navigate(`/quiz/${topics[nextIndex].slug}`);
                      setCurrentQuestionIndex(0);
                    }
                  }}
                >
                  Keyingi Mavzu
                </button>
                <Link
                  to="/"
                  className="results-secondary-btn home-btn"
                  style={{ textDecoration: "none", display: "inline-flex", justifyContent: "center", alignItems: "center" }}
                >
                  Bosh sahifa
                </Link>
              </div>

              <div className="review-questions-header">
                <SparklesIcon />
                <h3>Savollarni tahlil qilish</h3>
              </div>

              <div className="review-list">
                {activeTopic.questions.map((question, index) => {
                  const selectedIndex = currentAnswers[question.id];
                  const isCorrect = selectedIndex === question.correctIndex;

                  return (
                    <article
                      key={question.id}
                      className={`review-card ${isCorrect ? "correct-card" : "wrong-card"}`}
                    >
                      <div className="review-card-header">
                        <span className={`review-badge ${isCorrect ? "correct" : "wrong"}`}>
                          {isCorrect ? "To'g'ri" : "Noto'g'ri"}
                        </span>
                        <span className="review-number">Savol {index + 1}/{activeTopic.questions.length}</span>
                      </div>
                      <h4>{question.question}</h4>

                      <div className="review-options">
                        {question.options.map((option, optIdx) => {
                          const isUserSelected = selectedIndex === optIdx;
                          const isOptCorrect = optIdx === question.correctIndex;

                          let optionClass = "";
                          if (isOptCorrect) optionClass = "correct-opt";
                          else if (isUserSelected && !isCorrect) optionClass = "wrong-opt";

                          return (
                            <div key={option} className={`review-option-item ${optionClass}`}>
                              <span className="review-letter">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span>{option}</span>
                              {isOptCorrect && <span className="check-mark">✓</span>}
                              {isUserSelected && !isCorrect && <span className="cross-mark">✗</span>}
                            </div>
                          );
                        })}
                      </div>

                      <div className="review-explanation">
                        <span className="explanation-title">Tushuntirish:</span>
                        <p>{question.explanation}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Active Quiz Form Mode */
            <div className="glass-card quiz-form-container">
              {/* Mode selector bar */}
              <div className="quiz-control-bar">
                <div className="mode-selector">
                  <span className="mode-label">Ko'rinish:</span>
                  <div className="mode-buttons">
                    <button
                      type="button"
                      className={`mode-btn ${quizMode === "step-by-step" ? "active" : ""}`}
                      onClick={() => setQuizMode("step-by-step")}
                    >
                      Birma-bir
                    </button>
                    <button
                      type="button"
                      className={`mode-btn ${quizMode === "all" ? "active" : ""}`}
                      onClick={() => setQuizMode("all")}
                    >
                      Barchasi
                    </button>
                  </div>
                </div>
              </div>

              <form
                className="quiz-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                {quizMode === "step-by-step" ? (
                  /* Single Question Render with Immediate Feedback */
                  (() => {
                    const question = activeTopic.questions[currentQuestionIndex];
                    if (!question) return null;
                    
                    const selectedIndex = currentAnswers[question.id];
                    const isAnswered = selectedIndex !== undefined;
                    const isSelectionCorrect = selectedIndex === question.correctIndex;

                    return (
                      <article className="question-card active-step">
                        <div className="question-meta">
                          <span className="question-pill-topic">{activeTopic.title}</span>
                          <span className="question-number-badge">
                            Savol {currentQuestionIndex + 1} / {activeTopic.questions.length}
                          </span>
                        </div>

                        <h2>{question.question}</h2>

                        <div className="options">
                          {question.options.map((option, optionIndex) => {
                            const isUserSelected = selectedIndex === optionIndex;
                            const isOptCorrect = optionIndex === question.correctIndex;

                            let optClass = "";
                            if (isAnswered) {
                              if (isOptCorrect) {
                                optClass = "correct-locked";
                              } else if (isUserSelected) {
                                optClass = "incorrect-locked";
                              } else {
                                optClass = "disabled-locked";
                              }
                            }

                          return (
                            <button
                              key={option}
                              type="button"
                              disabled={isAnswered}
                              className={`option-btn ${optClass}`}
                              onClick={() => handleSelect(question.id, optionIndex)}
                            >
                              <span className="option-letter">
                                {String.fromCharCode(65 + optionIndex)}
                              </span>
                              <span className="option-text">{option}</span>
                              {isAnswered && isOptCorrect && <span className="feedback-icon-check">✓</span>}
                              {isAnswered && isUserSelected && !isSelectionCorrect && <span className="feedback-icon-cross">✗</span>}
                            </button>
                          );
                        })}
                      </div>

                      {/* Immediate Explanation Display */}
                      {isAnswered && (
                        <div className="explanation-card animate-slide-up">
                          <div className="explanation-header">
                            <span className={`explanation-badge ${isSelectionCorrect ? "success" : "danger"}`}>
                              {isSelectionCorrect ? "To'g'ri javob berdingiz!" : "Noto'g'ri javob berdingiz!"}
                            </span>
                          </div>
                          <p className="explanation-text">
                            <strong>Tushuntirish:</strong> {question.explanation}
                          </p>
                        </div>
                      )}

                      {/* Step-by-step footer controls inside question card */}
                      <div className="quiz-actions-footer-inner">
                        <div className="step-pagination">
                          <button
                            type="button"
                            className="pagi-btn"
                            disabled={currentQuestionIndex === 0}
                            onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                          >
                            ← Oldingi
                          </button>
                          
                          {isAnswered && currentQuestionIndex < activeTopic.questions.length - 1 ? (
                            <button
                              type="button"
                              className="pagi-btn next-action-btn"
                              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                            >
                              Keyingi →
                            </button>
                          ) : currentQuestionIndex < activeTopic.questions.length - 1 ? (
                            <button
                              type="button"
                              className="pagi-btn"
                              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                            >
                              O'tkazib yuborish →
                            </button>
                          ) : null}
                        </div>

                        {isComplete && (
                          <button
                            type="button"
                            className="quiz-submit-btn"
                            onClick={handleSubmit}
                          >
                            Natijalarni ko'rish
                          </button>
                        )}
                      </div>
                    </article>
                  );
                })()
              ) : (
                /* All Questions Render Mode (Feedback only shown after submit) */
                <div className="all-questions-list">
                  {activeTopic.questions.map((question, index) => {
                    const selectedIndex = currentAnswers[question.id];

                    return (
                      <article key={question.id} className="question-card">
                        <div className="question-meta">
                          <span className="question-pill-topic">{activeTopic.title}</span>
                          <span className="question-number-badge">
                            Savol {index + 1} / {activeTopic.questions.length}
                          </span>
                        </div>

                        <h2>{question.question}</h2>

                        <div className="options">
                          {question.options.map((option, optionIndex) => {
                            const isSelected = selectedIndex === optionIndex;

                            return (
                              <button
                                key={option}
                                type="button"
                                className={`option-btn ${isSelected ? "selected" : ""}`}
                                onClick={() => handleSelect(question.id, optionIndex)}
                              >
                                <span className="option-letter">
                                  {String.fromCharCode(65 + optionIndex)}
                                </span>
                                <span className="option-text">{option}</span>
                              </button>
                            );
                          })}
                        </div>
                      </article>
                    );
                  })}

                  <div className="quiz-actions-footer-all">
                    <button
                      type="submit"
                      className="quiz-submit-btn large-btn"
                      disabled={!isComplete}
                      title={isComplete ? "Natijalarni hisoblash" : "Iltimos, barcha savollarga javob bering"}
                    >
                      Natijani tekshirish
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </section>
    </div>
  </div>
  );
}

export default QuizView;
