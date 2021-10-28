import React, {useState} from 'react'
import "./CircleChart.scss"
import userPerf from "../../Mocks/user/12.json"
import {Tooltip, ResponsiveContainer , RadialBarChart , RadialBar,Legend  } from 'recharts';

export default function CircleChart() {

	const userDatas = userPerf.data
	const [data, setScore] = useState(userDatas)


	let score = [{"name": "score", "value": (data.todayScore * 100)}]
	console.log(data, score)
	return (
		<article className="circleChart">
			<RadialBarChart 
				width={258} 
				height={263} 
				innerRadius="10%" 
				outerRadius="80%" 
				data={score} 
				startAngle={360} 
				endAngle={0}
				>
				<RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} 
					background clockWise={true} dataKey="value" />
				{/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
				<Tooltip />
			</RadialBarChart>
		</article>
	)
}
