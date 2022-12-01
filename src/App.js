import { Routes, Link, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
export default function App() {
  return (
    <div className="App">
      <Link to="/about">about</Link>
      <Link to="/work">work</Link>
      <Link to="/contact">contact</Link>
      <div>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}
