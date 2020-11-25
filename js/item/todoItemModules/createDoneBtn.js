(function() {
    window.createDoneBtnEl = function(item, listName) {
        const doneBtnAttr = {
            class: 'btn btn-success',
        };
        const onDoneBtnHandler = function() {
            const storage = new StorageApi('', '', listName, item.id);
            storage.setItemDone();

            document.querySelector(`[data-id=${item.id}]`).classList.toggle('list-group-item-success')
        };
        
        const onDoneBtnClick = {
            click: onDoneBtnHandler,
        };
        const doneBtnEl = new CreateEl('button', 'Готово', doneBtnAttr, onDoneBtnClick);

        return doneBtnEl;
    }
})();