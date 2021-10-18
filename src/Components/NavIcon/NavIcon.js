import React from 'react'
import "./NavIcon.scss"
import bike from "../../assets/bike.svg"
import dumbbell from "../../assets/dumbbell.svg"
import yoga from "../../assets/yoga.svg"
import swim from "../../assets/swim.svg"

export default function NavIcon(props) {
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
