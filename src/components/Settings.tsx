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

interface SelectSettingProps {
	options: {
		value: string,
		label: string
	}[],
	callback: (value: string) => void,
	data: string
}

interface InputSettingProps {
	type: "number" | "text",
	value: string,
	callback: (value: React.SetStateAction<number | string>) => void,
	label: string
}

interface CheckboxSettingProps {
	value: boolean,
	label: string,
	callback: (value: React.SetStateAction<boolean>) => void
}

const SelectSetting: React.FC<SelectSettingProps> = ({ options, callback, data }) => {
	const styles = useStyles();
	const selectId = useId();

	return(
		<div className={styles.formElement}>
			<Label className={styles.label} htmlFor={selectId}>Color</Label>
			<Select id={selectId} onChange={(e) => callback(e.target.value)} value={data}>
				{options.map((el, index) => <option key={index} value={el.value}>{el.label}</option>)}
			</Select>
		</div>
	)
}

const InputSetting: React.FC<InputSettingProps> = ({ type, value, callback, label }) => {
	const styles = useStyles();
	const inputId = useId();

	return (
		<div className={styles.formElement}>
			<Label htmlFor={inputId} className={styles.label}>{label}</Label>
			<Input
				id={inputId}
				type={type}
				value={value}
				onChange={(e) => callback(parseInt(e.target.value))}
			/>
		</div>
	)
}

const CheckboxSetting: React.FC<CheckboxSettingProps> = ({ value, label, callback}) => {
	const styles = useStyles();
	return (
		<div className={styles.formElementInline}>
			<Label>{label}</Label>
			<Checkbox checked={value} onChange={(e) => callback(e.target.checked)}/>
		</div>
	)
}

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

	const themeData = [
		{value: "light", label: "Light"},
		{value: "dark", label: "Dark"}
	]

	const syntaxData = [
		{value: "bash", label: "Bash"},
		{value: "javascript", label: "JavaScript"},
		{value: "python", label: "Python"},
		{value: "html", label: "HTML"},
	]

	return (
		<>
			<DialogContent>
				<>
					<SelectSetting options={themeData} callback={setTheme} data={theme} />
					<InputSetting type={"number"} value={fontSize.toString()} callback={setFontSize} label={"Font size"} />
					<SelectSetting options={syntaxData} callback={setSyntax} data={syntax} />
					<InputSetting type={"text"} value={fontFamily} callback={setFontFamily} label={"Font family"} />
					<InputSetting type={"number"} value={tabSize.toString()} callback={setTabSize} label={"Tab size"} />
					<CheckboxSetting value={showLineNumbers} label={"Show Line Numbers"} callback={setShowLineNumbers} />
				</>
			</DialogContent>
			<DialogActions>
				<DialogTrigger disableButtonEnhancement>
					<Button appearance="secondary">Close</Button>
				</DialogTrigger>
				<DialogTrigger disableButtonEnhancement>
					<Button onClick={handleSave} appearance="primary"><SaveFilled/>&nbsp;Save</Button>
				</DialogTrigger>
			</DialogActions>
		</>
	)
};

export default Settings;
