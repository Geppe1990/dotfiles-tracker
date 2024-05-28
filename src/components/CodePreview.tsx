import React from 'react';
import {Highlight, themes} from "prism-react-renderer"
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {makeStyles} from "@fluentui/react-components";

interface CodePreviewProps {
	content: string;
}

const useStyles = makeStyles({
	pre: {
		padding: "10px"
	}
});

const CodePreview: React.FC<CodePreviewProps> = ({content}) => {
	const settings = useSelector((state: RootState) => state.settings);
	const styles = useStyles();

	return (
		<div>
			<Highlight
				theme={themes.vsDark}
				code={content}
				language="javascript"
			>
				{({style, tokens, getLineProps, getTokenProps}) => (
					<pre style={style} className={styles.pre}>
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
