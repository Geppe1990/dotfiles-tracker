// src/components/CodePreview.tsx
import React, { useEffect } from 'react';
import Prism from 'prismjs';

interface CodePreviewProps {
	content: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ content }) => {
	useEffect(() => {
		Prism.highlightAll(); // Evidenzia il codice quando il contenuto cambia
	}, [content]);

	return (
		<pre
			className="mb-6 mt-0"
			id="highlighted-code"
			style={{ height: '300px', overflowY: 'auto' }}
		><code className="language-bash">{content}</code></pre>
	);
};

export default CodePreview;
