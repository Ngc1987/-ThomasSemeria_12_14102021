import React, {useEffect, useState} from 'react'
import "./BarChart.scss"
import userActivity from "../../Mocks/user/18/activity"
// import userAveragSes2 from "../../Mocks/user/12"
import * as d3 from "d3";

export default function BarChart(props) {


	const userDatas = userActivity.data.sessions
	const [userData, setUserData] = useState(userDatas)
	
	useEffect(() => {
		draw()
	}, [])

	console.log(userData)
	function draw() {
		let container = d3.select(".barChart")
		let margin = {top: 20, right: 20, bottom: 10, left: 20};
		let width = 835 - margin.left - margin.right;
		let height = 200 - margin.top - margin.bottom;
		let barPadding = 0.8
		let axisTicks = {qty: 3, outerSize: 0, dateFormat: "%m-%d"}

		let svg = container.append("svg")
							.attr("width", width)
							.attr("height", height)
							.append("g")
							.attr("transform", `translate(${margin.left},${margin.top})`);

		let dates = userData.map((item, index) => index + 1)

		let xScale0 = d3.scaleBand()
						.range([0, width - margin.left - margin.right])
						.padding(barPadding)
						.domain(userData.map((d, i) => d.day))

		let xScale1 = d3.scaleBand()
						.domain(['kilogram', 'calories']).range([0, xScale0.bandwidth()]);

		let yScale = d3.scaleLinear()
						.range([height - margin.top - margin.bottom, 0])
						.domain([d3.min(userData, d => d.kilogram), d3.max(userData, d => d.kilogram)]);
							
		let xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
		let yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty);
		
		let dayName = svg.selectAll(".day")
		.data(userData)
		.enter().append("g")
		.attr("class", "day")
		.attr("transform", d => `translate(${xScale0(d.day)},0)`);
		
		dayName.selectAll(".bar.kilogram")
		.data(d => [d])
		.enter()
		.append("rect")
		.attr("class", "bar kilogram")
		.style("fill", "black")
					.attr("x", d => xScale1("kilogram"))
					.attr("y", d => yScale(d.kilogram))
					.attr("width", xScale1.bandwidth())
					.attr("height", d => {
						return height - margin.top - margin.bottom - yScale(d.kilogram)
					})
					
					dayName.selectAll(".bar.calories")
					.data(d => [d])
					.enter()
					.append("rect")
					.attr("class", "bar calories")
					.style("fill", "red")
					.attr("x", d => xScale1("calories"))
					.attr("y", d => yScale(d.calories))
					.attr("width", xScale1.bandwidth())
					.attr("height", d => {
						return height - margin.top - margin.bottom - yScale(d.calories)
					})
					// Add the X Axis
					svg.append("g")
					.attr("class", "x axis")
					.attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
					.call(xAxis);
					
					// Add the Y Axis
					svg.append("g")
					.attr("class", "y axis")
					.call(yAxis); 
					// console.log(xScale0(2))
			
			
					// xScale0.domain(userData.map((d, i) => d.day))
					// xScale1.domain(['kilogram', 'calories']).range([0, xScale0.bandwidth()]);
					// yScale.domain([0, d3.max(userData, d => d.kilogram > d.calories ? d.kilogram : d.calories)]);
					// console.log(xScale0)
	}

	// console.log(userActivity)
	return (
		<article className="barChart" >
			<p className="barChart-title" >Activité quotidienne</p>
		</article>
	)
}
