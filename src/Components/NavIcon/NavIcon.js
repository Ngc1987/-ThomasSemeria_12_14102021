import React from 'react'
import "./NavIcon.scss"
import bike from "../../assets/bike.svg"
import dumbbell from "../../assets/dumbbell.svg"
import yoga from "../../assets/yoga.svg"
import swim from "../../assets/swim.svg"
import PropTypes from 'prop-types'


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