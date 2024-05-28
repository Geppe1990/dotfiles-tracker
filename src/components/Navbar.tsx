import React from "react";
import {
	Button,
	Dialog,
	DialogBody,
	DialogSurface,
	DialogTitle,
	DialogTrigger,
	makeStyles
} from "@fluentui/react-components";
import { SettingsRegular } from "@fluentui/react-icons";
import Settings from "./Settings";

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "space-between",
		paddingBottom: "50px",
		alignItems: "center"
	}
});

const Navbar: React.FC = () => {
	const styles = useStyles();

	return (
		<nav role="navigation" aria-label="main navigation" className={styles.root}>
			<h1>Dotfiles tracker</h1>
			<div>
				<Dialog>
					<DialogTrigger disableButtonEnhancement>
						<Button appearance="primary"><SettingsRegular />&nbsp;Settings</Button>
					</DialogTrigger>
					<DialogSurface>
						<DialogBody>
							<DialogTitle>Settings</DialogTitle>
							<Settings />
						</DialogBody>
					</DialogSurface>
				</Dialog>

			</div>
		</nav>
	)
}

export default Navbar;
