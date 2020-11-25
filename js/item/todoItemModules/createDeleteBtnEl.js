(function() {
    window.createDeleteBtnEl = function(item, listName) {
        const deleteBtnAttr = {
            class: 'btn btn-danger',
        };
        const onDeleteBtnHandler = function(){
            const storage = new StorageApi('', '', listName, item.id);
            storage.deleteItem(listName, item.id);

            document.querySelector(`[data-id = ${item.id}]`).remove();
        };
        const onDeleteBtnClick = {
            click: onDeleteBtnHandler,
        };

        const deleteBtnEl = new CreateEl('button', 'Удалить', deleteBtnAttr, onDeleteBtnClick);

        return deleteBtnEl;
    }
})();