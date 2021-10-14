import React from 'react'
import "./VerticalLayout.scss"
import NavIcon from '../NavIcon/NavIcon'

export default function VerticalLayout() {
	return (
		<div className="verticalLayout">
		<div className="verticalLayout-div">
			<NavIcon pic="yoga" />
			<NavIcon pic="swim" />
			<NavIcon pic="bike" />
			<NavIcon pic="yoga" />

		</div>
			<p className="verticalLayout-text">Copyright, SportSee 2020</p>
		</div>
	)
}
