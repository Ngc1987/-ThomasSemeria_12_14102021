import React from 'react'
import "./Nutriment.scss"
import apple from "../../assets/apple.svg"
import burger from "../../assets/burger.svg"
import chicken from "../../assets/chicken.svg"
import fire from "../../assets/fire.svg"

export default function Nutriment(props) {
	// console.log(props.logo)
	return (
		<article className="nutriment" >
		<div className={props.nutriment === "Calories" ? "nutriment__pic red" :
					props.nutriment === "Glucides" ? "nutriment__pic yellow" :
					props.nutriment === "Protéines" ? "nutriment__pic blue" :
					"nutriment__pic pink"
					
		}>
			<img src={props.nutriment === "Calories" ? fire :
					props.nutriment === "Glucides" ? apple :
					props.nutriment === "Protéines" ? chicken :
					burger
					} alt="" />

		</div>

			<div className="nutriment-info">
				<h3>{props.nutriment === "Calories" ? props.quantity + "kCal" : props.quantity + "g"}</h3>
				<p>{props.nutriment}</p>
			</div>
		</article>
	)
}
