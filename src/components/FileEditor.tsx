import React from 'react';
import Breadcrumb from "./Breadcrumb";
import {
	Button,
	makeStyles,
	shorthands,
} from "@fluentui/react-components";
import {SaveFilled} from "@fluentui/react-icons";
import {Controlled as CodeMirror} from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
// TODO: Fai controllo qui
import 'codemirror/mode/javascript/javascript';

interface FileEditorProps {
	currentFile: string;
	content: string;
	filePath: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
	saveFile: () => void;
}

const useStyles = makeStyles({
	root: {
		flexBasis: "90%",
		...shorthands.padding("0", "20px"),
	},
	editor: {
		marginBottom: "10px",
	}
});

const FileEditor: React.FC<FileEditorProps> = ({currentFile, content, filePath, setContent, saveFile}) => {
	const styles = useStyles();

	return (
		<div className={styles.root}>
			<h2>{currentFile}</h2>
			{currentFile && <Breadcrumb path={filePath}/>}
			npm i --save-dev @types/codemirror
			<CodeMirror
				className={styles.editor}
				value={content}
				options={{
					mode: 'javascript',
					theme: 'material',
					lineNumbers: true,
				}}
				onBeforeChange={(editor, data, value) => {
					setContent(value);
				}}
			/>
			<Button onClick={saveFile} appearance="primary">
				<SaveFilled />&nbsp;
				Save
			</Button>
		</div>
	);
};

export default FileEditor;
