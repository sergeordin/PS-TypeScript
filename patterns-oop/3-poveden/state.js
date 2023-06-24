"use strict";
class DocumentItem {
    text;
    state;
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    name;
    item;
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocument';
    }
    publish() {
        console.log(`to publish ${this.item.text}`);
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log('deleted');
    }
}
class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocument';
    }
    publish() {
        console.log('already publish!');
    }
    delete() {
        console.log('unpublish');
        this.item.setState(new DraftDocumentItemState());
    }
}
const item = new DocumentItem();
item.text = 'doc text';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
