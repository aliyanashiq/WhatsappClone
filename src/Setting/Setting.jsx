import React from 'react';
import './Setting.css';
import { useNavigate } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdChat } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { TbRosetteFilled } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import M4555 from '../assets/6.jpeg';


function Setting() {
    const navigate = useNavigate();

    // Add the handleReset function to clear the form
    const handleReset = () => {
        document.getElementById("search").value = "";
    }

    return (
        <div className='Setting-container'>
            <div className="top-setting">
                <h1>Setting</h1>

                {/* From Uiverse.io by satyamchaudharydev */}
                <form className="form2">
                    <label htmlFor="search">
                        <input className="input" type="text" required placeholder="Search twitter" id="search" />
                        <div className="fancy-bg"></div>
                        <div className="search">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                        </div>
                        <button className="close-btn" type="reset" onClick={handleReset}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </label>
                </form>
            </div>
            <div className="Bottom-container">
                <div className="Profile-setting">
                    <img src={M4555} alt="Profile" />
                    <div className="setting-profile">
                        <h3>سُکُون قَلْب</h3>
                        <p>اجنبی تم ہو جاؤ۔  غیر ہونا ہم سکھاتے ہیں۔</p>
                    </div>
                </div>
                <div className="setting-btn-group">
                    <div className='icon-container1' onClick={() => navigate('/Account')}>
                        <div className='Icons-left1'><MdAccountCircle /></div>
                        <div className="Span">
                            <span className='icon-label1'>Accounts</span>
                        </div>

                    </div>
                    <div className='icon-container1' onClick={() => navigate('/Privacy')}>
                        <div className='Icons-left1'><RiGitRepositoryPrivateFill />
                            </div>
                            <div className="Span">
                            <span className='icon-label1'>Privacy</span>
                            </div>

                    </div>
                    <div className='icon-container1' onClick={() => navigate('/Chat')}>
                        <div className='Icons-left1'><MdChat />
                            </div>
                            <div className="Span"><span className='icon-label1'>Chat</span></div>

                    </div>
                    <div className='icon-container1' onClick={() => navigate('/Notifications')}>
                        <div className='Icons-left1'><IoNotifications />
                        </div>
                        <div className="Span">
                            <span className='icon-label1'>Notifications</span>
                        </div>

                    </div>
                    <div className='icon-container1' onClick={() => navigate('/Achievements')}>
                        <div className='Icons-left1'><TbRosetteFilled />
                            </div>
                            <div className="Span">
                            <span className='icon-label1'>Achievements</span>
                            </div>

                    </div>
                    <div className='icon-container1' onClick={() => navigate('/Help')}>
                        <div className='Icons-left1'><BsQuestionCircle />
                            </div>
                            <div className="Span">
                            <span className='icon-label1'>Help</span>
                            </div>

                    </div>
                    <div className='icon-container1'  onClick={() => navigate('/Logout')}>
                        <div className='Icons-left1' ><IoIosLogOut style={{color:'#c2606e'}} />
                            </div>
                            <div className="Span" style={{border:'none'}}>
                            <span className='icon-label1' style={{color:'#c2606e'}}>Logout</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting;
