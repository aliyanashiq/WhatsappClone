import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Account.css';
import { MdOutlineSecurity, MdRequestQuote, MdOutlineInfo } from 'react-icons/md';
import { FaArrowLeftLong } from "react-icons/fa6";

function Account() {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className='Account-container'>
            <div className="top-Accounts">
                <p className="Accounts-logo" onClick={() => navigate('/Setting')}>
                    <FaArrowLeftLong />
                </p>
                <h1>Accounts</h1>
            </div>
            <div className="Account-buttons1">
                <div className='icon-container01' onClick={() => navigate('/Security')}>
                    <div className='Icons-left01'><MdOutlineSecurity /></div>
                    <span className='icon-label01'>Security notification</span>
                </div>
                <div className='icon-container01' onClick={() => navigate('/Statusbar')}>
                    <div className='Icons-left01'><MdRequestQuote /></div>
                    <span className='icon-label01'>Request account info</span>
                </div>
                <div className='icon-container01' onClick={() => navigate('/Statusbar')}>
                    <div className='Icons-left01'><MdOutlineInfo /></div>
                    <span className='icon-label01'>How to delete my account</span>
                </div>
            </div>
        </div>
    );
}

export default Account;
