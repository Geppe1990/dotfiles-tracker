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
			<div className="columns">
				<div className="column is-half">
					<TextEditor content={content} setContent={setContent} />
				</div>
				<div className="column is-half">
					<CodePreview content={content} />
				</div>
			</div>
			<button className="button is-primary has-text-white" id="save-button" onClick={saveFile}>
				Save
			</button>
		</div>
	);
};

export default FileEditor;
