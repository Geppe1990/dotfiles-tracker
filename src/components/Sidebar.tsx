// src/components/Sidebar.tsx
import React, { useState } from 'react';
import {
	Divider,
	makeStyles,
	shorthands,
	Tab,
	TabList,
} from "@fluentui/react-components";

interface SidebarProps {
	dotfiles: string[];
	onSelectFile: (file: string) => void;
}

const useStyles = makeStyles({
	root: {
		alignItems: "flex-start",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		...shorthands.padding("0", "20px"),
		rowGap: "10px",
		flexBasis: "10%"
	},
	list: {
		display: "flex",
		flexDirection: "column"
	},
	listElement: {
		justifyContent: "flex-start"
	}
});

const Sidebar: React.FC<SidebarProps> = ({ dotfiles, onSelectFile }) => {
	const [activeFile, setActiveFile] = useState<string>('');
	const [hoveredFile, setHoveredFile] = useState<string>('');

	const handleClick = (file: string) => {
		setActiveFile(file);
		onSelectFile(file);
	};

	const handleMouseEnter = (file: string) => {
		setHoveredFile(file);
	};

	const handleMouseLeave = () => {
		setHoveredFile('');
	};

	const activeCls = "has-text-weight-bold has-background-primary has-text-white"

	const styles = useStyles();

	return (
		<div className={styles.root}>
			<div>
				<Divider>dotFiles</Divider>
				<TabList className={styles.list}>
					{dotfiles.map((file) => (
						<Tab
							className={styles.listElement}
							key={file}
							onClick={() => handleClick(file)}
							onMouseEnter={() => handleMouseEnter(file)}
							onMouseLeave={handleMouseLeave}
							value={file}
						>
							{file}
						</Tab>
					))}
				</TabList>
			</div>
		</div>
	);
};

export default Sidebar;
