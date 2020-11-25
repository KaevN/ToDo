// (function() {
//     window.createEl = function(tag, text, attrToAdd, event) {
//         const element = document.createElement(tag);

//         element.textContent = text;

//         if(attrToAdd) {
//             for(let key in attrToAdd) {
//                 element.setAttribute(key, attrToAdd[key]);
//             }
//         }

//         if(event) {
//             for(let key in event) {
//                 element.addEventListener(key, event[key])
//             }
//         }

//         return element;
//     }
// })();

class CreateEl {
    constructor(tag, text, attrToAdd, event) {
        this.tag = tag;
        this.text = text;
        this.attrToAdd = attrToAdd;
        this.event = event;

        const element = document.createElement(tag);

        element.textContent = text;

        if(attrToAdd) {
            for(let key in attrToAdd) {
                element.setAttribute(key, attrToAdd[key]);
            }
        }

        if(event) {
            for(let key in event) {
                element.addEventListener(key, event[key])
            }
        }

        return element;
    }
}