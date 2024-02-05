import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { FaArrowRight } from "react-icons/fa";



function Home() {
  const userData = useSelector((state) => state.user.user);
  return (
    <div className="homePage">
    <div className="intro">
      {!userData ? (
        <h4>Home, not logged in</h4>
      ) : (
        <h3 className="welcome-msg">
          Welcome <span>
          {userData.FirstName + " " + userData.LastName + " "}
          </span> 
          to Mental Ease Platform
        </h3>
      )}
    </div>
    <div className="homeLogo">
      {/* background image */}
      <h1>We care about your Mental State</h1> 
      <button className="learn-more">Learn More <span><FaArrowRight /></span> </button>
    </div>
    <div >
      <Footer/>
    </div>
    </div>
  );
}

export default Home
