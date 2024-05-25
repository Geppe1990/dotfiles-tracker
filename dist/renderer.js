"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dotfiles = yield window.electron.readDotfiles();
        const sidebar = document.querySelector('.sidebar ul');
        if (sidebar) {
            sidebar.innerHTML = ''; // Clear existing items
            dotfiles.forEach(dotfile => {
                const listItem = document.createElement('li');
                listItem.textContent = dotfile;
                listItem.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
                    const content = yield window.electron.readDotfile(dotfile);
                    const contentDiv = document.getElementById('dotfiles-content');
                    if (contentDiv) {
                        contentDiv.innerHTML = `<pre><code class="language-bash">${content}</code></pre>`;
                        Prism.highlightAll();
                    }
                }));
                sidebar.appendChild(listItem);
            });
        }
    }
    catch (error) {
        console.error('Errore durante il recupero dei dotfiles:', error);
    }
}));
