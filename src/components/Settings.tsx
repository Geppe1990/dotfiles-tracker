import React, {useId, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateSettings} from '../settingsSlice';
import {RootState} from "../store";
import {
	Button,
	DialogTrigger,
	DialogContent,
	DialogActions,
	Select,
	Label,
	Input,
	makeStyles, Checkbox
} from "@fluentui/react-components";
import {SaveFilled} from "@fluentui/react-icons";

const useStyles = makeStyles({
	formElement: {
		display: "flex",
		flexDirection: "column",
		marginBottom: "20px",
	},
	formElementInline: {
		display: "flex",
		flexDirection: "row",
		marginBottom: "20px",
		alignItems: "center"
	},
	label: {
		marginBottom: "10px"
	},
});

const Settings: React.FC = () => {
	const dispatch = useDispatch();
	const settings = useSelector((state: RootState) => state.settings);
	const [theme, setTheme] = useState(settings.theme || 'light');
	const [fontSize, setFontSize] = useState(settings.fontSize || 14);
	const [syntax, setSyntax] = useState(settings.syntax || 'bash');
	const [fontFamily, setFontFamily] = useState(settings.fontFamily || 'monospace');
	const [tabSize, setTabSize] = useState(settings.tabSize || 4);
	const [showLineNumbers, setShowLineNumbers] = useState(settings.showLineNumbers !== undefined ? settings.showLineNumbers : true);

	const handleSave = () => {
		const newSettings = {theme, fontSize, syntax, fontFamily, tabSize, showLineNumbers};
		dispatch(updateSettings(newSettings));
	};
	const styles = useStyles();

	const selectId = useId();
	const inputId = useId();


	return (
		<>
			<DialogContent>
				<>
					<div className={styles.formElement}>
						<Label className={styles.label} htmlFor={selectId}>Color</Label>
						<Select id={selectId} onChange={(e) => setTheme(e.target.value)} value={theme}>
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</Select>
					</div>
					<div className={styles.formElement}>
						<Label htmlFor={inputId} className={styles.label}>
							Font Size
						</Label>
						<Input id={inputId} type="number" value={fontSize.toString()} onChange={(e) => setFontSize(parseInt(e.target.value))}/>
					</div>
					<div className={styles.formElement}>
						<Label htmlFor={selectId} className={styles.label}>Syntax</Label>
						<Select id={selectId} onChange={(e) => setSyntax(e.target.value)} value={syntax}>
							<option value="bash">Bash</option>
							<option value="javascript">JavaScript</option>
							<option value="python">Python</option>
							<option value="html">HTML</option>
						</Select>
					</div>
					<div className={styles.formElement}>
						<Label htmlFor={inputId} className={styles.label}>
							Font Family
						</Label>
						<Input id={inputId} type="text" value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}/>
					</div>
					<div className={styles.formElement}>
						<Label htmlFor={inputId} className={styles.label}>
							Font Size
						</Label>
						<Input id={inputId} type="number" value={tabSize.toString()} onChange={(e) => setTabSize(parseInt(e.target.value))}/>
					</div>
					<div className={styles.formElementInline}>
						<Label>Show Line Numbers</Label>
						<Checkbox checked={showLineNumbers} onChange={(e) => setShowLineNumbers(e.target.checked)} />
					</div>
				</>
			</DialogContent>
			<DialogActions>
				<DialogTrigger disableButtonEnhancement>
					<Button appearance="secondary">Close</Button>
				</DialogTrigger>
				<DialogTrigger disableButtonEnhancement>
					<Button onClick={handleSave} appearance="primary">
						<SaveFilled/>&nbsp;
						Save
					</Button>
				</DialogTrigger>
			</DialogActions>
		</>
	)
};

export default Settings;
