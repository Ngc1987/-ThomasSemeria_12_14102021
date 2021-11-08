import React from 'react'
import "./NavIcon.scss"
import PropTypes from 'prop-types'

let bike = process.env.PUBLIC_URL + "/assets/bike.svg"
let dumbbell = process.env.PUBLIC_URL + "/assets/dumbbell.svg"
let yoga = process.env.PUBLIC_URL + "/assets/yoga.svg"
let swim = process.env.PUBLIC_URL + "/assets/swim.svg"

export default function NavIcon(props) {
	// console.log(props)
	return (
		<div className="navIcom">
			<img src={props.pic === "bike" ? bike :
					props.pic === "dumbbell" ? dumbbell :
					props.pic === "yoga" ? yoga :
					swim
					} alt="" />
		</div>
	)
}

NavIcon.propTypes = {
	pic: PropTypes.string.isRequired,
}