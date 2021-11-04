import React, { useState} from 'react'
import "./BarChart.scss"
import userActivity from "../../Mocks/user/18/activity"
import PropTypes from 'prop-types'
import {Tooltip, ResponsiveContainer, BarChart , CartesianGrid, XAxis, YAxis, Bar} from 'recharts';
// import userAveragSes2 from "../../Mocks/user/12"

const CustomizedToolTip = ({ active, payload }) => {

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

export default function BarCharts(props) {
	
	console.log(props)
	let activityDatas = props.data.data.sessions
	const [activityData, setUserData] = useState(activityDatas)

	const formatXAxis = (tickItem, i) => {
		// tickItem.style.fontSize = "2rem"
		return i + 1
	  }
	
	return (
		<article className="barChart" >

			<p className="barChart-title" >Activité quotidienne</p>
			<ResponsiveContainer >

				<BarChart width={"100%"} height={"40%"} data={activityData}
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
					label={activityData}
					cursor={{fill: "rgba(0,0,0,0.15)"}}
					content={<CustomizedToolTip/>}
					offset={35}
					//  viewBox={{x: 50, y: 50, width: 50, height: 400}} 

					 />
					{/* <Legend 
					iconType="circle" 
					label={activityData}
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
}


BarCharts.propTypes = {
	data: PropTypes.object.isRequired,
}