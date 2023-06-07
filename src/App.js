
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />

      </Routes>
    </div>
  );
}

export default App;
