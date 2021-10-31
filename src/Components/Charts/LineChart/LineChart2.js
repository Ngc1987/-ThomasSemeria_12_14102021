import { LineChart, Line, CartesianGrid, YAxis,Tooltip  } from 'recharts';
import React, {useState} from 'react'
import "./LineChart.scss"
import userAveragSes from "../../Mocks/user/18/average-sessions"
// import CustomizedToolTip from "./CustomizedToolTip"

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
// {name: 'Page B', uv: 500, pv: 2300, amt: 2000},
// {name: 'Page C', uv: 300, pv: 1500, amt: 3000},
// ];

userAveragSes.data.sessions.push({day: 1, sessionLength: 30})
	userAveragSes.data.sessions.unshift({day: 1, sessionLength: 30})


	
// const getIntroOfPage = (label) => {
// 	if (label === 'Page A') {
// 	  return "Page A is about men's clothing";
// 	}
// 	if (label === 'Page B') {
// 	  return "Page B is about women's dress";
// 	}
// 	if (label === 'Page C') {
// 	  return "Page C is about women's bag";
// 	}
// 	if (label === 'Page D') {
// 	  return 'Page D is about household goods';
// 	}
// 	if (label === 'Page E') {
// 	  return 'Page E is about food';
// 	}
// 	if (label === 'Page F') {
// 	  return 'Page F is about baby food';
// 	}
// 	return '';
//   };
  
  const CustomizedToolTip = ({ active, payload, label }) => {

	// console.log(label, payload, active)
	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip">
		  <p className="desc">{payload[0].payload.sessionLength + " mn"}</p>
		</div>
	  );
	}
  
	return null;
  };

export default function LineChart2(props) {

	const sessionDatas = props.data.data.sessions

	console.log(props, sessionDatas)
	// eslint-disable-next-line no-unused-vars
	const [sessionData, setSessionData] = useState(sessionDatas)

	
	// let data = userData

	
	// console.log(data, userData)

	return (
		<div className="lineChart" >
			<LineChart width={292} height={210} data={sessionData} margin={{ top: 80, right: 16, bottom: 0, left: -16 }}>
				<Line 
				type="natural" 
				dataKey="sessionLength" 
				stroke="#ffffffcc" 
				dot={false} 
				name=" "
				unit=" mn"
				strokeWidth={3}
				legendType="line"
				activeDot={{ stroke: '#ffffff6e', strokeWidth: 1}}
				// offset={false}
				
				/>
				<CartesianGrid stroke="#ccc" strokeDasharray="3 3"  horizontal="" vertical=""  />
				{/* <XAxis dataKey="day" padding={{ left: 30, right: 30 }} /> */}
				<YAxis 
				hide={true}
				padding={{ bottom: 25 }}
				// type="number" 
				domain={['dataMin', 'dataMax']}
				 />
				<Tooltip
				separator=""	
				itemStyle={{
					color: 'black',
					fontWeight: "bold"
					}}
				label={sessionData.sessionLength}
				content={<CustomizedToolTip/>}
				cursor={false}
				 />

			</LineChart>

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

