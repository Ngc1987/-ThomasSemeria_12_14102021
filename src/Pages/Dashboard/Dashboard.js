import React from 'react'
import "./Dashboard.scss"
import BarChart from '../../Components/Charts/BarChart/BarChart'
import LineChart from '../../Components/Charts/LineChart/LineChart'
import RadarChart from '../../Components/Charts/RadarChart/RadarChart'
import CircleChart from '../../Components/Charts/CircleChart/CircleChart'
import Nutriment from '../../Components/Nutriment/Nutriment'
import { getUserData } from '../../Components/GetDatas/GetDatas'
import {useState } from 'react'
import { useEffect } from 'react/cjs/react.development'



export default function Dashboard() {



	const [userDatas, setUserDatas] = useState()
	

    useEffect(() => {
		const userId = window.location.pathname.split("/")[2]
		// console.log(userId)

        const url = `/user/${userId}.json`;
		// console.log(url)

        const fetchData = async () => {
            try {
				
                const response = await fetch(url);
				console.log(response)
                const json = await response.json();
				console.log(json.data)
                setUserDatas(json.data)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
	
	console.log(userDatas)
	// const userId = window.location.pathname.substring(6)
	// const user = getUserData(userId)
	

	return (
		<section className="dashboard">
			<h2>Bonjour <em>{userDatas.userInfos.firstName}</em></h2>
			<p className="dashboard-text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

			<section className="dashboard__graphs">

				<div className="dashboard__graphs__charts">
					<BarChart />

					<div className="dashboard__graphs__charts-smalls">
						<LineChart />
						<RadarChart />
						<CircleChart />
					</div>
				</div>
				
				<div className="dashboard__graphs__nutriments">
					<Nutriment quantity={userDatas.keyData.calorieCount} nutriment="Calories" />
					<Nutriment quantity={userDatas.keyData.proteinCount} nutriment="Protéines" />
					<Nutriment quantity={userDatas.keyData.carbohydrateCount} nutriment="Glucides" />
					<Nutriment quantity={userDatas.keyData.lipidCount} nutriment="Lipides" />
				</div>

			</section>

			
		</section>
	)
}
