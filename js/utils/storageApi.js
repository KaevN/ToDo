// (function() {
//     window.storageApi = {
//         saveToLocal: function(key, data) {
//             if(localStorage.getItem(key)) {
//                 let storage = JSON.parse(localStorage.getItem(key));
//                 storage.push(data)
//                 localStorage.setItem(key, JSON.stringify(storage));
//             } else {
//                 let storage = [];
//                 storage.push(data);
//                 localStorage.setItem(key, JSON.stringify(storage));
//             }

//         },

//         loadFromLocal: function(key) {
//             if(!localStorage.getItem(key)) {
//                 return
//             }
//             return JSON.parse(localStorage.getItem(key))
//         }, 
        
//         setItemDone: function(listName, id) {
//             const randomNum = Math.random()
            
//             if(getAnswer(randomNum, MAX_VAL_FOR_TRUTH)) {
//                 let data = JSON.parse(localStorage.getItem(listName));

//                 data.filter((el) => {
//                     if(el.id === id) {
//                         el.done = !el.done;
//                     } 
//                     localStorage.setItem(listName, JSON.stringify(data))
//                 });

//                 return true;
//             } else {
//                 return false;
//             }
//         },
        
//         deleteItem: function(listName, id) {
//             const randomNum = Math.random()

//             if(getAnswer(randomNum, MAX_VAL_FOR_TRUTH)) {
//                 let data = JSON.parse(localStorage.getItem(listName));

//                 data = data.filter((el) => el.id !== id)
    
//                 localStorage.setItem(listName, JSON.stringify(data))

//                 return true
//             } else {
//                 return false
//             }
//         }
//     }
// })();

class StorageApi {
    constructor(key, data, listName, id) {
        this.key = key;
        this.data = data;
        this.listName = listName;
        this.id = id;
    }

    saveToLocal() {
        if(localStorage.getItem(this.key)) {
            let storage = JSON.parse(localStorage.getItem(this.key));
            storage.push(this.data)
            localStorage.setItem(this.key, JSON.stringify(storage));
        } else {
            let storage = [];
            storage.push(this.data);
            localStorage.setItem(this.key, JSON.stringify(storage));
        }
    };

    loadFromLocal() {
        if(!localStorage.getItem(this.key)) {
            return
        }
        return JSON.parse(localStorage.getItem(this.key))
    };

    setItemDone() {
        let data = JSON.parse(localStorage.getItem(this.listName));

        data.filter((el) => {
            if(el.id === this.id) {
                el.done = !el.done;
            } 
            localStorage.setItem(this.listName, JSON.stringify(data))
        });
    };

    deleteItem() {
        let data = JSON.parse(localStorage.getItem(this.listName));

        data = data.filter((el) => el.id !== this.id)

        localStorage.setItem(this.listName, JSON.stringify(data))
    }
};