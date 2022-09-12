import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edituser from './component/Edituser';
import Home from './component/Home';
import Adduser from './component/Adduser';
import Alluser from './component/Alluser';
import Notfound from './component/Notfound';
import Navbar from './component/Navbar';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<Adduser />} />
          <Route path="/all-user" element={<Alluser />} />
          <Route path="/edit-user/:id" element={<Edituser />} />
          <Route path="*" element={<Notfound />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
