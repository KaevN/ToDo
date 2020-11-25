(function() {
    window.createItemEl = function(name, id) {
        const itemAttr = {
            class: 'list-group-item d-flex justify-content-between align-items-center js-list-item',
        };
        const itemEl = new CreateEl('li', name, itemAttr);
        itemEl.dataset.id = id;
        const storageItem = {};
  
        if(id) {
            storageItem.id = id
        } else {
            storageItem.id = `f${(~~(Math.random()*1e8)).toString(16)}`;
            itemEl.dataset.id = storageItem.id;
        }

        storageItem.name = name;

        return {
            itemEl,
            storageItem,
        }
    }
})();