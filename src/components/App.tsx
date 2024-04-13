import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainPage } from '../pages/Main/MainPage';
import { SingleMoviePage } from '../pages/SingleMoviePage/SingleMoviePage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieid" element={<SingleMoviePage />} />
      </Routes>
    </Router>
  );
}
