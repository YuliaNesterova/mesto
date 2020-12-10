export default class Section {
    constructor ({ renderer }, containerSelector) {
        // this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element){
        this._container.append(element);
    }

    addNewItem(element) {
        this._container.prepend(element);
    }
    renderItems(items, id) {
        items.forEach((item) => {
            this._renderer(item, id);
        })
    }
}