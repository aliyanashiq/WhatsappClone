import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import image2 from '../assets/7.webp';
import './Statusbar.css';
import StatusData from '../Data-whatsapp/Data'; // Import the status data

function Statusbar() {
  return (
    <div className='Status-container'>
      <div className="top-sidebar">
        <div className="part1-sidebar">
          <h1>Status</h1>
          <div className="icons-gro">
            <div className="icons"><FaPlus /></div>
            <div className="icons"><PiDotsThreeOutlineVertical /></div>
          </div>
        </div>
        <div className="status-bar">
          <div className="show-status">
            <div className="status-image">
              <img src={image2} />
            </div>
            <div className="status-icons">
              <FaPlus />
            </div>
            <div className="status-text">
              <h3>My status</h3>
              <p>Click to add status update</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-sidebar">
        <ul>
          <li className='Li-text'>RECENT</li>
          {StatusData.map((status) => (
            <li key={status.id} className="status-item">
              <div className="avater-line">
                <img src={status.img} alt={status.title} className="status-avatar" />
              </div>
              <div className="status-info">
                <div className="status-title">{status.title}</div>
                <div className="status-time">{'Today at ' + status.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Statusbar;
