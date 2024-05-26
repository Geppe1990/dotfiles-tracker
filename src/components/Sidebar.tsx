// src/components/Sidebar.tsx
import React, { useState } from 'react';

interface SidebarProps {
	dotfiles: string[];
	onSelectFile: (file: string) => void;
}

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

	return (
		<div className="sidebar">
			<ul>
				{dotfiles.map((file) => (
					<li
						key={file}
						onClick={() => handleClick(file)}
						onMouseEnter={() => handleMouseEnter(file)}
						onMouseLeave={handleMouseLeave}
						className={`${activeFile === file || hoveredFile === file ? activeCls : ''}`}
					>
						{file}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
