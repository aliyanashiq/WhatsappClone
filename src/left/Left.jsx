import React from 'react'
import LeftHeader from './LeftHeader'
import LeftMassage from './LeftMassage'

function Left() {
  return (
    <div className='Manin-left'>
        <div className="left-header">
            <LeftHeader/>
        </div>
        <div className="left-Massage">
            <LeftMassage/>
        </div>
    </div>
  )
}

export default Left