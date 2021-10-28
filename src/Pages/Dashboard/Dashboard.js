// import React, {useState, useEffect } from 'react'
import "./Dashboard.scss"
import BarCharts from '../../Components/Charts/BarChart/BarChart'
import LineChart2 from '../../Components/Charts/LineChart/LineChart2'
import RadarCharts from '../../Components/Charts/RadarChart/RadarChart'
import CircleChart from '../../Components/Charts/CircleChart/CircleChart'
import Nutriment from '../../Components/Nutriment/Nutriment'
import useUserDatas from '../../Hooks/useUserDatas'
import { getUserDatas } from "../../CallsApis/requests";
import {useState, useEffect, useMemo } from 'react'
import Loader from "../../Components/Loader/Loader"
// import { useEffect } from 'react/cjs/react.development'

const userId = window.location.pathname.split("/")[2];

export default function Dashboard() {
	// const [userDatas, status] = useUserDatas()

	const [userDatas, setUserDatas] = useState([])
	const [loader, setLoader] = useState(true)

	// const url =  getDatas(userId)

	// console.log(url)
	useEffect(() => {
		

		fetch(getUserDatas(userId))
			.then((response) => {
				// console.log(response)
				return response.json()
			})
			.then((result) => {
				// console.log(result)
				setUserDatas(result)
				setLoader(false)
			})
	}, [])

// console.log(userDatas)
	if(loader) {
		return (<Loader />)
	}
	return (


		<>
			
			<section className="dashboard">
			{/* <p>{userDatas.location.name}</p> */}
			<h2>Bonjour <em>{userDatas?.data?.userInfos?.firstName ?? "No Name"}</em></h2>
			{/* <h2>Bonjour <em>{userDatas.data.userInfos.firstName}</em></h2> */}
			{/* <h2>Bonjour <em>Thomas</em></h2> */}
						<p className="dashboard-text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

						
			<section className="dashboard__graphs">

				<div className="dashboard__graphs__charts">
					<BarCharts />

					<div className="dashboard__graphs__charts-smalls">
						<LineChart2 />
						<RadarCharts />
						<CircleChart />
					</div>
				</div>
				
				<div className="dashboard__graphs__nutriments">
					{/* <Nutriment  nutriment="Calories" />
					<Nutriment  nutriment="Protéines" />
					<Nutriment  nutriment="Glucides" />
					<Nutriment  nutriment="Lipides" /> */}
					<Nutriment quantity={userDatas.data.keyData.calorieCount} nutriment="Calories" /> 
					<Nutriment quantity={userDatas.data.keyData.proteinCount} nutriment="Protéines" />
					<Nutriment quantity={userDatas.data.keyData.carbohydrateCount} nutriment="Glucides" />
					<Nutriment quantity={userDatas.data.keyData.lipidCount} nutriment="Lipides" />
				</div> 
				
			</section>
		</section>
</>
			
			
			
	)
}
