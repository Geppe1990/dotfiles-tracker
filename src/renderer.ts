window.addEventListener('DOMContentLoaded', async () => {
	const content = await window.electron.readDotfiles();
	const contentDiv = document.getElementById('dotfiles-content');
	if (contentDiv) {
		contentDiv.innerHTML = content;

		// Applica il syntax highlighting
		const codeBlocks = contentDiv.querySelectorAll('pre code');
		codeBlocks.forEach((block) => {
			Prism.highlightElement(block);
		});
	}
});
