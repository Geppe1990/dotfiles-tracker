import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import FileEditor from './FileEditor';
import Navbar from "./Navbar";
import {makeStyles} from "@fluentui/react-components";
import '@fontsource/fira-code';


const useStyles = makeStyles({
	root: {
		fontFamily: "Fira Code', monospace",
		margin: "20px"
	},
	contentWrapper: {
		display: "flex"
	}
});


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

	const styles = useStyles();

	return (
		<div className={styles.root}>
			{/*<div className={settings.theme === 'dark' ? 'dark-mode' : 'light-mode'}>*/}
			<Navbar />
			<>
				<div className={styles.contentWrapper}>
					<Sidebar dotfiles={dotfiles} onSelectFile={openFile}/>
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
			</>
		</div>
	);
};

export default App;
