import React, {useState} from 'react';
import Breadcrumb from "./Breadcrumb";
import TextEditorModal from "./TextEditorModal";
import CodePreview from "./CodePreview";
import {
	Button,
	makeStyles,
	shorthands,
	Dialog,
	DialogTrigger,
	DialogSurface,
	DialogTitle,
	DialogBody,
} from "@fluentui/react-components";


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
	dialog: {
		display: "flex",
		flexDirection: "column"
	}
});

const FileEditor: React.FC<FileEditorProps> = ({currentFile, content, filePath, setContent, saveFile}) => {
	const styles = useStyles();

	return (
		<div className={styles.root}>
			<h2>{currentFile}</h2>
			{currentFile && <Breadcrumb path={filePath}/>}
			<CodePreview content={content}/>
			<Dialog>
				<DialogTrigger disableButtonEnhancement>
					<Button appearance="primary">Modifica</Button>
				</DialogTrigger>
				<DialogSurface>
					<DialogBody className={styles.dialog}>
						<DialogTitle>Modifica {currentFile}</DialogTitle>
							<TextEditorModal
								content={content}
								setContent={setContent}
								saveFile={saveFile}
							/>
					</DialogBody>
				</DialogSurface>
			</Dialog>
		</div>
	);
};

export default FileEditor;
