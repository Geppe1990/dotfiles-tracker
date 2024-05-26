import React from 'react';
import Prism from 'prismjs';

interface FileEditorProps {
	currentFile: string;
	content: string;
	filePath: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
	saveFile: () => void;
}

const FileEditor: React.FC<FileEditorProps> = ({ currentFile, content, filePath, setContent, saveFile }) => {
	React.useEffect(() => {
		Prism.highlightAll(); // Evidenzia il codice quando il contenuto cambia
	}, [content]);

	return (
		<div id="editor-container">
			<h2 className="title is-2 mb-6" id="file-title">{currentFile}</h2>
			{content && (
				<>
					<pre className="file-path mb-6">{filePath}</pre>
					<textarea
						className="textarea mb-6"
						id="editor"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<pre className="mb-6" id="highlighted-code"><code className="language-bash">{content}</code></pre>
					<button className="button is-primary" id="save-button" onClick={saveFile}>
						Save
					</button>
				</>
			)}
		</div>
	);
};

export default FileEditor;
