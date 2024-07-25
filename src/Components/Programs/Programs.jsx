import React from "react";
import "./Programs.css";
import program_1 from "../../assets/photos/program_1.png";
import program_2 from "../../assets/photos/program_2.png";
import program_3 from "../../assets/photos/program_3.png";
import { BiBookReader } from "react-icons/bi";
import { PiStudent } from "react-icons/pi";
import { GiArmorUpgrade } from "react-icons/gi";


const Programs = () => {
  return (
    <div className="programs" id="">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <BiBookReader className="icon"  />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <PiStudent className="icon"  />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <GiArmorUpgrade className="icon" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
