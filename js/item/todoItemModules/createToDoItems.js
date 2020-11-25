(function() {
    window.createToDoItems = function(items, listName) {
        const itemsList = new DocumentFragment();

        items.forEach(element => {
            const todoItemEl = createTodoItem(element.name, listName, element.id);
            
            if(element.done) {
                todoItemEl.itemEl.classList.add('list-group-item-success');
            }

            itemsList.append(todoItemEl.itemEl)
        });

        return itemsList;
    }
})();