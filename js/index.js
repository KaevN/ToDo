(function() {
    const DOCUMENT_TITLE = 'Список дел';
    window.createTodoApp = function(container, title = DOCUMENT_TITLE, listName, items) {
        const fragment = new DocumentFragment();

        const todoListEl = createTodoList(items, listName);
        const todoAppTitleEl = createAppTitle(title);
        const todoFormEl = createTodoForm(todoListEl, listName);

        fragment.append(todoAppTitleEl);
        fragment.append(todoFormEl);
        fragment.append(todoListEl);

        container.append(fragment);
    }
})();

