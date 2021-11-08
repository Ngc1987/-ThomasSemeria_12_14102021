import React from 'react'
import "./Nutriment.scss"
import PropTypes from 'prop-types'

let apple = process.env.PUBLIC_URL + "/assets/apple.svg"
let burger = process.env.PUBLIC_URL + "/assets/burger.svg"
let chicken = process.env.PUBLIC_URL + "/assets/chicken.svg"
let fire = process.env.PUBLIC_URL + "/assets/fire.svg"

export default function Nutriment(props) {
	// console.log(props)
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

Nutriment.propTypes = {
	quantity: PropTypes.number.isRequired,
	nutriment: PropTypes.string.isRequired
}