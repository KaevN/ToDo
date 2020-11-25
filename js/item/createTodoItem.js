(function() {
    window.createTodoItem = function(name, listName, id) {
        const itemEl = createItemEl(name, id);
        const btnGroupEl = createBtnGroupEl();
        const doneBtnEl = createDoneBtnEl(itemEl.storageItem, listName);
        const deleteBtnEl = createDeleteBtnEl(itemEl.storageItem, listName);

        btnGroupEl.append(doneBtnEl);
        btnGroupEl.append(deleteBtnEl);
        itemEl.itemEl.append(btnGroupEl);

        return itemEl;
    }
})();