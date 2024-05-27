import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSettings } from '../settingsSlice';

interface SettingsProps {
	settings: any;
	setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<SettingsProps> = ({ settings, setShowSettings }) => {
	const dispatch = useDispatch();
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
		<div className="modal is-active">
			<div className="modal-background" onClick={() => setShowSettings(false)}></div>
			<div className="modal-content">
				<div className="box">
					<h2 className="title is-2">Settings</h2>
					<div className="field">
						<label className="label">Theme</label>
						<div className="control">
							<div className="select">
								<select value={theme} onChange={(e) => setTheme(e.target.value)}>
									<option value="light">Light</option>
									<option value="dark">Dark</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Font Size</label>
						<p className="control is-inline-block">
							<input
								type="number"
								className="input"
								value={fontSize}
								onChange={(e) => setFontSize(parseInt(e.target.value))}
							/>
						</p>
					</div>
					<div className="field">
						<label className="label">Syntax</label>
						<div className="control">
							<div className="select">
								<select value={syntax} onChange={(e) => setSyntax(e.target.value)}>
									<option value="bash">Bash</option>
									<option value="javascript">JavaScript</option>
									<option value="python">Python</option>
									<option value="html">HTML</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Font Family</label>
						<p className="control is-inline-block">
							<input
								type="text"
								className="input"
								value={fontFamily}
								onChange={(e) => setFontFamily(e.target.value)}
							/>
						</p>
					</div>
					<div className="field">
						<label className="label">Tab Size</label>
						<p className="control is-inline-block">
							<input
								type="number"
								className="input"
								value={tabSize}
								onChange={(e) => setTabSize(parseInt(e.target.value))}
							/>
						</p>
					</div>
					<div className="field">
						<label className="label">Show Line Numbers</label>
						<p className="control">
							<input
								type="checkbox"
								checked={showLineNumbers}
								onChange={(e) => setShowLineNumbers(e.target.checked)}
							/>
						</p>
					</div>
					<button className="button is-primary has-text-white" onClick={handleSave}>Save</button>
				</div>
			</div>
			<button className="modal-close is-large" aria-label="close" onClick={() => setShowSettings(false)}></button>
		</div>
	);
};

export default Settings;
