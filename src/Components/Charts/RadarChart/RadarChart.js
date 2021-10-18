import React from 'react'
import "./RadarChart.scss"
import radar from "./radar.svg"


export default function RadarChart() {
	return (
		<article className="radarChart" >
			<img src={radar} alt="" />
		</article>
	)
}
