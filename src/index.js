import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalProvider } from "./store/context";
import Contact from "./pages/Contact";
import About from "./pages/About";


const App = () => {
    return (
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </GlobalProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);