// import React, {useState, useEffect } from 'react'
import "./Dashboard.scss";
import ActivityChart from "../../Components/Charts/BarChart/ActivityChart";
// import SessionChart from '../../Components/Charts/LineChart/SessionChart';
import SessionChartD3 from "../../Components/Charts/LineChart/SessionChartD3";
import PerformancesChart from '../../Components/Charts/RadarChart/PerformancesChart';
import ScoreChart from '../../Components/Charts/CircleChart/ScoreChart';
import Nutriment from '../../Components/Nutriment/Nutriment';
import { getUserDatas } from "../../CallsApis/requests";
import {useState, useEffect} from 'react';
import Loader from "../../Components/Loader/Loader";
import Error from "../Error/Error";
import User from "../../Models/User";


/** 
 * @component
 * @namespace Dashboard
 * 
 * @description This is component for Dashboard page, it handles 3 states (user => datas of the user, loader => if true, Loader component is rendered, 
 *   error => if true, Error component is rendered)
 * @returns If loader and error are false, the Dashboard is rendered, with first name, nutriments and some charts with fetched informations of the user
 * 
 */
function Dashboard() {

	const [user, setUserAllDatas] = useState({})
	const [userSessions, setUserSessions] = useState({})
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState(null)
	// User Id, taking from the url
	const userId = window.location.pathname.split("/")[2];
	console.log(userId)
	// let userSessions = user.sessions.sessions
	console.log(userSessions)
	// Array.map(userSessionsApi.data.sessions, day => { day.sessionLength })
	
	useEffect(() => {
		getUserDatas(userId)
			.then((result) => {
				let user = new User(result[0], result[1], result[2], result[3])
				let userSess = user.sessions.sessions
				const userSesses = [...userSess].map((day) => day.sessionLength)
				console.log(userSesses)
				setUserAllDatas(user)
				setUserSessions(userSesses)
				setIsLoaded(true)
			})
			.catch(err => {
				setError(true)
				setIsLoaded(true)
			})
		}, [userId])

	if(error) {
		return (
		<Error type="fetchError"/>
		)
	}
	if(!isLoaded) {
		return (<Loader />)
	}

	return (
		<>
			<section className="dashboard">

				<h2>Bonjour <em>{user.getFirstName()}</em></h2>
				<p className="dashboard-text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
		
				<section className="dashboard__graphs">

					<div className="dashboard__graphs__charts">

						<ActivityChart data={user.activities} />

						<div className="dashboard__graphs__charts-smalls">
							<SessionChartD3 data={user} sessions={userSessions} />
							<PerformancesChart data={user.performances} />
							<ScoreChart data={user.infos}/>
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

Dashboard.propTypes = {

}


export default Dashboard;