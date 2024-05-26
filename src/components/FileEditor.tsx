// src/components/FileEditor.tsx
import React from 'react';
import Breadcrumb from "./Breadcrumb";
import TextEditor from "./TextEditor";
import CodePreview from "./CodePreview";

interface FileEditorProps {
	currentFile: string;
	content: string;
	filePath: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
	saveFile: () => void;
}

const FileEditor: React.FC<FileEditorProps> = ({ currentFile, content, filePath, setContent, saveFile }) => {
	return (
		<div id="editor-container">
			<h2 className="title is-2 mb-6" id="file-title">{currentFile}</h2>
			{currentFile && <Breadcrumb path={filePath} />}
			<TextEditor content={content} setContent={setContent} />
			<CodePreview content={content} />
			<button className="button is-primary has-text-white" id="save-button" onClick={saveFile}>
				Save
			</button>
		</div>
	);
};

export default FileEditor;
