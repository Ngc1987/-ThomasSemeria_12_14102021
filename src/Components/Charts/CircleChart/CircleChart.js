import React, {useState} from 'react'
import "./CircleChart.scss"
import userPerf from "../../Mocks/user/12.json"
import {Tooltip, ResponsiveContainer , RadialBarChart , RadialBar,Legend  } from 'recharts';

export default function CircleChart() {

	const userDatas = userPerf.data
	const [data, setScore] = useState(userDatas)


	let score = [{"name": "score", "value": (data.todayScore * 100)},
	{"name": "score", "value": 6},
	{"name": "score", "value": 50}]
	// console.log(data, score)
	return (
		<article className="circleChart">
			<RadialBarChart 
				width={258} 
				height={263} 
				innerRadius="45%" 
				outerRadius="75%" 
				data={score} 
				startAngle={90} 
				endAngle={450}
				>
				<RadialBar minAngle={5} label={{ fill: '#666', position: 'center' }} 
					background clockWise={true} dataKey="value" />
				{/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
				<Tooltip />
			</RadialBarChart>
		</article>
	)
}
