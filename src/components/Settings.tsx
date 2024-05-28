import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { updateSettings } from '../settingsSlice';
import {RootState} from "../store";

interface SettingsProps {
	setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<SettingsProps> = ({ setShowSettings }) => {
	const dispatch = useDispatch();
	const settings = useSelector((state: RootState) => state.settings);
	const [theme, setTheme] = useState(settings.theme || 'light');
	const [fontSize, setFontSize] = useState(settings.fontSize || 14);
	const [syntax, setSyntax] = useState(settings.syntax || 'bash');
	const [fontFamily, setFontFamily] = useState(settings.fontFamily || 'monospace');
	const [tabSize, setTabSize] = useState(settings.tabSize || 4);
	const [showLineNumbers, setShowLineNumbers] = useState(settings.showLineNumbers !== undefined ? settings.showLineNumbers : true);

	const handleSave = () => {
		const newSettings = { theme, fontSize, syntax, fontFamily, tabSize, showLineNumbers };
		dispatch(updateSettings(newSettings));
		setShowSettings(false);
	};

	return (
		<div>
			<div onClick={() => setShowSettings(false)}></div>
			<div>
				<div>
					<h2>Settings</h2>
					<div>
						<label>Theme</label>
						<div>
							<div>
								<select value={theme} onChange={(e) => setTheme(e.target.value)}>
									<option value="light">Light</option>
									<option value="dark">Dark</option>
								</select>
							</div>
						</div>
					</div>
					<div>
						<label>Font Size</label>
						<p >
							<input
								type="number"
								value={fontSize}
								onChange={(e) => setFontSize(parseInt(e.target.value))}
							/>
						</p>
					</div>
					<div>
						<label>Syntax</label>
						<div>
							<div>
								<select value={syntax} onChange={(e) => setSyntax(e.target.value)}>
									<option value="bash">Bash</option>
									<option value="javascript">JavaScript</option>
									<option value="python">Python</option>
									<option value="html">HTML</option>
								</select>
							</div>
						</div>
					</div>
					<div>
						<label>Font Family</label>
						<p>
							<input
								type="text"
								value={fontFamily}
								onChange={(e) => setFontFamily(e.target.value)}
							/>
						</p>
					</div>
					<div>
						<label>Tab Size</label>
						<p >
							<input
								type="number"
								value={tabSize}
								onChange={(e) => setTabSize(parseInt(e.target.value))}
							/>
						</p>
					</div>
					<div>
						<label>Show Line Numbers</label>
						<p>
							<input
								type="checkbox"
								checked={showLineNumbers}
								onChange={(e) => setShowLineNumbers(e.target.checked)}
							/>
						</p>
					</div>
					<button onClick={handleSave}>Save</button>
				</div>
			</div>
			<button aria-label="close" onClick={() => setShowSettings(false)}></button>
		</div>
	);
};

export default Settings;
