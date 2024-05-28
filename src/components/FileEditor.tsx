import React, { useState } from 'react';
import Breadcrumb from "./Breadcrumb";
import TextEditorModal from "./TextEditorModal";
import CodePreview from "./CodePreview";
import {Button, makeStyles, shorthands} from "@fluentui/react-components";
import {TextEditStyleFilled} from "@fluentui/react-icons";

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
});

const FileEditor: React.FC<FileEditorProps> = ({ currentFile, content, filePath, setContent, saveFile }) => {
	const [isModalActive, setIsModalActive] = useState(false);

	const openModal = () => {
		setIsModalActive(true);
	};

	const closeModal = () => {
		setIsModalActive(false);
	};

	const saveAndCloseModal = () => {
		saveFile();
		closeModal();
	};

	const styles = useStyles();

	return (
		<div className={styles.root}>
			<h2>{currentFile}</h2>
			{currentFile && <Breadcrumb path={filePath}/>}
			<TextEditorModal
				isActive={isModalActive}
				closeModal={closeModal}
				content={content}
				setContent={setContent}
				saveFile={saveAndCloseModal}
			/>
			<CodePreview content={content}/>
			<div>
				<Button onClick={openModal} appearance="primary">
					<TextEditStyleFilled />&nbsp;
					Modifica
				</Button>
			</div>
		</div>
	);
};

export default FileEditor;
