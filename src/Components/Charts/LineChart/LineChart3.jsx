import React, { useEffect, useState } from 'react'
import "./SessionChart.scss"
import userAveragSes from "../../Mocks/user/18/average-sessions"
import * as d3 from "d3";
import PropTypes from 'prop-types'

export default function LineChart3(props) {

	const userDatas = props.data.sessions
	// eslint-disable-next-line no-unused-vars
	const [userData, setUserData] = useState(userDatas)

	useEffect(() => {
		draw()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function draw() {

		// Création des diemnsions nécessaires dans des variableses dimensions 
		let margin = { top: 20, right: 20, bottom: 10, left: 20 };
		let width = 258 - margin.left - margin.right;
		let height = 263 - margin.top - margin.bottom;

		
		let svg = d3.select(".lineChart")
			.append("svg");

		svg.attr("width", "100%")
			.attr("height", "100%")
			.style("background", "#35383d44")
			.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
		// Création des groupes X et Y
		// eslint-disable-next-line no-unused-vars
		// const groupeX = svg.append("g")
		// 	.attr("transform", `translate(${margin.left}, ${height})`)

		// // eslint-disable-next-line no-unused-vars
		// const groupeY = svg.append("g")
		// 	.attr("transform", `translate(20, 0)`)


		// Mise en place des portées (range) et des domaines de nos axes
		let xScale = d3.scaleLinear()
			.domain([0.5, 7.5])
			.range([0, width + 40])
		// console.log(d3.extent(userData, d => d.day))

		let yScale = d3.scaleLinear()
			.domain([0, 120])
			.range([height - 30, 0])


		let line = d3.line()
			.x(function (d, i) { return xScale(d.day) })
			.y(function (d, i) { return yScale(d.sessionLength) })
			// .curve(d3.curveBundle)
			.curve(d3.curveMonotoneX)
		// let line = d3.line()
		// 	.x(d => d.x)
		// 	.y(d => d.y)
		// 	.curve(d3.curveMonotoneX)
		// Ajout du path
		svg.append("path")
			.attr("d", line(userData))
			// .attr("transform", `translate(20, 160)`)
			.attr('fill', 'none')
			.attr('stroke', '#f6c3d0')
			.style("margin-left", margin.left)
			.attr('stroke-width', 3)
			.transition()
			.duration(750)
			// .call(lineTween)	

		getPathCoordinates([...userData]).map((coordinates, index) => {
			console.log(coordinates)
			let group = svg.append("g")
				.attr("id", "session" + index)
				.attr("class", "d3")
			group.append("rect")
				.attr("x", coordinates.x + 41)
				.attr("y", 0)
				.attr("width", "100%")
				.attr("height", "100%")
				// .attr("class", "d3")
				.attr("fill", "rgba(17, 24, 39, 0.3)")
				.attr("opacity", "0")
			group.append("rect")
				.attr("x", getBubbleXCoordinate(coordinates.x) + 51)
				.attr("y", coordinates.y - 25)
				.attr("width", "50")
				.attr("height", 30)
				.attr("fill", "white")
				.style("font-weight", "bolder")
				.attr("opacity", "0")
			group.append("text")
				.attr("x", getBubbleXCoordinate(coordinates.x) + 76)
				.attr("y", coordinates.y - 7)
				.style("text-anchor", "middle")
				// .style("color", "black")
				.attr("class", "d3 text-xs text-red-600 fill-current")
				.text(userData[index].sessionLength + "min")
				.attr("opacity", "0")
			group.append("circle")
				// .attr("class", "d3 text-white fill-current")
				.attr("cx", coordinates.x + 41)
				.attr("cy", coordinates.y)
				.attr("r", 4)
				.attr("opacity", "0")
				.attr("fill", "white")
			// // hitbox
			svg.append("rect")
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
				let interpolateEnd = d3.interpolate(d, getPathCoordinates([...userData]))
				// console.log(d3.interpolate(d, getPathCoordinates([0, ...userData, 99])))
				return function (t) {
					d = interpolateEnd(t)
					console.log(d)
					return line(d)
				}

			})
		}
		// Some tools to transform our data into coordinates and path 🛠️
		function getPathCoordinates(dataPoints) {
			let coordinates = dataPoints.map((point, index) => (

				{
					x: index * 37 -23,
					y: yScale(point.sessionLength)
				}
			))
			return coordinates
		}
		// Just to be sure a bubble don't go outside the chart
		function getBubbleXCoordinate(x) {
			if (x <= 180) return x
			else return 130
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



LineChart3.propTypes = {
	data: PropTypes.object.isRequired,
}