import React from 'react'
import "./Dashboard.scss"
import BarChart from '../../Components/Charts/BarChart/BarChart'
import LineChart from '../../Components/Charts/LineChart/LineChart'
import RadarChart from '../../Components/Charts/RadarChart/RadarChart'
import CircleChart from '../../Components/Charts/CircleChart/CircleChart'
import Nutriment from '../../Components/Nutriment/Nutriment'


export default function Dashboard() {
	return (
		<section className="dashboard">
			<h2>Bonjour <em>Thomas</em></h2>
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
					<Nutriment quantity="1,930kCal" nutriment="Calories" />
					<Nutriment quantity="155g" nutriment="Protéines" />
					<Nutriment quantity="290g" nutriment="Glucides" />
					<Nutriment quantity="50g" nutriment="Lipides" />
				</div>

			</section>

			
		</section>
	)
}
