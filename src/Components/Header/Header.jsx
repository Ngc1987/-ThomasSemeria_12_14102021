import React from 'react'
import {Link} from "react-router-dom"
import "./Header.scss"

let headerLogo = process.env.PUBLIC_URL + "/assets/headerLogo.svg"

/**
 * @component
 * Component Header for all pages. Contains the logo and the links for pages Home, Profil, Settings and Community
 */
export default function Header() {

	return (

		<header>

			<div className="header__">
				<div className="header__logo">
					<img src={headerLogo} alt="" />
				</div>
				<h1 className="header__title">Sportsee</h1>
			</div>

			<Link to="/" >
				<p>Accueil</p>
			</Link>

			<Link to="/profil" >
				<p>Profil</p>
			</Link>

			<Link to="/settings" >
				<p>Réglage</p>
			</Link>

			<Link to="/community" >
				<p>Communauté</p>
			</Link>

		</header>

	)
}

