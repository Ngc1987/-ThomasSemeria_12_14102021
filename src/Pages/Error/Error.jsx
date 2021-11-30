import React from 'react'
import "./Error.scss"
import {Link} from "react-router-dom"

/**
 * @component Component Error who appears when the datas are fetched but an error is occured
 */
function Error(props) {
	return (
		<section className="error404">

			{props.type === "fetchError" ?
			
				<>
					<p className="error404__number">431</p>
					<div className="error431__phrase">
						<p>Nous ne parvenons pas actuellement à récupérer les données.</p>
						<p>Vous pouvez réessayer dans quelques minutes..</p>
					</div>
				</>
			:
				<>
					<p className="error404__number">404</p>
					<div className="error404__phrase">
						<p>Oups ! La page que </p>
						<p>vous demandez n'existe pas</p>
					</div>
				</>
			}
			<Link to="/" >
				<p  className="error404__homeLink">Retourner sur la page d'accueil</p>
			</Link>
			</section>
	)
}


export default Error;