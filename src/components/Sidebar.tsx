import React from 'react';

interface SidebarProps {
	dotfiles: string[];
	onSelectFile: (file: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ dotfiles, onSelectFile }) => {
	return (
		<div className="sidebar">
			<ul>
				{dotfiles.map((file) => (
					<li key={file} onClick={() => onSelectFile(file)}>
						{file}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
