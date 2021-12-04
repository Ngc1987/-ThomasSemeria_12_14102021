import React, { useEffect, useState } from 'react'
import "./SessionChart.scss"
import userAveragSes from "../../Mocks/user/18/average-sessions"
import * as d3 from "d3";
import PropTypes from 'prop-types'

export default function LineChart4(props) {

	console.log(props)
	const userDatas = props.data.sessions.sessions
	// eslint-disable-next-line no-unused-vars
	const [userData, setUserData] = useState(userDatas)

	console.log(userData)
	const sessData = props.sessions

	useEffect(() => {
		draw()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function draw() {

		// Création des diemnsions nécessaires dans des variableses dimensions 
		let margin = { top: 20, right: 20, bottom: 0, left: 20 };
		let width = 258 - margin.left - margin.right;
		let height = 263 - margin.top - margin.bottom;
		// Create the chart
		let chart = d3.select(".lineChart")
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
		// Clean obsolete chart 🗑️
		chart.selectAll(".lineChart .d3").remove()
		let min = d3.min(sessData)
		let max = d3.max(sessData)
		let xScale = d3.scaleLinear()
			.domain([0.5, 7.5])
			.range([-50, 200])
					// console.log(d3.extent(userData, d => d.day))
		let yScale = d3.scaleLinear()
			.domain([min, max + 30])
			.range([height - 40, 0])
		// register our line
		let line = d3.line()
			.x(d => d.x || xScale(d.day))
			.y(d => d.y || yScale(d.sessionLength))
			.curve(d3.curveMonotoneX)

		const linePath = line(userDatas);

		//draw our path ✍🏼
		chart.append("path")
			.datum(getPathCoordinates([-15, 0, 15, 30, 45, 60, 75, 90, 100, 115]))
			.attr("d", linePath)
			.attr("class", "d3")
			.attr("stroke", "white")
			.attr("stroke-width", "3")
			.attr("fill", "none")

			// launch a transition lineTween with the data 
			.transition()
			.duration(750)
			.call(lineTween)
		// add data points and bubbles
		getPathCoordinates([...userData]).map((coordinates, index) => {
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
				.attr("x", getBubbleXCoordinate(coordinates.x) + 51)
				.attr("y", coordinates.y - 25)
				.attr("class", "d3")
				.attr("width", "50")
				.attr("height", 30)
				.attr("fill", "white")
				.attr("opacity", "0")
			group.append("text")
				.attr("x", getBubbleXCoordinate(coordinates.x) + 76)
				.attr("y", coordinates.y - 7)
				.style("text-anchor", "middle")
				.attr("class", "d3")
				.text(userData[index].sessionLength + "min")
				.attr("opacity", "0")
			group.append("circle")
				.attr("class", "d3")
				.attr("cx", coordinates.x + 37)
				.attr("cy", coordinates.y)
				.attr("r", 4)
				.attr("opacity", "0")
				.attr("fill", "white")
			// hitbox
			chart.append("rect")
				.attr("x", coordinates.x + 21)
				.attr("y", 0)
				.attr("width", 41)
				.attr("height", 300)
				.attr("class", "d3")
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
				let interpolateEnd = d3.interpolate(d, getPathCoordinates([20, ...userData, 75]))
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
					x: index * 37 - 23,
					y: (215 - 215 * (point / 144)) || yScale(point.sessionLength)
				}
			))
			console.log(coordinates)
			return coordinates
		}
		// Just to be sure a bubble don't go outside the chart
		function getBubbleXCoordinate(x) {
			if (x <= 200) return x
			else return 165
		}
	}


	// var myData = {...userData}
	// console.log(myData)


	// d3.json(myData).then(donnee => {


	// })




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



LineChart4.propTypes = {
	data: PropTypes.object.isRequired,
}