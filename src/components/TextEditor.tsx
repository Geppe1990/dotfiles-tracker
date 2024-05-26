import React from 'react';

interface TextEditorProps {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, setContent }) => {
	return (
		<textarea
			className="textarea mb-6"
			id="editor"
			value={content}
			onChange={(e) => setContent(e.target.value)}
		/>
	);
};

export default TextEditor;
