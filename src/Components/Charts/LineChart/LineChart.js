import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import "./LineChart.scss"
import userAveragSes from "../../Mocks/user/12/average-sessions.json"
import * as d3 from "d3";




export default function LineChart() {


	const userDatas = userAveragSes.data.sessions
	const [userData, setUserData] = useState(userDatas)
	
	useEffect(() => {
		draw()
	}, [])

	function draw() {

		// Création des diemnsions nécessaires dans des variableses dimensions 
		let margin = {top: 20, right: 20, bottom: 10, left: 20};
		let width = 258 - margin.left - margin.right;
		let height = 263 - margin.top - margin.bottom;

		let svg = d3.select(".lineChart")
			.append("svg");

		svg.attr("width", "100%")
			.attr("height", "100%")
			.style("background", "#35383d44")
			.append("g")
			.attr("transform", "translate(" + margin.left +", " + margin.top + ")")

		// Création des groupes X et Y
		const groupeX = svg.append("g")
							.attr("transform", `translate(${margin.left}, ${height})`)

		const groupeY = svg.append("g")
							.attr("transform", `translate(20, 0)`)


		// Mise en place des portées (range) et des domaines de nos axes
		let xScale = d3.scaleLinear()
					.domain([0.5, 7.5])
					.range([-50, width +65 ])
					// console.log(d3.extent(userData, d => d.day))

		let yScale = d3.scaleLinear()
					.domain([0, 120])
					.range([height -30, 0])
					// console.log(y("10"))

		// Création de l'axe X et appel de l'axe X dans le groupe X
		// const axeX = d3.axisBottom(xScale)
		// 				.ticks(7)
		
		// groupeX.call(axeX)
		// 		.style("color", "#ffffff8e")
				
		// Création de l'axe Y et appel de l'axe Y dans le groupe Y
		// const axeY = d3.axisLeft(yScale)
		
		// groupeY.call(axeY)
		// 		.style("color", "#ffffff8e")
		// 		.attr("text-anchor", "middle")
				
		
		// Création des coordonnées


		let line = d3.line()
					.x(function(d, i) {return xScale(d.day)})
					.y(function(d, i) {return yScale(d.sessionLength)})
					.curve(d3.curveBundle)
		// Ajout du path
		svg.append("path")
		.attr("d", line(userData))
		// .attr("transform", `translate(20, 160)`)
		.attr('fill', 'none')
		.attr('stroke', '#f6c3d0')
		.style("margin-left", margin.left)
		.attr('stroke-width', 3)
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
