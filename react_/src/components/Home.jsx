import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { topics } from "../data/topics";
import { TrophyIcon, SearchIcon } from "./Icons";

function Home({ answersByTopic, submittedByTopic, highScores }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  
  // Overall Stats Calculation
  const overallStats = useMemo(() => {
    const completedList = Object.keys(submittedByTopic).filter((k) => submittedByTopic[k]);
    const totalScore = completedList.reduce((sum, slug) => {
      const topicObj = topics.find((t) => t.slug === slug);
      if (!topicObj) return sum;
      const answers = answersByTopic[slug] || {};
      const s = topicObj.questions.reduce((c, q) => c + (answers[q.id] === q.correctIndex ? 1 : 0), 0);
      return sum + s;
    }, 0);

    const totalQuestions = completedList.reduce((sum, slug) => {
      const topicObj = topics.find((t) => t.slug === slug);
      return sum + (topicObj ? topicObj.questions.length : 0);
    }, 0);
    const accuracy = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

    return {
      completedCount: completedList.length,
      accuracy,
      totalScore,
    };
  }, [submittedByTopic, answersByTopic]);

  // Filtered Topics
  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            topic.description.toLowerCase().includes(searchQuery.toLowerCase());
      const isTopicSubmitted = Boolean(submittedByTopic[topic.slug]);

      if (filterStatus === "completed") {
        return matchesSearch && isTopicSubmitted;
      }
      if (filterStatus === "pending") {
        return matchesSearch && !isTopicSubmitted;
      }
      return matchesSearch;
    });
  }, [searchQuery, filterStatus, submittedByTopic]);

  return (
    <div className="home-container fade-in">
      {/* Dashboard Stats */}
      <section className="glass-card home-stats-card">
        <div className="card-header">
          <TrophyIcon />
          <h2>Umumiy Progress Dashboard</h2>
        </div>
        <div className="stats-metric-grid">
          <div className="metric">
            <span className="metric-val">{overallStats.completedCount} / {topics.length}</span>
            <span className="metric-label">Mavzular Bajarildi</span>
            <div className="progress-bar-container mini-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${(overallStats.completedCount / topics.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="metric">
            <span className="metric-val">{overallStats.accuracy}%</span>
            <span className="metric-label">Umumiy Aniqilik</span>
          </div>
          <div className="metric">
            <span className="metric-val">{overallStats.totalScore}</span>
            <span className="metric-label font-mono">Umumiy Ball</span>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="search-filter-section glass-card">
        <div className="search-filter-box flex-row">
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              type="text"
              placeholder="Mavzularni qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-pills">
            <button
              type="button"
              className={`filter-pill ${filterStatus === "all" ? "active" : ""}`}
              onClick={() => setFilterStatus("all")}
            >
              Hammasi ({topics.length})
            </button>
            <button
              type="button"
              className={`filter-pill ${filterStatus === "completed" ? "active" : ""}`}
              onClick={() => setFilterStatus("completed")}
            >
              Bajarilgan ({overallStats.completedCount})
            </button>
            <button
              type="button"
              className={`filter-pill ${filterStatus === "pending" ? "active" : ""}`}
              onClick={() => setFilterStatus("pending")}
            >
              Jarayonda ({topics.length - overallStats.completedCount})
            </button>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="topics-grid-wrapper">
        <h2>Barcha Mavzular</h2>
        <div className="topics-grid">
          {filteredTopics.length === 0 ? (
            <div className="empty-state">Qidiruv bo'yicha mavzular topilmadi.</div>
          ) : (
            filteredTopics.map((topic) => {
              const topicHighScore = highScores[topic.slug];
              const hasSubmitted = Boolean(submittedByTopic[topic.slug]);
              const isAnsweredSome = Object.keys(answersByTopic[topic.slug] || {}).length > 0;

              return (
                <div
                  key={topic.slug}
                  className={`topic-grid-card ${hasSubmitted ? "completed" : ""} ${isAnsweredSome && !hasSubmitted ? "in-progress" : ""}`}
                  onClick={() => navigate(`/quiz/${topic.slug}`)}
                  style={{
                    cursor: "pointer",
                    "--topic-color": topic.color,
                    "--topic-color-alpha": `${topic.color}15`
                  }}
                >
                  <div className="topic-grid-card-body">
                    <div className="topic-card-header">
                      <div className="topic-icon-badge" style={{ backgroundColor: `${topic.color}15`, border: `1px solid ${topic.color}35`, color: topic.color }}>
                        {topic.icon}
                      </div>
                      {hasSubmitted ? (
                        <span className="completed-badge" style={{ backgroundColor: `${topic.color}20`, color: topic.color, borderColor: `${topic.color}40` }}>✓ Bajarildi</span>
                      ) : isAnsweredSome ? (
                        <span className="in-progress-badge">Jarayonda</span>
                      ) : null}
                    </div>
                    <h3 className="topic-card-title">{topic.title}</h3>
                    <p>{topic.description}</p>
                    <div className="topic-card-footer">
                      <span className="questions-count">{topic.questions.length} ta savol</span>
                      {topicHighScore !== undefined && (
                        <span className="high-score-badge" style={{ borderLeft: `3px solid ${topic.color}` }}>Natija: {topicHighScore}/{topic.questions.length}</span>
                      )}
                    </div>
                  </div>
                  <div className="card-hover-overlay" style={{ background: `linear-gradient(135deg, ${topic.color}dd, ${topic.color})` }}>
                    <span>Boshlash →</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
