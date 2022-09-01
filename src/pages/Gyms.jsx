import React from "react";
import styles from "../styles/Gyms.module.css";
import bcg_img from "../assets/back3.jpg";
import { BiSearch } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrWaypoint } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { RiHandSanitizerFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { FcBusinessman } from "react-icons/fc";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Gyms = () => {
  const [find, setFind] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
      )
      .then((res) => setInfo(res.data.data))
      .catch((e) => console.log(e));
  }, []);
  console.log("in", info);

  return (
    <div className={styles.main}>
      <div className={styles.bcg}>
        <img src={bcg_img} alt="bcg_img" />
      </div>
      <div className={styles.details}>
        <div className={styles.search}>
          <BiSearch
            style={{
              marginRight: "1%",
              fontSize: "23px",
              color: "rgb(173, 172, 172)",
            }}
          />
          <input
            type="text"
            onChange={(e) => setFind(e.target.value)}
            placeholder="Search gym name here..."
          />
          <button>
            <FaMapMarkerAlt />
          </button>
          <button onClick={() => setFind("")}>Clear</button>
        </div>
        <div className={styles.gyms}>
          <div className={styles.filter}>
            <h2>Filters</h2>
            <h3>Location</h3>
            <div>
              <BiSearch style={{ fontSize: "20px", color: "#707070" }} />
              <input type="text" placeholder="Enter Location" />
            </div>
            <h3>Price</h3>
            <div>
              <input type="text" placeholder="Min" />
              <input type="text" placeholder="Max" />
            </div>
            <h3>Cities</h3>
            <select name="" id="">
              <option value="">Select By</option>
              <option value="new_delhi">New Delhi</option>
              <option value="ghaziabad">Ghaziabad</option>
              <option value="greater_noida">Greater Noida</option>
              <option value="noida">Noida</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div className={styles.grid}>
            {info
              .filter((item) => {
                if (find === "") {
                  return item;
                } else if (
                  item.gym_name.toLowerCase().includes(find.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <div key={item.user_id}>
                    <div className={styles.gridL}></div>
                    <div className={styles.gridR}>
                      <h3>{item.gym_name}</h3>
                      <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <p>
                        {item.address2}, {item.address1}, {item.city},{" "}
                        {item.state}
                      </p>
                      <p>
                        <GrWaypoint
                          style={{ color: "green", backgroundColor: "green" }}
                        />{" "}
                        {Math.round(item.duration) / 100} minutes away |{" "}
                        {Math.round(item.distance) / 100}km
                      </p>
                      <div>
                        <p></p>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.exp}>
        <div className={styles.fit}>
          <p>
            WTF Fitness <br /> Experience?
          </p>
        </div>
        <div className={styles.regular}>
          <div className={styles.regularL}>
            <p></p>
            <p>
              @ your regular <br /> gym cost
            </p>
          </div>
          <div className={styles.regularR}>
            <div>
              <GiSteeringWheel
                style={{ fontSize: "45px", margin: "0", marginTop: "10px" }}
              />
              <p>Modern Equipments</p>
            </div>
            <div>
              <FcBusinessman
                style={{ fontSize: "45px", margin: "0", marginTop: "10px" }}
              />
              <p>Skilled Trainer</p>
            </div>
            <div>
              <TiTick
                style={{ fontSize: "45px", margin: "0", marginTop: "10px" }}
              />
              <p>Top class Ambience</p>
            </div>
            <div>
              <RiHandSanitizerFill
                style={{ fontSize: "45px", margin: "0", marginTop: "10px" }}
              />
              <p>Sanitized GYMS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gyms;
