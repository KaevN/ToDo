(function() {
    window.createTodoList = function(items, listName) {
        const listAttr = {
            class: 'list-group',
        };
        const todoListEl = new CreateEl('ul', '', listAttr);

        if(items) {
            const toDoItems = createToDoItems(items, listName);
            
            todoListEl.append(toDoItems);
        }

        return todoListEl;
    }
})();