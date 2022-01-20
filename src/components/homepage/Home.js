import React from "react";
import Button from "../helper/buttons/Button";
import image1 from "../../asserts/homepageImages/pexels-karolina-grabowska-6029170.png";
import image2 from "../../asserts/homepageImages/profilem2.png";
import image3 from "../../asserts/homepageImages/Mask Group 2.png";
import "./home.css";

const Home = () => {
  return (
    <div className="main_container">
      <div className="homewrapper">
        <div className="home_left">
          <div className="home_left_wrappper">
            <div className="home_left_section1">
              <span>Request</span> <br />
              <span style={{ fontWeight: 700 }}>Smart Quotes</span> <br />
              <span>from professionals</span>
            </div>
            <div className="home_left_section2">
              Get quick Quotes businesses Search <br /> and connect with the
              best professionals ans businesses.
            </div>
            <Button
              btn_text="post requirement now"
              btn_link="/postRequirementNow"
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
        <div className="home_right">
          <div className="home_right_section1">
            <div className="section1_type1">
              <img src={image1} alt="" />
            </div>
            <div className="section1_slip">
              <div className="slip">
                <div className="slipHeading">Tell us what u need</div>
                <div className="slipSubHeading">
                  Whatever the service you're looking for, we'll help you find a
                  professional for the job.
                </div>
                <div className="triangle"></div>
              </div>
              <div className="slipNumber">
                <div className="slipNumberValue">1</div>
              </div>
            </div>
          </div>
          <div className="home_right_section2">
            <div className="section2_type2">
              <img src={image2} alt="" />
            </div>
            <div className="section2_slip">
              <div className="slip">
                <div className="slipHeading">
                  Get Smart Quotes from top industry experts
                </div>
                <div className="slipSubHeading">
                  Check out their profiles, scores and websites to help you make
                  a decision.
                </div>
              </div>
              <div className="slipNumber">
                <div className="slipNumberValue">2</div>
              </div>
                <div className="triangle"></div>
            </div>
          </div>
          <div className="home_right_section1">
            <div className="section1_type1">
              <img src={image3} alt="" />
            </div>
            <div className="section1_slip" style={{ top: "35%" }}>
              <div className="slip">
                <div className="slipHeading">Hire the best professional</div>
                <div className="slipSubHeading">
                  find the best ones for what you need & Connect!
                </div>
                <div className="triangle"></div>
              </div>
              <div className="slipNumber">
                <div className="slipNumberValue">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
