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
import User from "../../Models/User"



/** 
 *  This is component for Dashboard page
 * - it handles 2 stat
 * 
 * @description 
 */
export default function Dashboard() {

	const [user, setUserAllDatas] = useState({})
	const [loader, setLoader] = useState(true)

	const userId = window.location.pathname.split("/")[2];
	
	useEffect(() => {
		getUserDatas(userId)
			.then((result) => {
				let user = new User(result[0], result[1], result[2], result[3])
				setUserAllDatas(user)
				setLoader(false)
			})
			.catch(err => console.log(err))
		}, [userId])

	console.log(user)

	// let userData = user[0]
	// let activityData = user[1]
	// let sessionData = user[2]
	// let perfData = user[3]

	// console.log(activityData)

	if(loader) {
		return (<Loader />)
	}

	return (


		<>
			
			<section className="dashboard">
			{/* <p>{userDatas.location.name}</p> */}
			{/* <h2>Bonjour <em>{userDatas?.data?.userInfos?.firstName ?? "No Name"}</em></h2> */}
			<h2>Bonjour <em>{user.getFirstName()}</em></h2>
			{/* <h2>Bonjour <em>Thomas</em></h2> */}
						<p className="dashboard-text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

						
			<section className="dashboard__graphs">

				<div className="dashboard__graphs__charts">
					<BarCharts data={user.activities} />

					<div className="dashboard__graphs__charts-smalls">
						<LineChart2 data={user.sessions} />
						<RadarCharts data={user.performances} />
						<CircleChart data={user.infos}/>
					</div>
				</div>
				
				<div className="dashboard__graphs__nutriments">
					<Nutriment quantity={user.getNutriment("calorieCount")} nutriment="Calories" /> 
					<Nutriment quantity={user.getNutriment("proteinCount")} nutriment="Protéines" />
					<Nutriment quantity={user.getNutriment("carbohydrateCount")} nutriment="Glucides" />
					<Nutriment quantity={user.getNutriment("lipidCount")} nutriment="Lipides" />
				</div> 
				
			</section>
		</section>
</>
			
			
			
	)
}
