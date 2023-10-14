import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StripePayment from "./Pages/StripePayment";
import Success from "./Pages/Success";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stripe" element={<StripePayment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
