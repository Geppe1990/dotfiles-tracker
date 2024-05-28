import React from 'react';
import {Button, makeStyles, shorthands, Textarea} from "@fluentui/react-components";
import {SaveFilled, DismissSquareFilled} from "@fluentui/react-icons";

interface TextEditorModalProps {
	isActive: boolean;
	closeModal: () => void;
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
	saveFile: () => void;
}

const useStyles = makeStyles({
	button: {
		marginRight: "10px"
	},
});

const TextEditorModal: React.FC<TextEditorModalProps> = ({ isActive, closeModal, content, setContent, saveFile }) => {
	const styles = useStyles();

	return (
		<div className={`modal ${isActive ? 'is-active' : ''}`}>
			<div onClick={closeModal}></div>
			<div>
				<div>
					<Textarea
						id="editor"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<div>
						<Button onClick={saveFile} appearance="primary" className={styles.button}>
							<SaveFilled />&nbsp;
							Save
						</Button>
						<Button aria-label="close" onClick={closeModal} appearance="secondary" className={styles.button}>
							<DismissSquareFilled />&nbsp;
							Close
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextEditorModal;
