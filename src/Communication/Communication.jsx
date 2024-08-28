import React from 'react'
import './Communication.css'
import { FaUsers } from "react-icons/fa";

function Communication() {
  return (
    <div className='Com-main'>
      <div className="com-part1">
        <h2>Communities</h2>
        <div className="new-com">
          <div className="logo-com">
            <FaUsers size={25} />
          </div>
          <p>New community</p>
        </div>
      </div>
      <div className="com-part2">
        no community you add
      </div>
    </div>
  )
}

export default Communication