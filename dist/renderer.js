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
        const editorContainer = document.getElementById('editor-container');
        const editor = document.getElementById('editor');
        const highlightedCode = document.getElementById('highlighted-code');
        const saveButton = document.getElementById('save-button');
        const fileTitle = document.getElementById('file-title');
        const filePath = document.querySelector('.file-path');
        if (sidebar) {
            sidebar.innerHTML = ''; // Clear existing items
            dotfiles.forEach(dotfile => {
                const listItem = createListItem(dotfile);
                listItem.addEventListener('click', () => handleListItemClick(listItem));
                sidebar.appendChild(listItem);
            });
        }
    }
    catch (error) {
        console.error('Errore durante il recupero dei dotfiles:', error);
    }
}));
function createListItem(dotfile) {
    const listItem = document.createElement('li');
    listItem.textContent = dotfile;
    return listItem;
}
function handleListItemClick(listItem) {
    return __awaiter(this, void 0, void 0, function* () {
        const dotfile = listItem.textContent;
        if (!dotfile) {
            return;
        }
        const { path, content } = yield window.electron.readDotfile(dotfile);
        updateEditor(content);
        updateHighlightedCode(content);
        updateFilePath(path);
        updateFileTitle(dotfile);
        addActiveClass(listItem);
        setupEditorChangeListener();
        setupSaveButtonClick(dotfile);
    });
}
function updateEditor(content) {
    const editor = document.getElementById('editor');
    editor.value = content;
}
function updateHighlightedCode(content) {
    const highlightedCode = document.getElementById('highlighted-code');
    highlightedCode.textContent = content;
    Prism.highlightElement(highlightedCode);
}
function updateFilePath(path) {
    const filePath = document.querySelector('.file-path');
    filePath.textContent = path;
}
function updateFileTitle(dotfile) {
    const fileTitle = document.getElementById('file-title');
    fileTitle.textContent = dotfile;
}
function addActiveClass(listItem) {
    const activeItem = document.querySelector('.sidebar ul .active');
    if (activeItem) {
        activeItem.classList.remove('active');
    }
    listItem.classList.add('active');
}
function setupEditorChangeListener() {
    const editor = document.getElementById('editor');
    const highlightedCode = document.getElementById('highlighted-code');
    editor.addEventListener('input', () => {
        highlightedCode.textContent = editor.value;
        Prism.highlightElement(highlightedCode);
    });
}
function setupSaveButtonClick(dotfile) {
    const saveButton = document.getElementById('save-button');
    saveButton.onclick = () => __awaiter(this, void 0, void 0, function* () {
        const newContent = document.getElementById('editor').value;
        yield window.electron.saveDotfile(dotfile, newContent);
        alert('File salvato con successo!');
    });
}
