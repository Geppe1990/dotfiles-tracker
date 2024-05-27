import React, { useState } from 'react';

interface SettingsProps {
	settings: any;
	saveSettings: (newSettings: any) => void;
	setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<SettingsProps> = ({ settings, saveSettings, setShowSettings }) => {
	const [theme, setTheme] = useState(settings.theme || 'light');
	const [fontSize, setFontSize] = useState(settings.fontSize || 14);

	const handleSave = () => {
		saveSettings({ theme, fontSize });
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
					<button className="button is-primary has-text-white" onClick={handleSave}>Save</button>
				</div>
			</div>
			<button className="modal-close is-large" aria-label="close" onClick={() => setShowSettings(false)}></button>
		</div>
	);
};

export default Settings;
