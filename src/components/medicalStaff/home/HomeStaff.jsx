import React from 'react'
import FeaturedStaff from '../featuredStaff/featuredStaff'
import Statistical from '../featuredStaff/statistical'
import ChartStaff from '../featuredStaff/ChartStaff'

export default function HomeStaff() {
  return (
   <div>
     <FeaturedStaff/>
     <Statistical/>
     <ChartStaff/>
   </div>
  )
}
