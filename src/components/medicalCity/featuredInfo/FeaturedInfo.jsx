import React from 'react'
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
          <span className="featuredTitle">Số mũi tiêm hôm qua</span>
          <div className="featuredContainer">
            <span className="featuredTotal">658,999</span>
            <span className="featuredTotalName">(mũi)</span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Số mũi đã tiêm thành phố</span>
          <div className="featuredContainer">
            <span className="featuredTotal">218,799,777</span>
            <span className="featuredTotalName">(mũi)</span>
          </div>
        </div>
    </div>
  )
}
