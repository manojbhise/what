import React from 'react'
import styles from "../styles/Navbar.module.css"
import logo from "../assets/logo.png"
import { useState } from 'react'

const Navbar = () => {
  const [click, setClick] = useState("gyms");
  const [scr1, setScr1] = useState(false);

  window.onscroll = (ev) => {
    if (window.pageYOffset > 0) {
      setScr1(true);
    }
    else{
      setScr1(false);
    }
    // console.log("pageYOffset:",window.pageYOffset)
  };

  return (
    <div className={styles.main} style={{backgroundColor: scr1? "#0d0d0d":"transparent"}}>
      <div className={styles.nav}>
        <div className={styles.left}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.right}>
          <ul>
            <li onClick={()=>setClick("fitness")} style={{borderBottom: click=="fitness"? "2px solid brown":"none"}}><a href="#">Fitness</a></li>
            <li onClick={()=>setClick("nutrition")} style={{borderBottom: click=="nutrition"? "2px solid brown":"none"}}><a href="#">Nutrition</a></li>
            <li onClick={()=>setClick("gyms")} style={{borderBottom: click=="gyms"? "2px solid brown":"none"}}><a href="#">Gyms</a></li>
            <li onClick={()=>setClick("become")} style={{borderBottom: click=="become"? "2px solid brown":"none"}}><a href="#">Become WTF Partner</a></li>
            <li onClick={()=>setClick("about")} style={{borderBottom: click=="about"? "2px solid brown":"none"}}><a href="#">About US</a></li>
            <li><button>Login</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar