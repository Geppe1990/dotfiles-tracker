// src/components/App.tsx
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import FileEditor from './FileEditor';

const App: React.FC = () => {
	const [dotfiles, setDotfiles] = useState<string[]>([]);
	const [currentFile, setCurrentFile] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [filePath, setFilePath] = useState<string>('');

	useEffect(() => {
		const fetchDotfiles = async () => {
			const files = await window.electron.readDotfiles();
			setDotfiles(files);
		};
		fetchDotfiles();
	}, []);

	const openFile = async (file: string) => {
		const { path, content } = await window.electron.readDotfile(file);
		setCurrentFile(file);
		setFilePath(path);
		setContent(content);
	};

	const saveFile = async () => {
		await window.electron.saveDotfile(currentFile, content);
		alert('File salvato con successo!');
	};

	return (
		<div>
			<h1 className="title is-1">Dotfiles Tracker</h1>
			<div className="container">
				<Sidebar dotfiles={dotfiles} onSelectFile={openFile} />
				<FileEditor
					currentFile={currentFile}
					content={content}
					filePath={filePath}
					setContent={setContent}
					saveFile={saveFile}
				/>
			</div>
		</div>
	);
};

export default App;
