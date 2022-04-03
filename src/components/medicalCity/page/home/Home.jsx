import React from 'react'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import ChartMonth from '../../charts/ChartMonth'
import ChartDay from '../../charts/ChartDay'
import Locations from '../../locations/Locations'

export default function Home() {
  return (
    <div>
        <FeaturedInfo/>
        <ChartMonth/>
        <ChartDay/>
        <Locations/>
    </div>
  )
}
