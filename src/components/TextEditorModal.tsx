import React from 'react';

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
			  style={{ height: '300px' }}
		  />
					<button className="button is-primary has-text-white" onClick={saveFile}>
						Save
					</button>
				</div>
			</div>
			<button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
		</div>
	);
};

export default TextEditorModal;
