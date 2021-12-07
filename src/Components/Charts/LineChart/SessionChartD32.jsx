import React, {useEffect, useState} from 'react'
import "./SessionChart.scss"
import userAveragSes from "../../Mocks/user/18/average-sessions"
import * as d3 from "d3";
import PropTypes from 'prop-types'

export default function SessionChartD3(props) {

	console.log(props)
	const userDatas = userAveragSes.data.sessions
	// eslint-disable-next-line no-unused-vars
	const [userData, setUserData] = useState(userDatas)
	const sessData = props.data
	console.log(sessData)
	useEffect(() => {
		draw()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function draw() {

		// Create the chart
		let chart = d3.select(".lineChart")
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
		// Clean obsolete chart 🗑️
		chart.selectAll(".lineChart .d3").remove()
		
		// register our line
		let line = d3.line()
			.x(d => d.x)
			.y(d => d.y)
			.curve(d3.curveMonotoneX)
		//draw our path ✍🏼
		chart.append("path")
			.datum(getPathCoordinates([...sessData]))
			.attr("d", line)
			.attr("class", "d3")
			.attr("stroke", "white")
			.attr("stroke-width", "3")
			.attr("fill", "none")
			// launch a transition lineTween with the data 
			.transition()
			.duration(750)
			.call(lineTween)
		// add data points and bubbles
		getPathCoordinates([...sessData]).map((coordinates, index) => {
			let group = chart.append("g")
				.attr("id", "session" + index)
				.attr("class", "d3")
			group.append("rect")
				.attr("x", coordinates.x + 41)
				.attr("y", 0)
				.attr("width", "100%")
				.attr("height", "100%")
				.attr("class", "d3")
				.attr("fill", "rgba(17, 24, 39, 0.3)")
				.attr("opacity", "0")
			group.append("rect")
				.attr("x", getBubbleXCoordinate(coordinates.x) + 46)
				.attr("y", coordinates.y - 25)
				.attr("width", "50")
				.attr("height", 20)
				.attr("fill", "white")
				.attr("class", "d3 text-white fill-current")
				.attr("opacity", "0")
			group.append("text")
				.attr("x", getBubbleXCoordinate(coordinates.x) + 71)
				.attr("y", coordinates.y - 10)
				.style("text-anchor", "middle")
				.attr("class", "d3 text-xs text-red-600 fill-current")
				.text(sessData[index] + "min")
				.attr("opacity", "0")
			group.append("circle")
				.attr("class", "d3 text-white fill-current")
				.attr("cx", coordinates.x + 41)
				.attr("cy", coordinates.y)
				.attr("r", 4)
				.attr("fill", "white")
				.attr("opacity", "0")
			// hitbox
			chart.append("rect")
				.attr("x", coordinates.x + 21)
				.attr("y", 0)
				.attr("width", 41)
				.attr("height", 300)
				.attr("class", "d3 fill-transparent")
				.attr("opacity", "0")
				// make it appear on hover + make the infos appears
				.on("mouseover", function () {
					d3.selectAll(`#session${index} > *`).transition()
						.attr("opacity", "1")
				})
				.on("mouseout", function () {
					d3.selectAll(`#session${index} > *`).transition()
						.attr("opacity", "0")
				})

		})
		// Register our fantastic transition ✨
		function lineTween(transition) {
			transition.attrTween("d", function (d) {
				let interpolateEnd = d3.interpolate(d, getPathCoordinates([0, ...sessData, 99]))
				return function (t) {
					d = interpolateEnd(t)
					return line(d)
				}
			})
		}
		// Some tools to transform our data into coordinates and path 🛠️
		function getPathCoordinates(dataPoints) {
			let coordinates = dataPoints.map((point, index) => (
				{
					x: index * 41 - 21,
					y: 200 - 200 * (point / 150)
				}
			))
			return coordinates
		}
		// Just to be sure a bubble don't go outside the chart
		function getBubbleXCoordinate(x) {
			if (x <= 200) return x
			else return 165
		}
	}

	// console.log(userAveragSesData)
	return (
		<div className="lineChart" >
			<p className="lineChart-title">Durée moyenne des sessions</p>

			<div className="days">
				<p>L</p>
				<p>M</p>
				<p>M</p>
				<p>J</p>
				<p>V</p>
				<p>S</p>
				<p>D</p>
			</div>
		</div>
	)
}



SessionChartD3.propTypes = {
	data: PropTypes.object.isRequired,
}