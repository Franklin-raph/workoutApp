import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="mainContent">
          <Routes>
            <Route path='/' element={ <Home /> } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
