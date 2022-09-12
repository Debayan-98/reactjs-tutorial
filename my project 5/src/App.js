import React from "react";
import { BrowserRouter as Router ,Routes,Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import  Protected from "./layouts/Protected";
import { Home } from "./layouts/Home";
import { Profile } from "./layouts/Profile";
import { About } from "./layouts/About";
import { Navbar } from "./layouts/Navbar";

function App() {
  const [state, setState] = useState(null);
  const logIn = () => {
    setState(true);
  };
  const logOut = () => {
    setState(false);
  };
  return (
 <Router>
      <div>
  <Navbar/>
      {state ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile'
            element={
              <Protected state={state}>
                <Profile />
              </Protected>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      
       
      </div>
      </Router>
  );
}
export default App;