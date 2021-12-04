import { LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip  } from 'recharts';
import React, {useState, useRef, useEffect} from 'react'
import "./SessionChart.scss"
import PropTypes from 'prop-types'

/**
 * Format the box who appears on hover on the Line Session Chart
 * @param  {} active true if the box appears
 * @param  {} payload datas we need to take to show informations on the tooltip
 * 
 */
const CustomizedToolTip = ({ active, payload }) => {

	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip">
		  <p className="desc">{payload[0].payload.sessionLength + " mn"}</p>
		</div>
	  );
	}
  
	return null;
};



/**
 * @component
 * @param  {object} props Sessions datas of the user
 * @returns Component who show evolution of the session length for each day of the week on a line chart
 */
export default function SessionChart(props) {

	// Take the datas we need on the props
	const sessionDatas = props.data.sessions
	// eslint-disable-next-line no-unused-vars
	const [sessionData, setSessionData] = useState(sessionDatas)
	// const [divHover, setDivHover] = useState()

	// To have an effect who show the line length from start to end of the div, i put another day
	// on the start and the end of my days datas. The line start before the first day and ending after 
	// the last day on the chart
	sessionData.push({day: 1, sessionLength: 30})
	sessionData.unshift({day: 1, sessionLength: 30})

	const hoverDiv = useRef();
	
	// useEffect(() => {
	// 	const refHoverDif = hoverDiv.current;
	// 	setDivHover(refHoverDif)
	// 	console.log(refHoverDif)
	// })

	// const dynamicBackground = (e) => {
	// 	console.log(e);
	// 	// divHover.style.width = `${300 - e.nativeEvent.layerX}px`
	// }

	return (

		<div className="lineChart" 
		// onMouseMove={dynamicBackground} 
		>
			
			<LineChart 
			width={292} 
			height={210} 
			data={sessionData} 
			margin={{ top: 80, right: 16, bottom: 0, left: -16 }}
			>
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
				/>

				<CartesianGrid 
				stroke="#ccc" 
				strokeDasharray="3 3"  
				horizontal="" 
				vertical="" 
				/>

				<XAxis 
				dataKey="day" 
				padding={{ left: -30, right: -30 }} 
				hide={true} 
				/>
				
				<YAxis 
				hide={true}
				padding={{ bottom: 25 }}
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
			<div ref={hoverDiv} className="lineChart-hoverDiv"></div>
		</div>
	)
}

SessionChart.propTypes = {
	data: PropTypes.object.isRequired,
}
