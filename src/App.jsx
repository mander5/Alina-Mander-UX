import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import UxPage from './Components/UxPage/UxPage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ux-research' element={<UxPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
