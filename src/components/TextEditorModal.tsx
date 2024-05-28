import React from 'react';
import {
	Button,
	DialogActions,
	DialogContent,
	DialogTrigger,
	makeStyles,
	Textarea
} from "@fluentui/react-components";
import {SaveFilled} from "@fluentui/react-icons";

interface TextEditorModalProps {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
	saveFile: () => void;
}

const useStyles = makeStyles({
	button: {
		marginRight: "10px"
	},
	root: {
		width: "100%",
	},
	textarea: {
		width: "100%",
		marginBottom: "10px",
		height: "200px"
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end"
	}
});

const TextEditorModal: React.FC<TextEditorModalProps> = ({ content, setContent, saveFile }) => {
	const styles = useStyles();

	return (
		<div className={styles.root}>
			<DialogContent>
				<Textarea
					className={styles.textarea}
					id="editor"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</DialogContent>
			<DialogActions className={styles.buttons}>
				<DialogTrigger disableButtonEnhancement>
					<Button appearance="secondary">Close</Button>
				</DialogTrigger>
				<Button onClick={saveFile} appearance="primary">
					<SaveFilled />&nbsp;
					Save
				</Button>
			</DialogActions>
		</div>
	);
};

export default TextEditorModal;
