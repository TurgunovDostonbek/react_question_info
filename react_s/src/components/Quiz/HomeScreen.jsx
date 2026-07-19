import { useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "../../data/questions";

const descriptions = {
  react_intro: "React nima, uning afzalliklari, Virtual DOM va SPA (Single Page Application) asosiy tushunchalari.",
  components_jsx: "JSX sintaksisi qoidalari, JavaScript ifodalari va React komponentlarining asosiy tuzilishi.",
  components_styling: "Reactda rasmlar, ikonkalarni ishlatish, inline styles, CSS/SASS va styling usullari.",
  static_data_map: "Statik ma'lumotlar massivlari bilan ishlash, map() metodi va key atributining ahamiyati.",
  props: "Props orqali ota komponentdan bola komponentga ma'lumotlarni xavfsiz uzatish qoidalari.",
  use_state: "useState hooki yordamida komponent holatini (state) dinamik boshqarish va yangilash.",
  handling_events: "Reactda hodisalarni (onClick, onChange va b.) boshqarish va SyntheticEvent tushunchasi.",
  use_effect: "useEffect hooki, lifecycle bosqichlari, dependency array va cleanup (tozalash) funksiyasi.",
  fetch_crud: "Fetch API yordamida CRUD (Create, Read, Update, Delete) so'rovlarini amalga oshirish.",
  axios: "Axios kutubxonasi yordamida HTTP so'rovlar yuborish, interceptorlar va fetchdan afzalliklari.",
  react_router_dom: "BrowserRouter, Routes, Route, Link, useParams va useNavigate yordamida navigatsiya asoslari.",
  react_router_advanced: "Nested routes, protected routes, query parametrlari va loader/action funksiyalari.",
  props_context: "Props Drilling muammosi va Context API (useContext) yordamida global holatni boshqarish.",
  memory_management: "Xotira oqishlari (memory leaks), keraksiz timerlar/obunalarni tozalash va useEffect cleanup.",
  github_teamwork: "Git va GitHub da jamoaviy ishlash qoidalari, conflictlarni hal qilish va Pull Requests.",
  use_reducer: "useReducer hooki yordamida murakkab holatlar (state) va harakatlarni (actions) boshqarish.",
  memoization: "useMemo, useCallback hooklari va React.memo yordamida kodni optimallashtirish.",
  error_handling: "Error Boundary yaratish, asinxron xatolarni tutish va sayt buzilishining oldini olish.",
  redux_toolkit: "Redux Toolkit asoslari: Store, Slice, useSelector, useDispatch va asinxron thunklar.",
  i18n_library: "React-i18next yordamida ko'p tilli (multilingual) veb-ilovalarni yaratish qoidalari.",
  firebase: "Firebase Authentication, Firestore real-time database va hosting xizmatlaridan foydalanish.",
  nextjs: "Next.js freymvorki, File-system Routing, Server va Client Components hamda SSR/SSG/ISR asoslari.",
  nextjs_advanced: "Middleware, API Routes, Server Actions, Dynamic Routes va optimallashtirish usullari."
};

export default function HomeScreen({ topics = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topics.filter(
    (topic) =>
      topic.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (descriptions[topic.key] || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  // Calculate dynamic statistics
  const totalQuestions = topics.reduce((acc, t) => {
    const qList = questions[t.key] || [];
    return acc + qList.length;
  }, 0);

  const averageQuestions = topics.length > 0 ? Math.round(totalQuestions / topics.length) : 0;

  return (
    <div className="home-screen">
      <div className="home-header">
        <h1 className="home-title">React Savol-Javob</h1>
        <p className="home-subtitle">
          React mavzularidan birini tanlang va savollar hamda batafsil tushuntirishlarni o'rganing!
        </p>

        <div className="stats-bar">
          <div className="stat-card">
            <span className="stat-value">{topics.length}</span>
            <span className="stat-label">Mavzular</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-value">{averageQuestions}</span>
            <span className="stat-label">Savollar / Mavzu</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-value">{totalQuestions}</span>
            <span className="stat-label">Jami Savollar</span>
          </div>
        </div>
      </div>

      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Mavzularni qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm("")}>
            ✖
          </button>
        )}
      </div>

      <div className="topics-grid">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => {
            const count = questions[topic.key] ? questions[topic.key].length : 0;
            return (
              <Link
                key={topic.id}
                to={`/quiz/${topic.key}`}
                className="topic-card"
                style={{
                  borderTop: `4px solid ${topic.color || "#6366f1"}`,
                  textDecoration: "none",
                }}
              >
                <div className="topic-card-header">
                  <span className="topic-emoji">{topic.icon}</span>
                  <span className="q-count">{count} ta savol-javob</span>
                </div>
                <h3 className="topic-name">{topic.label}</h3>
                <p className="topic-desc">
                  {descriptions[topic.key] || "Mavzuga oid savol-javoblar."}
                </p>
                <div className="topic-card-footer">
                  <span className="start-text">O'rganishni boshlash ➡</span>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="no-results">
            <p>
              Hech qanday mavzu topilmadi. Qidiruv so'zini o'zgartirib ko'ring.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
