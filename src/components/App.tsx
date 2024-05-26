// src/components/Main.tsx
import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';

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
		Prism.highlightAll(); // Evidenzia il codice
	};

	const saveFile = async () => {
		await window.electron.saveDotfile(currentFile, content);
		alert('File salvato con successo!');
	};

	useEffect(() => {
		Prism.highlightAll(); // Evidenzia il codice quando il contenuto cambia
	}, [content]);

	return (
		<div>
			<h1 className="title is-1">Dotfiles Tracker</h1>
			<div className="container">
				<div className="sidebar">
					<ul>
						{dotfiles.map((file) => (
							<li key={file} onClick={() => openFile(file)}>
								{file}
							</li>
						))}
					</ul>
				</div>
				<div id="editor-container">
					<h2 className="title is-2 mb-6" id="file-title">{currentFile}</h2>
					{content &&
						<>
							<pre className="file-path mb-6">{filePath}</pre>
							<textarea
								className="textarea mb-6"
								id="editor"
								value={content}
								onChange={(e) => setContent(e.target.value)}
							/>
							<pre className="mb-6" id="highlighted-code"><code className="language-bash">{content}</code></pre>
							<button className="button is-primary" id="save-button" onClick={saveFile}>
								Save
							</button>
						</>
					}
				</div>
			</div>
		</div>
	);
};

export default App;
