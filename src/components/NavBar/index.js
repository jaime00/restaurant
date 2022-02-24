import { Link } from 'wouter'
const image_profile = "https://assets.bizneo.com/system/images/files/013/686/817/original/Logos_Consware_Uxeware_%281%29_Mesa_de_trabajo_1.png?1611171054"

export default function NavBar({ changeMode, isDark }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
			<Link to='/'>
				<img src={image_profile} lazy="loading" width="100" height="30" className="d-inline-block align-top" alt="" />
			</Link>
			<div className="collapse navbar-collapse ml-4" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link" to='/menus'>
							Menus
						</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to='/dishes'>
							Dishes
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to='/ingredients'>
							Ingredients
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}