import React from 'react'
import "./NavIcon.scss"
import PropTypes from 'prop-types'
import icons from "../../Helpers/icons"




export default function NavIcon(props) {
	// console.log(props)
	return (
		<div className="navIcon">
			<img src={
				icons[props.pic]
					} alt="Icone" />
		</div>
	)
}

NavIcon.propTypes = {
	pic: PropTypes.string.isRequired,
}