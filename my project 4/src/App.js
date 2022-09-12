import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import {About} from './pages/About'
import {Navbar} from './component/common/Navbar'
import { Footer } from './component/common/Footer';
import { Contact } from './pages/Contact';
import { Menu } from './pages/Menu';
 import { SignUp } from './pages/SignUp';
function App() {
  return (
    <div>
    <Router>
      <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;