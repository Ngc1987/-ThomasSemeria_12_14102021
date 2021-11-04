import React, {useState} from 'react'
import "./CircleChart.scss"
import userPerf from "../../Mocks/user/18.json"
import { ResponsiveContainer ,PolarAngleAxis, RadialBarChart , RadialBar,Legend  } from 'recharts';
import PropTypes from 'prop-types'

/**
 * @param  {} {active
 * @param  {} payload
 * @param  {} data}
 * @param  {} =>{if(payload&&payload.length
 * @param  {} {return(<divclassName="custom-legend"><h1className="desc">{payload[0].value+"%"}</h1><p>devotre</p><p>objectif</p></div>
 */

const CustomizedLegend = ({ active, payload, data}) => {

	// console.log(payload, active, data)
	if (payload && payload.length) {
		return (
			<div className="custom-legend">
			  <h1 className="desc">{payload[0].value + "%"}</h1>
			  <p>de votre</p>
			  <p>objectif</p>
			</div>
		)
	}
  
	return null;
  };

export default function CircleChart(props) {

	const userDatas = props.data.data
	// eslint-disable-next-line no-unused-vars
	const [data, setScore] = useState(userDatas)
	// console.log(props, data)

	let score = [{"name": "score", "value": (data.todayScore * 100)}]

	return (
		<article className="circleChart">
		<h1 className="score" >Score</h1>
		<div className="path"></div>


		<ResponsiveContainer>
		
			<RadialBarChart 
				width={"100%"} 
				height={"100%"} 
				innerRadius="72%" 
				outerRadius="85%" 
				data={score} 
				startAngle={90} 
				endAngle={450}
				
				>
				<PolarAngleAxis 
				type="number" 
				domain={[0, 100]} 
				dataKey={'value'} 
				angleAxisId={0} 
				tick={false} 
				
				// radius={70}
				/>
				{/* <Label /> */}
				 <RadialBar 
				minAngle={5} 
				// label={<CustomizedToolTip/>}
				// formatter={scoreDiv}
				// label={scoreDiv}
				fill="#E60000"
				// label={{ fill: '#f00', position: 'center' }} 	
				background={{fill: "#fff"}}
				position="center"
				clockWise={true} 
				dataKey="value"
				legendType="square"
				data={score}
				cornerRadius="50%"
				 />
				<Legend 
				iconSize={10} 
				width={20} 
				height={20} 
				layout='vertical' 
				verticalAlign='top' 
				align="center" 
				payload={score}
				content={<CustomizedLegend/>}
				/>
				{/* <Tooltip /> */}
			</RadialBarChart>

			</ResponsiveContainer>
		</article>
	)
}


CircleChart.propTypes = {
	data: PropTypes.object.isRequired,
}