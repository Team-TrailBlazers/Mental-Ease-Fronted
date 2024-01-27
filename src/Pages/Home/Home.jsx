import React from 'react'
import { useSelector } from "react-redux";

export const Home = () => {
    const userData = useSelector((state) => state.user.user);
  return (
    <div>
        {
            !userData ? (
                <h1>Home, not logged in</h1>
            ) : (
                <h1 style={{textAlign: "center", marginTop: "20px"}}>Welcome {userData.FirstName + "😀"}</h1>
            )
        }

    </div>
  )
}
