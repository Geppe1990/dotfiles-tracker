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
// renderer.ts
window.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dotfiles = yield window.electron.readDotfiles();
        const sidebar = document.querySelector('.sidebar ul');
        const editorContainer = document.getElementById('editor-container');
        const editor = document.getElementById('editor');
        const highlightedCode = document.getElementById('highlighted-code');
        const saveButton = document.getElementById('save-button');
        const fileTitle = document.getElementById('file-title');
        if (sidebar) {
            sidebar.innerHTML = ''; // Clear existing items
            dotfiles.forEach(dotfile => {
                const listItem = document.createElement('li');
                listItem.textContent = dotfile;
                listItem.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
                    // Rimuovi la classe active da tutte le voci di menu
                    const activeItem = sidebar.querySelector('.active');
                    if (activeItem) {
                        activeItem.classList.remove('active');
                    }
                    // Aggiungi la classe active alla voce di menu cliccata
                    listItem.classList.add('active');
                    // Leggi il contenuto del dotfile e aggiornalo nell'editor
                    const content = yield window.electron.readDotfile(dotfile);
                    editor.value = content;
                    highlightedCode.textContent = content;
                    Prism.highlightElement(highlightedCode);
                    editorContainer.classList.add('active');
                    editor.addEventListener('input', () => {
                        highlightedCode.textContent = editor.value;
                        Prism.highlightElement(highlightedCode);
                    });
                    saveButton.onclick = () => __awaiter(void 0, void 0, void 0, function* () {
                        const newContent = editor.value;
                        yield window.electron.saveDotfile(dotfile, newContent);
                        alert('File salvato con successo!');
                    });
                    // Aggiungi il titolo del file
                    fileTitle.textContent = dotfile;
                }));
                sidebar.appendChild(listItem);
            });
        }
    }
    catch (error) {
        console.error('Errore durante il recupero dei dotfiles:', error);
    }
}));
