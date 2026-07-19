import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Quiz.css";
import { questions, topics } from "../../data/questions";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Result from "./Result";
import HomeScreen from "./HomeScreen";

export default function HtmlQuiz() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("quiz-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  const { categoryKey } = useParams();
  const navigate = useNavigate();

  const selectedCategory = categoryKey || null;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Reset quiz state whenever category changes by adjusting state during render
  const [prevCategoryKey, setPrevCategoryKey] = useState(categoryKey);
  if (categoryKey !== prevCategoryKey) {
    setPrevCategoryKey(categoryKey);
    setCurrentQuestion(0);
    setIsAnswered(false);
    setShowResult(false);
  }

  // Get active questions array for the selected category key (e.g. 'html_intro')
  const categoryQuestions = selectedCategory
    ? questions[selectedCategory] || []
    : [];

  const totalQuestions = categoryQuestions.length;

  console.log("Selected Category Key:", selectedCategory);
  console.log("Questions DB Object:", questions);
  console.log("Category Questions Array:", categoryQuestions);

  // Find the active topic details to get its user-friendly label
  const activeTopic = topics.find((t) => t.key === selectedCategory);
  const categoryLabel = activeTopic ? activeTopic.label : "";

  // Get current question and inject category label so Question.jsx renders it
  const currentQ = categoryQuestions[currentQuestion]
    ? { ...categoryQuestions[currentQuestion], category: categoryLabel }
    : null;

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    try {
      localStorage.setItem("quiz-theme", newTheme);
    } catch (e) {
      console.warn("localStorage is disabled or blocked:", e);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setIsAnswered(false);
    setShowResult(false);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={`quiz-app-wrapper ${theme}-theme`}>
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        title="Mavzuni o'zgartirish"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {!selectedCategory ? (
        <HomeScreen topics={topics} />
      ) : (
        <div className="quiz-container">
          <div className="quiz-card">
            {showResult ? (
              <Result
                total={totalQuestions}
                topic={activeTopic}
                onRestart={restartQuiz}
                onHome={goHome}
              />
            ) : (
              <>
                <ProgressBar
                  current={currentQuestion + 1}
                  total={totalQuestions}
                  topic={activeTopic}
                />

                {currentQ && (
                  <Question
                    data={currentQ}
                    isAnswered={isAnswered}
                    topic={activeTopic}
                  />
                )}

                <div className="quiz-footer">
                  <button onClick={goHome} className="back-btn">
                    ⬅ Mavzular
                  </button>
                  {!isAnswered ? (
                    <button
                      onClick={() => setIsAnswered(true)}
                      className="show-answer-btn"
                    >
                      👁️ Javobni ko'rish
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="next-btn"
                    >
                      {currentQuestion < totalQuestions - 1
                        ? "Keyingi savol ➡"
                        : "Natijani ko'rish ➡"}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
