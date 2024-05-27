import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import FileEditor from './FileEditor';
import Navbar from "./Navbar";
import Settings from "./Settings";
import { loadSettings, saveSettings } from '../helpers/SettingsManager';

const App: React.FC = () => {
	const [dotfiles, setDotfiles] = useState<string[]>([]);
	const [currentFile, setCurrentFile] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [filePath, setFilePath] = useState<string>('');
	const [settings, setSettings] = useState(loadSettings());
	const [showSettings, setShowSettings] = useState(false);

	useEffect(() => {
		const fetchDotfiles = async () => {
			const files = await window.electron.readDotfiles();
			setDotfiles(files);
		};
		fetchDotfiles();
	}, []);

	const handleSaveSettings = (newSettings: any) => {
		setSettings(newSettings);
		saveSettings(newSettings);
	};

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
			<Navbar/>
			<button className="button" onClick={() => setShowSettings(true)}>Settings</button>
			<h1 className="title is-1">Dotfiles Tracker</h1>
			{showSettings ?
				<Settings settings={settings} saveSettings={handleSaveSettings} />
				:
				<div>
					<div className="columns">
						<div className="column is-one-quarter">
							<Sidebar dotfiles={dotfiles} onSelectFile={openFile}/>
						</div>
						<div className="column is-three-quarters">
							{content &&
								<FileEditor
									currentFile={currentFile}
									content={content}
									filePath={filePath}
									setContent={setContent}
									saveFile={saveFile}
								/>
							}
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default App;
