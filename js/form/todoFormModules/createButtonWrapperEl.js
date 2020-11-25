(function() {
    window.createButtonWrapperEl = function() {
        const buttonWrapperAttr = {
            class: 'input-group-append',
        };
        const buttonWrapperEl = new CreateEl('div', '', buttonWrapperAttr);

        return buttonWrapperEl;
    }
})();