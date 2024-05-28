import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faSave} from "@fortawesome/free-solid-svg-icons";

interface TextEditorModalProps {
	isActive: boolean;
	closeModal: () => void;
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
	saveFile: () => void;
}

const TextEditorModal: React.FC<TextEditorModalProps> = ({ isActive, closeModal, content, setContent, saveFile }) => {
	return (
		<div className={`modal ${isActive ? 'is-active' : ''}`}>
			<div className="modal-background" onClick={closeModal}></div>
			<div className="modal-content">
				<div className="box">
					<textarea
						className="textarea mb-4"
						id="editor"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<div className="buttons">
						<button className="button is-primary has-text-white" onClick={saveFile}>
							<FontAwesomeIcon icon={faSave} />&nbsp;
							Save
						</button>
						<button className="button is-danger has-text-white" aria-label="close" onClick={closeModal}>
							<FontAwesomeIcon icon={faClose} />&nbsp;
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextEditorModal;
