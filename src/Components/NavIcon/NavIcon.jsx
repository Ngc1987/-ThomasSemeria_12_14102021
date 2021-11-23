import React from 'react'
import "./NavIcon.scss"
import PropTypes from 'prop-types'
import icons from "../../Helpers/icons"

/**
 * @component
 * Component NavIcon who contains links for differents futurs pages of the app
 */
export default function NavIcon(props) {

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