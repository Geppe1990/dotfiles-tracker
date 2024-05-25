window.addEventListener('DOMContentLoaded', async () => {
	try {
		const dotfiles = await window.electron.readDotfiles();
		const sidebar = document.querySelector('.sidebar ul');
		if (sidebar) {
			sidebar.innerHTML = '';  // Clear existing items
			dotfiles.forEach(dotfile => {
				const listItem = document.createElement('li');
				listItem.textContent = dotfile;
				listItem.addEventListener('click', async () => {
					const content = await window.electron.readDotfile(dotfile);
					const contentDiv = document.getElementById('dotfiles-content');
					if (contentDiv) {
						contentDiv.innerHTML = `<pre><code class="language-bash">${content}</code></pre>`;
						Prism.highlightAll();
					}
				});
				sidebar.appendChild(listItem);
			});
		}
	} catch (error) {
		console.error('Errore durante il recupero dei dotfiles:', error);
	}
});
