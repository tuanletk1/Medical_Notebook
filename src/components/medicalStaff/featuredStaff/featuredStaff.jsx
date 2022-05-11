import React from 'react'
import './featuredStaff.css'

export default function FeaturedStaff() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">TIÊM THÀNH CÔNG</span>
                <div className="featuredContainer">
                    <span className="featuredTotal">1231123</span>
                    <span className="featuredTotalName"></span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">ĐĂNG KÝ TRONG NGÀY</span>
                <div className="featuredContainer">
                    <span className="featuredTotal">000000000</span>
                    <span className="featuredTotalName"></span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">VẮC XIN CÒN DƯ</span>
                <div className="featuredContainer">
                    <span className="featuredTotal">000000000</span>
                    <span className="featuredTotalName"></span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">VẮC XIN TIÊM NHIỀU NHẤT</span>
                <div className="featuredContainer">
                    <span className="featuredTotal">000000000</span>
                    <span className="featuredTotalName"></span>
                </div>
            </div>
        </div>
    )
}
