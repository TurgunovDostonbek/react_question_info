import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import QuizView from "./components/QuizView";
import { MoonIcon, SunIcon } from "./components/Icons";
import "./App.css";

function App() {
  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("react_quiz_theme") || "light";
  });

  // App General State
  const [answersByTopic, setAnswersByTopic] = useState(() => {
    const saved = localStorage.getItem("react_quiz_answers");
    return saved ? JSON.parse(saved) : {};
  });
  const [submittedByTopic, setSubmittedByTopic] = useState(() => {
    const saved = localStorage.getItem("react_quiz_submitted");
    return saved ? JSON.parse(saved) : {};
  });

  // High Scores State
  const [highScores, setHighScores] = useState(() => {
    const saved = localStorage.getItem("react_quiz_high_scores");
    return saved ? JSON.parse(saved) : {};
  });

  // Step-by-Step vs All Questions Mode
  const [quizMode, setQuizMode] = useState(() => {
    return localStorage.getItem("react_quiz_mode") || "step-by-step";
  });

  // Apply Theme on load and change
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("react_quiz_theme", theme);
  }, [theme]);

  // Persist answers and submissions
  useEffect(() => {
    localStorage.setItem("react_quiz_answers", JSON.stringify(answersByTopic));
  }, [answersByTopic]);

  useEffect(() => {
    localStorage.setItem("react_quiz_submitted", JSON.stringify(submittedByTopic));
  }, [submittedByTopic]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const resetAllStats = () => {
    if (window.confirm("Barcha Natijalar va statistikalarni tozalashni xohlaysizmi?")) {
      localStorage.removeItem("react_quiz_answers");
      localStorage.removeItem("react_quiz_submitted");
      localStorage.removeItem("react_quiz_high_scores");
      setAnswersByTopic({});
      setSubmittedByTopic({});
      setHighScores({});
      // Navigate to homepage (using standard window location for full reset feel)
      window.location.href = "/#/";
    }
  };

  return (
    <Router>
      <main className="quiz-page">
        {/* Header Panel */}
        <header className="header-panel">
          <div className="header-content">
            <Link to="/" className="brand" style={{ textDecoration: "none" }}>
              <span className="logo-spark">✨</span>
              <div className="brand-text">
                <h1>React Master Quiz</h1>
                <p>O'z bilimingizni sinab ko'ring va React professionali bo'ling</p>
              </div>
            </Link>

            <div className="header-actions">
              {/* Theme switcher */}
              <button
                type="button"
                className="action-pill-btn theme-toggle"
                onClick={toggleTheme}
                title="Mavzuni o'zgartirish"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
                <span>{theme === "light" ? "Tungi rejim" : "Kunduzgi rejim"}</span>
              </button>

              <button
                type="button"
                className="action-pill-btn reset-all-btn"
                onClick={resetAllStats}
                title="Barcha statistikani tozalash"
              >
                Tozalash
              </button>
            </div>
          </div>
        </header>

        {/* Route Definitions */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                answersByTopic={answersByTopic}
                submittedByTopic={submittedByTopic}
                highScores={highScores}
              />
            }
          />
          <Route
            path="/quiz/:slug"
            element={
              <QuizView
                answersByTopic={answersByTopic}
                setAnswersByTopic={setAnswersByTopic}
                submittedByTopic={submittedByTopic}
                setSubmittedByTopic={setSubmittedByTopic}
                highScores={highScores}
                setHighScores={setHighScores}
                quizMode={quizMode}
                setQuizMode={setQuizMode}
              />
            }
          />
          {/* Redirect all unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
