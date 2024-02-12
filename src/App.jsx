import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import StripePayment from "./Pages/StripePayment";
import Success from "./Pages/Success";
import Navbar from "./Components/NavBar/Navbar";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
// import { Home } from './Pages/Home/Home';
import Profile from "./Pages/UserProfile/Profile";
import Home  from './Pages/Home/Home';
import Therapists from "./Pages/Therapists/Therapists";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Register/>} />
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/stripe" element={<StripePayment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/therapists" element={<Therapists />} />

        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
