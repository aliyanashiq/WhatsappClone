import React from 'react';
import './SideBar.css';
import { MdMessage } from "react-icons/md";
import { LuCircleDotDashed } from "react-icons/lu";
import { GrChannel } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import m1 from '../assets/6.jpeg';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className='Sidebar'>
            <div className="upper-icons">
                <div className='icon-container' onClick={() => navigate('/messages')}>
                    <div className='Icons-left'><MdMessage /></div>
                    <span className='icon-label'>Messages</span>
                    <p>25</p>
                </div>
                <div className='icon-container' onClick={() => navigate('/Statusbar')}>
                    <div className='Icons-left'><LuCircleDotDashed /></div>
                    <span className='icon-label'>Circles</span>
                    <h6></h6>
                </div>
                <div className='icon-container' onClick={() => navigate('/channels')}>
                    <div className='Icons-left'><GrChannel /></div>
                    <span className='icon-label'>Channels</span>
                    <h6></h6>
                </div>
                <div className='icon-container' onClick={() => navigate('/Communication')}>
                    <div className='Icons-left'><FaUsers /></div>
                    <span className='icon-label'>Communities</span>
                </div>
                <div className='icon-container' onClick={() => navigate('/Meta')}>
                    <div className='Icons-left'><FaMeta /></div>
                    <span className='icon-label'>Meta</span>
                </div>
            </div>
            <div className="lower-icons">
                <div className='icon-container' onClick={() => navigate('/Setting')}>
                    <div className='Icons-left'><IoMdSettings /></div>
                    <span className='icon-label'>Settings</span>
                </div>
                <div className='icon-container'>
                    <img src={m1} alt="Profile" className='profile-image' />
                    <span className='icon-label'>Profile</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
