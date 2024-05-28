import React from 'react';
import {Highlight, themes} from "prism-react-renderer"
import {useSelector} from "react-redux";
import {RootState} from "../store";

interface CodePreviewProps {
	content: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({content}) => {
	const settings = useSelector((state: RootState) => state.settings);
	return (
		<div className="mb-6">
			<Highlight
				theme={themes.vsDark}
				code={content}
				language="javascript"
			>
				{({style, tokens, getLineProps, getTokenProps}) => (
					<pre style={style}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({line})}>
								{settings.showLineNumbers &&
									<span>{i + 1}&nbsp;</span>
								}
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({token})} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	)
};

export default CodePreview;
