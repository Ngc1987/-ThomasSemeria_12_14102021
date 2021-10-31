// import React, {useState, useEffect } from 'react'
import "./Dashboard.scss"
import BarCharts from '../../Components/Charts/BarChart/BarChart'
import LineChart2 from '../../Components/Charts/LineChart/LineChart2'
import RadarCharts from '../../Components/Charts/RadarChart/RadarChart'
import CircleChart from '../../Components/Charts/CircleChart/CircleChart'
import Nutriment from '../../Components/Nutriment/Nutriment'
import { getUserDatas } from "../../CallsApis/requests";
import {useState, useEffect} from 'react'
import Loader from "../../Components/Loader/Loader"
// import { useEffect } from 'react/cjs/react.development'


// console.log(userId)

export default function Dashboard() {

	const [userAllDatas, setUserAllDatas] = useState({})
	const [loader, setLoader] = useState(true)
	const userId = window.location.pathname.split("/")[2];
	
	useEffect(() => {
		

		getUserDatas(userId)
			.then((result) => {
				setUserAllDatas(result)
				setLoader(false)
			})
		}, [userId])

	// console.log(userDatas)

	let userData = userAllDatas[0]
	let activityData = userAllDatas[1]
	let sessionData = userAllDatas[2]
	let perfData = userAllDatas[3]

	console.log(activityData)

	if(loader) {
		return (<Loader />)
	}
	return (


		<>
			
			<section className="dashboard">
			{/* <p>{userDatas.location.name}</p> */}
			{/* <h2>Bonjour <em>{userDatas?.data?.userInfos?.firstName ?? "No Name"}</em></h2> */}
			<h2>Bonjour <em>{userData.data.userInfos.firstName}</em></h2>
			{/* <h2>Bonjour <em>Thomas</em></h2> */}
						<p className="dashboard-text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

						
			<section className="dashboard__graphs">

				<div className="dashboard__graphs__charts">
					<BarCharts data={activityData} />

					<div className="dashboard__graphs__charts-smalls">
						<LineChart2 data={sessionData} />
						<RadarCharts data={perfData} />
						<CircleChart data={userData}/>
					</div>
				</div>
				
				<div className="dashboard__graphs__nutriments">
					<Nutriment quantity={userData.data.keyData.calorieCount} nutriment="Calories" /> 
					<Nutriment quantity={userData.data.keyData.proteinCount} nutriment="Protéines" />
					<Nutriment quantity={userData.data.keyData.carbohydrateCount} nutriment="Glucides" />
					<Nutriment quantity={userData.data.keyData.lipidCount} nutriment="Lipides" />
				</div> 
				
			</section>
		</section>
</>
			
			
			
	)
}
