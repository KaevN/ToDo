(function() {
    window.createSubmitBtnEl = function() {
        const btnAttr = {
            class: 'btn btn-primary',
            disabled: '',
            name: 'submitBtn',
        };
        const btnEl = new CreateEl('button', 'Добавить дело', btnAttr);

        return btnEl;
    }
})();