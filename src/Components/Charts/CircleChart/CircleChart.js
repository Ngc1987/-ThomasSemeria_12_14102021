import React, {useState} from 'react'
import "./CircleChart.scss"
import userPerf from "../../Mocks/user/18.json"
import {Tooltip, Label, PieChart, Pie, Cell, ResponsiveContainer ,PolarAngleAxis, RadialBarChart , RadialBar,Legend  } from 'recharts';


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

export default function CircleChart() {

	const userDatas = userPerf.data
	const [data, setScore] = useState(userDatas)




	let score = [{"name": "score", "value": (data.todayScore * 100)}]

	let scoree = score[0].value
	console.log(scoree)

	// function scoreDiv(scoree) {
	// 	// return `${payload[0].value} %`
	// 	return (
	// 		<div>
	// 			<p>{scoree}</p>
	// 		</div>
	// 	)
		
	// }

	// console.log(data, score)
	return (
		<article className="circleChart">
		<h1 className="score" >Score</h1>
		<div className="path"></div>


		<ResponsiveContainer>

		{/* <PieChart width={160} height={160}>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {score.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={"red"}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart> */}
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
