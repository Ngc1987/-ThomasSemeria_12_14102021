import React, {useEffect, useState} from 'react'
import "./BarChart.scss"
import userActivity from "../../Mocks/user/18/activity"
import {Tooltip, Rectangle, ResponsiveContainer, BarChart , CartesianGrid, Legend, XAxis, YAxis, Bar} from 'recharts';
// import userAveragSes2 from "../../Mocks/user/12"
import * as d3 from "d3";

const CustomizedToolTip = ({ active, payload, label }) => {

	// console.log(label, payload, active)
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip-line">
			  <p className="desc">{payload[0].value + "kg"}</p>
			  <p className="desc">{payload[1].value + "Kcal"}</p>
			</div>
		)
	}
  
	return null;
  };
// const CustomizedCursor = ({ active, payload, label }) => {

// 	console.log(label, payload, active)
// 	if (payload && payload.length) {
// 		return (
// 			<div className="custom-cursor">
// 			  <h1>Hello</h1>
// 			</div>
// 		)
// 	}
  
// 	return null;
//   };
//   const CustomizedCursor = props => {
// 	  console.log(props)
//     const { x, y, width, height, stroke } = props;
//     return <Rectangle fill="red" stroke="red" x={x} y={y} width={width} height={height} />;
// };

// const CustomizedLegend = ({ active, payload, label }) => {

// 	console.log(label, payload, active)
// 	// if (active && payload && payload.length) {
// 		return (
// 			<div className="custom-tooltip-legend">
// 				<div className="kilogram">
// 					<div className="blackRound"></div>
// 					<p className="desc">Poids (kg)</p>
// 				</div>

// 				<div className="calories">
// 				<div className="redRound"></div>
// 					<p className="desc">Calories brûlées (kCal)</p>
// 				</div>
// 			</div>
// 		)
// 	// }
  
// 	return null;
//   };

