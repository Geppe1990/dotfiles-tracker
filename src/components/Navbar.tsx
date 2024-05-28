import React from "react";
import {Button, makeStyles} from "@fluentui/react-components";
import { SettingsRegular } from "@fluentui/react-icons";

interface NavbarProps {
	setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "space-between",
		paddingBottom: "50px",
		alignItems: "center"
	}
});

const Navbar: React.FC<NavbarProps> = ({ setShowSettings }) => {
	const styles = useStyles();

	return (
		<nav role="navigation" aria-label="main navigation" className={styles.root}>
			<h1>Dotfiles tracker</h1>
			<div>
				<Button onClick={() => setShowSettings(true)} appearance="primary">
					<SettingsRegular />&nbsp;
					Settings
				</Button>
			</div>
		</nav>
	)
}

export default Navbar;
