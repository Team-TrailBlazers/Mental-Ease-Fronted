import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import StripePayment from "./Pages/StripePayment";
import Success from "./Pages/Success";
import Navbar from "./Components/NavBar/Navbar";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home  from './Pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth/register" element={<Register/>} />
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/stripe" element={<StripePayment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
