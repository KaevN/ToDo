(function() {
    window.createBtnGroupEl = function() {
        const btnAttr = {
            class: 'btn-group btn-group-sm',
        };
        const btnGroupEl = new CreateEl('div', '', btnAttr);

        return btnGroupEl;
    }
})();