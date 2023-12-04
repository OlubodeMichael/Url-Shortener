import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./Navbar";
import {Shortener} from "./Shortener";
import {Qr} from "./Qr";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Shortener/>} />
          <Route path="/qr-code" element={<Qr/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