export default function BarCharts(props) {
	
	
	const userDatas = userActivity.data.sessions
	const [userData, setUserData] = useState(userDatas)


	// console.log(userData)
	// console.log(props)

	const formatXAxis = (tickItem, i) => {
		// tickItem.style.fontSize = "2rem"
		return i + 1
	  }
	
	return (
		<article className="barChart" >

			<p className="barChart-title" >Activité quotidienne</p>
			<ResponsiveContainer >

				<BarChart width={"100%"} height={"40%"} data={userData}
				barCategoryGap={"20%"}
				barGap={8}
				margin={{top: 120, bottom: 30, right:30}} 
				// maxBarSize={7}
				>

					<CartesianGrid 
					strokeDasharray="3 3" 
					vertical={false}/>

					<XAxis 
					// dataKey="day"
					axisLine={false}
					tickLine={false}
					domain={['dataMin', 'dataMax']}
					// padding={{left: -30, right: -30}}
					// label="number"
					tickMargin={25}
					tick={{stroke: '#9B9EAC'}}
					
					
					// tickSize={8}
					tickFormatter={formatXAxis}
					// label={{ "font-size": "2rem" }}
					// scale="log"
					// type="number"
					 />
					<YAxis 
					orientation="right" 
					tickCount={3}
					domain={['dataMin - 1', 'dataMax']}
					dataKey="kilogram"
					axisLine={false}
					tickLine={false}
					tickMargin={30}
					
					tick={{stroke: '#9B9EAC'}}
					// margin={{top: 30}}
					// yAxisId="kg"
					 />
					<YAxis 
					// orientation="right" 
					tickCount={6}
					domain={[0, 600]}
					dataKey="calories"
					axisLine={false}
					tickLine={false}
					tick={false}
					// tickMargin="50"
					hide={true}
					yAxisId="cl"
					 />

					<Bar 
					stackId="kg" 
					barSize={8} 
					dataKey="kilogram" 
					label={false} 
					fill="#282D30" 
					radius={[25, 25, 0, 0]}
					// yAxisId="kg" 

					/>
					<Bar 
					stackId="cl" 
					barSize={8} 
					dataKey="calories" 
					label={false} 
					fill="#E60000"
					radius={[25, 25, 0, 0]}
					 yAxisId="cl"
					  />
					<Tooltip
					label={userData}
					cursor={{fill: "rgba(0,0,0,0.15)"}}
					content={<CustomizedToolTip/>}
					offset={35}
					//  viewBox={{x: 50, y: 50, width: 50, height: 400}} 

					 />
					{/* <Legend 
					iconType="circle" 
					label={userData}
					// content={<CustomizedLegend/>}
					// iconSize={10} 
					// align="right" 
					// verticalAlign="top" 

					/> */}
				</BarChart>
			</ResponsiveContainer>
			<div className="custom-tooltip-legend">
				<div className="kilogram">
					<div className="blackRound"></div>
					<p className="desc">Poids (kg)</p>
				</div>

				<div className="calories">
				<div className="redRound"></div>
					<p className="desc">Calories brûlées (kCal)</p>
				</div>
			</div>
		</article>
	)
	// useEffect(() => {
	// 	draw()
	// }, [])

	// // console.log(userData)
	// function draw() {
	// 	let container = d3.select(".barChart")
	// 	let margin = {top: 20, right: 20, bottom: 10, left: 20};
	// 	let width = 835 - margin.left - margin.right;
	// 	let height = 200 - margin.top - margin.bottom;
	// 	let barPadding = 0.8
	// 	let axisTicks = {qty: 3, outerSize: 0, dateFormat: "%m-%d"}

	// 	let svg = container.append("svg")
	// 						.attr("width", width)
	// 						.attr("height", height)
	// 						.append("g")
	// 						.attr("transform", `translate(${margin.left},${margin.top})`);

	// 	let dates = userData.map((item, index) => index + 1)

	// 	let xScale0 = d3.scaleBand()
	// 					.range([0, width - margin.left - margin.right])
	// 					.padding(barPadding)
	// 					.domain(userData.map((d, i) => d.day))

	// 	let xScale1 = d3.scaleBand()
	// 					.domain(['kilogram', 'calories']).range([0, xScale0.bandwidth()]);

	// 	let yScale = d3.scaleLinear()
	// 					.range([height - margin.top - margin.bottom, 0])
	// 					.domain([d3.min(userData, d => d.kilogram), d3.max(userData, d => d.kilogram)]);
							
	// 	let xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
	// 	let yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty);
		
	// 	let dayName = svg.selectAll(".day")
	// 	.data(userData)
	// 	.enter().append("g")
	// 	.attr("class", "day")
	// 	.attr("transform", d => `translate(${xScale0(d.day)},0)`);
		
	// 	dayName.selectAll(".bar.kilogram")
	// 	.data(d => [d])
	// 	.enter()
	// 	.append("rect")
	// 	.attr("class", "bar kilogram")
	// 	.style("fill", "black")
	// 				.attr("x", d => xScale1("kilogram"))
	// 				.attr("y", d => yScale(d.kilogram))
	// 				.attr("width", xScale1.bandwidth())
	// 				.attr("height", d => {
	// 					return height - margin.top - margin.bottom - yScale(d.kilogram)
	// 				})
					
	// 				dayName.selectAll(".bar.calories")
	// 				.data(d => [d])
	// 				.enter()
	// 				.append("rect")
	// 				.attr("class", "bar calories")
	// 				.style("fill", "red")
	// 				.attr("x", d => xScale1("calories"))
	// 				.attr("y", d => yScale(d.calories))
	// 				.attr("width", xScale1.bandwidth())
	// 				.attr("height", d => {
	// 					return height - margin.top - margin.bottom - yScale(d.calories)
	// 				})
	// 				// Add the X Axis
	// 				svg.append("g")
	// 				.attr("class", "x axis")
	// 				.attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
	// 				.call(xAxis);
					
	// 				// Add the Y Axis
	// 				svg.append("g")
	// 				.attr("class", "y axis")
	// 				.call(yAxis); 
	// 				// console.log(xScale0(2))
			
			
	// 				// xScale0.domain(userData.map((d, i) => d.day))
	// 				// xScale1.domain(['kilogram', 'calories']).range([0, xScale0.bandwidth()]);
	// 				// yScale.domain([0, d3.max(userData, d => d.kilogram > d.calories ? d.kilogram : d.calories)]);
	// 				// console.log(xScale0)
	// }

	// console.log(userActivity)
}
