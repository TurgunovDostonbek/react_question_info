import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HtmlQuiz from './components/Quiz/HtmlQuiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HtmlQuiz />} />
        <Route path="/quiz/:categoryKey" element={<HtmlQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
