import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PaymentSuccess from "./components/PaymentSuccess";
import About from "./components/About";
import Contact from "./components/Contact";
import TotalFund from "./components/TotalFund";
import "./app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/total-fund" element={<TotalFund />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
