import React from 'react'
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
          <span className="featuredTitle">Số mũi tiêm hôm qua</span>
          <div className="featuredContainer">
            <span className="featuredTotal">1231123</span>
            <span className="featuredTotalName">(vaccin)</span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Số mũi đã tiêm thành phô</span>
          <div className="featuredContainer">
            <span className="featuredTotal">000000000</span>
            <span className="featuredTotalName">(vaccin)</span>
          </div>
        </div>
    </div>
  )
}
