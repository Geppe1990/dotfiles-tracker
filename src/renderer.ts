// renderer.ts
window.addEventListener('DOMContentLoaded', async () => {
	try {
		const dotfiles = await window.electron.readDotfiles();
		const sidebar = document.querySelector('.sidebar ul');
		const editorContainer = document.getElementById('editor-container') as HTMLDivElement;
		const editor = document.getElementById('editor') as HTMLTextAreaElement;
		const highlightedCode = document.getElementById('highlighted-code') as HTMLElement;
		const saveButton = document.getElementById('save-button') as HTMLButtonElement;
		const fileTitle = document.getElementById('file-title') as HTMLHeadingElement;

		if (sidebar) {
			sidebar.innerHTML = '';  // Clear existing items
			dotfiles.forEach(dotfile => {
				const listItem = document.createElement('li');
				listItem.textContent = dotfile;
				listItem.addEventListener('click', async () => {
					// Rimuovi la classe active da tutte le voci di menu
					const activeItem = sidebar.querySelector('.active');
					if (activeItem) {
						activeItem.classList.remove('active');
					}

					// Aggiungi la classe active alla voce di menu cliccata
					listItem.classList.add('active');

					// Leggi il contenuto del dotfile e aggiornalo nell'editor
					const content = await window.electron.readDotfile(dotfile);
					editor.value = content;
					highlightedCode.textContent = content;
					Prism.highlightElement(highlightedCode);
					editorContainer.classList.add('active');

					editor.addEventListener('input', () => {
						highlightedCode.textContent = editor.value;
						Prism.highlightElement(highlightedCode);
					});

					saveButton.onclick = async () => {
						const newContent = editor.value;
						await window.electron.saveDotfile(dotfile, newContent);
						alert('File salvato con successo!');
					};

					// Aggiungi il titolo del file
					fileTitle.textContent = dotfile;
				});
				sidebar.appendChild(listItem);
			});
		}
	} catch (error) {
		console.error('Errore durante il recupero dei dotfiles:', error);
	}
});
