import React from "react";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface NavbarProps {
	setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProps> = ({ setShowSettings }) => {
	return (
		<nav className="navbar is-flex is-align-items-center" role="navigation" aria-label="main navigation">
			<h1 className="title is-4 mb-0">Dotfiles tracker</h1>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<a className="navbar-item">
						Home
					</a>

					<a className="navbar-item">
						Documentation
					</a>

					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">
							More
						</a>

						<div className="navbar-dropdown">
							<a className="navbar-item">
								About
							</a>
							<a className="navbar-item is-selected">
								Jobs
							</a>
							<a className="navbar-item">
								Contact
							</a>
							<hr className="navbar-divider"/>
							<a className="navbar-item">
								Report an issue
							</a>
						</div>
					</div>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<button className="button is-primary has-text-white" onClick={() => setShowSettings(true)}>
								<FontAwesomeIcon icon={faGear} />&nbsp;
								Settings
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
