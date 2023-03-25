import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Authenticator from './Pages/Authenticator';
import CreateRecepie from './Pages/CreateRecepies';
import SavedRecepie from './Pages/SavedRecepies';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authenticator />} />
          <Route path="/createrecepie" element={<CreateRecepie />} />
          <Route path="/savedrecepie" element={<SavedRecepie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
