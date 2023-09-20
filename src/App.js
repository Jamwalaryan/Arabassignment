import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import Perk from './Pages/Perk';
import Support from './Pages/Support';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/perk" element={<Perk/>} />
          <Route path="/support" element={<Support />} />
        </Routes>
        </Sidebar>
        <Footer/>
    </div>
  );
}

export default App;
