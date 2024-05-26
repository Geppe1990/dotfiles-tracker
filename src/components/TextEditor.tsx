// src/components/TextEditor.tsx
import React from 'react';

interface TextEditorProps {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, setContent }) => {
	return (
		<textarea
			className="textarea"
			id="editor"
			value={content}
			onChange={(e) => setContent(e.target.value)}
			style={{ height: '300px' }} // Imposta l'altezza
		/>
	);
};

export default TextEditor;
