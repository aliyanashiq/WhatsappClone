import React, { useState } from 'react';
import './Right.css';
import { MdEmergencyRecording } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Ima3444 from '../assets/6.jpeg';

function Right() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className='Right-main'>
      <div className="right-header">
        <div className="left-header">
          <img src={Ima3444} alt="User" />
          <h3>Name</h3>
        </div>
        <div className="Other-header">
          <button className={`Vedio-button ${showMessage ? 'active' : ''}`} onClick={handleButtonClick}>
            <MdEmergencyRecording />
            <span> <FaAngleRight /> </span>
          </button>
          <h1><CiSearch /></h1>
          <h2><BsThreeDotsVertical /></h2>
        </div>
      </div>
      <div className="Right-body">
        {showMessage && <div className="message">Make a video call</div>}
      </div>
    </div>
  );
}

export default Right;
