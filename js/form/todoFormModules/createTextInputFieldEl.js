(function() {
    window.createTextInputFieldEl = function(btn) {
        const GRACE_TIME = 300;
        const inputAttr = {
            class: 'form-control',
            placeholder: 'Введите название нового дела',
            required: '',
            name: 'inputArea',
        }

        setBtnAvailability = debounce(setBtnAvailability, GRACE_TIME);
        
        const inputEl = new CreateEl('input', '', inputAttr);
        inputEl.addEventListener('input', setBtnAvailability);

        function setBtnAvailability() {
            if(inputEl.value === '') {
                btn.setAttribute('disabled', '');
            }

            btn.removeAttribute('disabled');
        }

        return inputEl;
    }
})();