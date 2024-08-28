import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { SlCamrecorder } from "react-icons/sl";
import './Channels.css';
import { BsGearWide } from "react-icons/bs";
import { TiTick } from "react-icons/ti";


// Import the CSS file

// Importing images
import M23 from '../assets/6.jpeg';
import img1 from '../assets/16.jpeg';
import img3 from '../assets/3.jpeg';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.webp';
import img8 from '../assets/8.jpeg';
import img9 from '../assets/9.jpeg';
import img10 from '../assets/16.jpeg';
import img11 from '../assets/17.jpeg';
import img12 from '../assets/12.webp';
import img13 from '../assets/13.jpeg';
import img14 from '../assets/14.jpeg';
import img15 from '../assets/15.jpeg';

// Data for channels
const Channelsdata = [
  { id: 1, img: img15, title1: 'Champions', Landi: '15.9M' },
  { id: 3, img: img11, title1: 'Icc', Landi: '15.9M' },
  { id: 4, img: img10, title1: 'Fap', Landi: '11.9M' },
  { id: 2, img: img1, title1: 'PIA', Landi: '18.9M' },
  { id: 5, img: img5, title1: 'ISPR', Landi: '19.9M' },
  { id: 6, img: img7, title1: 'PAR', Landi: '14.9M' },
  { id: 7, img: img6, title1: 'IUB', Landi: '11.9M' },
  { id: 8, img: img8, title1: 'Local', Landi: '17.9M' },
  { id: 9, img: img9, title1: 'Home', Landi: '18.9M' },
  { id: 10, img: img3, title1: 'Real State', Landi: '15.9M' },
  { id: 11, img: img12, title1: 'Variable', Landi: '19.9M' },
  { id: 12, img: img14, title1: 'Xiomi', Landi: '13.9M' },
  { id: 13, img: img13, title1: 'Demor', Landi: '110.9M' }
];

function Channels() {
  return (
    <div className='Channels-container'>
      <div className="top-channels">
        <h1>Channels</h1>
        <div className="channels-icons">
          <FaPlus />
        </div>
      </div>

      <form className="form">
        <label htmlFor="search">
          <input
            className="input"
            type="text"
            required
            placeholder="Search twitter"
            id="search"
          />
          <div className="fancy-bg"></div>
          <div className="search">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
          <button className="close-btn" type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </label>
      </form>

      <div className="lower-channels">
        <div className="whatspp">
          <div className="Whatsapp-image">
            <img src={M23} alt="Whatsapp" />
            <div className="Whatspp-container">
              <div className="Top-wheather">
                <h1>Whatsapp</h1>
                <p>
                  <div className="camera">
                    <SlCamrecorder />
                  </div>
                  The Feature Ft. Tan France-chat Filters Weather it's his...
                </p>
              </div>
              <div className="Bottom-wheather">
                <p>Friday</p>
                <h5>7</h5>
              </div>
            </div>
          </div>
        </div>
        <h2 className='Find'>Find channels to follow</h2>
        <div className="channels-list">
          <ul>
            {Channelsdata.map(({ id, img, title1, Landi }) => (
              <li key={id}>
                <img src={img} alt={title1} />
                <div className='Bottom'>
                  <div className="Text-design">
                    <h3>{title1}</h3>
                    <div className="gear">
                      <div className="gear-icon">
                        <BsGearWide /><span><TiTick /></span>
                      </div>

                    </div>
                  </div>
                  <p>{Landi} Followers</p>
                  <div className="followers">
                    <button> Follow
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Channels;
