import React, { useState} from 'react'
import "./RadarChart.scss"
import radar from "./radar.svg"
import {Tooltip, ResponsiveContainer ,Label, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,Legend  } from 'recharts';
import PropTypes from 'prop-types'



const CustomizedTooltip = ({ active, payload, data}) => {

	// console.log(payload, active, data)
	if (payload && payload.length) {
		return (
			<div className="custom-tooltip-radar">
			  <h1 className="desc">{payload[0].value}</h1>
			</div>
		)
	}
  
	return null;
  };
const CustomizedLabel = (props) => {

	// console.log(props)
	
		return (
			<div className="custom-tooltip-radar">
			  {/* <h1 className="desc">{payload[0].value}</h1> */}
			</div>
		)
	
  
	return null;
  };


export default function RadarCharts(props) {

	const perfDatas = props.data.data
	// eslint-disable-next-line no-unused-vars
	const [perfData, setPerfData] = useState(perfDatas)

	const divStyle = {
		width: 'fit-content',
		backgroundColor: "blue",
		borderRadius: "50%",
		fontSize: "1.5rem",
		border: "none"
	  };
	//   function tickFormat(props) {
	// 	  console.log(props)
	// 		  return perfData.kind[(props)]
	// 		}
	  
	  const max = (perfData.data.map((item) => item.value).sort((a, b) => a < b ? 1 : -1)[0] + 30)
	  const reorderPerfData = []
	  perfData.data.forEach((elm) => reorderPerfData.unshift(elm))

			console.log(perfData)
	const orderedPerfData = {...perfData, data: reorderPerfData}
			// console.log(reorderPerfData, perfData.data)
			// console.log(perfData.data.reverse())
	
			console.log(orderedPerfData)
	return (
		<article className="radarChart" >
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart 
				className="rechartRadar" 
				outerRadius={90} 
				width={263} 
				height={258} 
				data={orderedPerfData.data}
				startAngle={90}
				endAngle={-270}
				
				
				>
				{/* <PolarGrid
				// innerRadius={100}
				// outerRadius={0}
				polarRadius={[10, 30, 50, 70, 90]}
				/> */}
				<PolarAngleAxis 
					dataKey="kind"
					// radius={"50%"}
					// data={data.data}
					tick={true}
					tickLine={true}
					axisLine={true}
					
					// tickFormatter={<CustomizedLabel/>}
					type="category"
					orient="top"
					 >

					<Label
					position="center"
					 />
					 </PolarAngleAxis>
				<PolarRadiusAxis 
					angle={30} 
					domain={[0, max]}
					tick={false}
					axisLine={false} 
					tickLine={false}
					// tickFormatter={}

					/>
				<Radar 
					
					dataKey="value" 
					stroke="#ff0101" 
					fill="#ff0101" 
					fillOpacity={0.5} />
					
				<Tooltip
					cursor={false}
					// wrapperStyle={divStyle}
					contentStyle={divStyle}
					// position={{ x: 100, y: 140 }}
					coordinate={{ x: 80, y: 80 }}
					payload={perfData}
					content={<CustomizedTooltip />}
				 />
			</RadarChart>
			</ResponsiveContainer>

			<img src={radar} alt="" />
		</article>
	)
	// 	useEffect(() => {
	// 		draw()
	// 	}, [])
	
	// 	// console.log(userData.kind)
	// 	function draw() {
	// 		let svg = d3.select(".radarChart")
	// 					.append("svg")
	// 					.attr("width", "100%")
	// 					.attr("height", "100%")
	
	// 		let radialScale = d3.scaleLinear()
	// 							.domain([0, 250])
	// 							.range([0, 90])
	
	// 		let ticks = [25, 75, 125, 175, 225]
	
	// 		ticks.forEach(t =>
	// 			svg.append("circle")
	// 			.attr("cx", 129)
	// 			.attr("cy", 130)
	// 			.attr("fill", "none")
	// 			.attr("stroke", "gray")
	// 			.attr("r", radialScale(t))
	// 		);
	
	// 		function angleToCoordinate(angle, value){
	// 			let x = Math.cos(angle) * radialScale(value);
	// 			let y = Math.sin(angle) * radialScale(value);
	// 			return {"x": Math.round(129 + x), "y": Math.round(130 - y)};
	// 		}
	
	// 		// const userDataKind = userData.kind
			
	// 		var userDataKind = Object.keys(userData.kind).map(function(cle) {
	// 			return [Number(cle), userData.kind[cle]];
	// 		});
			
	// 		// console.log(userDataKind)
	// 		let line = d3.line()
	// 		.x(d => d.x)
	// 		.y(d => d.y);
	
	// 		for (var i = 0; i < userDataKind.length; i++) {
	// 			// console.log(userDataKind[i][1])
	// 			let ft_name = userDataKind[i][1];
	// 			let angle = (Math.PI / 2) + (2 * Math.PI * i / userDataKind.length);
	// 			// console.log(angle)
	// 			let line_coordinate = angleToCoordinate(angle, 200);
	// 			let label_coordinate = angleToCoordinate(angle, 220);
	
	// 			// console.log(line_coordinate, label_coordinate)
			
	// 			//draw axis line
	// 			svg.append("line")
	// 			.attr("x1", 129)
	// 			.attr("y1", 130)
	// 			.attr("x2", line_coordinate.x)
	// 			.attr("y2", line_coordinate.y)
	// 			.attr("stroke","black");
			
	// 			//draw axis label
	// 			svg.append("text")
	// 			.attr("x", label_coordinate.x)
	// 			.attr("y", label_coordinate.y)
	// 			.text(ft_name);
	// 		}
	
			
	// 		let colors = ["darkorange", "gray", "navy"];
	// // console.log(userData.data)
	
	// 		function getPathCoordinates(data_point){
	
	// 			let coordinates = [];
	// 			for (var i = 0; i < userDataKind.length; i++){
	// 				let ft_name = userDataKind[i][0];
	// 				let ft_name2 = parseInt(ft_name, 10)
	// 				// console.log(ft_name)
	// 				// console.log(ft_name2)
	// 				// console.log(ft_name)
	// 				let angle = (Math.PI / 2) + (2 * Math.PI * i / userDataKind.length);
	// 				// console.log(angle)
	// 				// console.log(angleToCoordinate(angle, 100))
	// 				coordinates.push(angleToCoordinate(angle, data_point.value));
	// 				// console.log(data_point.value)
	// 			}
	// 			// console.log(coordinates)
	// 			return coordinates;
	// 		}
			
	// 		for (var j = 0; j < userData.data.length; j ++){
	// 			let d = userData.data[j];
	// 			// console.log(d)
	// 			// let color = colors[i];
	// 			let coordinates = getPathCoordinates(d);
				
	// 			//draw the path element
	// 			svg.append("path")
	// 			.datum(coordinates)	
	// 			.attr("d",line)
	// 			.attr("stroke-width", 3)
	// 			.attr("stroke", "red")
	// 			.attr("fill", "black")
	// 			.attr("stroke-opacity", 1)
	// 			.attr("opacity", 0.5);
	// 		}
	// 		// ticks.forEach(t =>
	// 		// 	svg.append("text")
	// 		// 	.attr("x", 305)
	// 		// 	.attr("y", 300 - radialScale(t))
	// 		// 	.text(function(d, i) {return d.kind})
	// 		// );
	// 	}
}
RadarCharts.propTypes = {
	data: PropTypes.object.isRequired,
}