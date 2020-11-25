(function() {
    window.createTodoForm = function(list, listName) {
        const buttonWrapperEl = createButtonWrapperEl();
        const btnEl = createSubmitBtnEl();
        const inputEl = createTextInputFieldEl(btnEl);

        const formAttr = {
            class: 'input-group mb-3',
        };
        const formElSubmitHandler = function(e) {
            e.preventDefault();

            const todoItemEl = createTodoItem(this.elements.inputArea.value, listName);
            const storage = new StorageApi(listName, todoItemEl.storageItem);

            list.append(todoItemEl.itemEl);

            storage.saveToLocal();

            this.reset();

            this.elements.submitBtn.setAttribute('disabled', '');
        };
        const onFormElSubmit = {
            submit: formElSubmitHandler,
        }
        const formEl = new CreateEl('form', '', formAttr, onFormElSubmit);

        buttonWrapperEl.append(btnEl);
        formEl.append(inputEl);
        formEl.append(buttonWrapperEl);

        return formEl;
    };
})();