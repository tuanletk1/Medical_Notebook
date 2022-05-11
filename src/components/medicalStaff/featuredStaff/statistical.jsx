import React from 'react'

export default function Statistical() {
  return (
    <div>
        <iframe src="https://covid19.vnanet.vn/home/indexwigetsummary" frameBorder={0} width="100%" style={{minHeight: '250px', paddingTop: '50px', paddingRight: '250px', paddingLeft: '250px', overflow: 'hidden'}} scrolling="no"> </iframe>
        <iframe src="https://covid19.vnanet.vn/home/indexwiget" frameBorder={0} width="100%" style={{minHeight: '500px', paddingRight: '100px', paddingLeft: '100px'}}> </iframe>
    </div>
  )
}
