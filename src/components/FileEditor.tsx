import React, { useState } from 'react';
import Breadcrumb from "./Breadcrumb";
import TextEditorModal from "./TextEditorModal";
import CodePreview from "./CodePreview";

interface FileEditorProps {
	currentFile: string;
	content: string;
	filePath: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
	saveFile: () => void;
}

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

	return (
		<div id="editor-container">
			<h2 className="title is-2 mb-6" id="file-title">{currentFile}</h2>
			{currentFile && <Breadcrumb path={filePath}/>}
			<TextEditorModal
				isActive={isModalActive}
				closeModal={closeModal}
				content={content}
				setContent={setContent}
				saveFile={saveAndCloseModal}
			/>
			<CodePreview content={content}/>
			<button className="button is-primary has-text-white mb-4" onClick={openModal}>
				Modifica
			</button>
		</div>
	);
};

export default FileEditor;
