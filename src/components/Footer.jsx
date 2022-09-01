import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsLinkedin,BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footer}>
        <div className={styles.social}>
          <img src={logo} alt="" />
          <div className={styles.socialI}>
            <div>
              <AiFillInstagram style={{ color: "red", fontSize: "23px" }} />
            </div>
            <div>
              <BsFacebook style={{ color: "#4267b2", fontSize: "23px" }} />
            </div>
            <div>
              <BsLinkedin style={{ color: "#0e76a8", fontSize: "23px" }} />
            </div>
          </div>
        </div>
        <div className={styles.quick}>
          <h3>Quick Links</h3>
          <p>About</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>WTF in News</p>
          <p>Terms & Conditions</p>
          <p>Refund & Cancellation</p>
        </div>
        <div className={styles.explore}>
          <h3>Explore</h3>
          <p>Arenas</p>
          <p>Studios</p>
          <p>Nutrition</p>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <div>
            <div>
              <FaMapMarkerAlt />
            </div>
            <div className={styles.add}>
              <p>Ro: S1502, <br /> Amrapali Silicon <br /> city, Sector 76, <br /> Noida Uttar <br /> Pradesh, <br />
              India</p>
            </div>
          </div>
          <div>
            <div>
              <FaMapMarkerAlt />
            </div>
            <div className={styles.add}>
              <p>Ho: C-86 B, <br /> Ground Floor, <br /> Sector 8, Noida, <br /> Uttar Pradesh, <br /> India</p>
            </div>
          </div>
          <div>
            <div>
              <BsFillTelephoneFill />
            </div>
            <div className={styles.add}><p>+919090639005</p></div>
          </div>
          <div>
            <div>
              <AiOutlineMail />
            </div>
            <div className={styles.add}><p>support@wtfup.me</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
