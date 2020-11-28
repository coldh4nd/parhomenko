export class ITodoRepository {
    save() {
        throw new Error('Not implemented');
    }

    delete() {
        throw new Error('Not implemented');
    }

    fetch() {
        throw new Error('Not implemented');
    }

    update() {
        throw new Error('Not implemented');
    }

    find() {
        throw new Error('Not implemented');
    }
}

export class TodoLocalStorageRepository extends ITodoRepository {
    __getItems() {
        return localStorage.getItem('todos')
            ? JSON.parse(localStorage.getItem('todos'))
            : [];
    }

    save(model) {
        return new Promise((resolve) => {
            let items = this.__getItems();
            items.push(model);
            localStorage.setItem('todos', JSON.stringify(items));
            resolve(model);
        });
    }

    delete(id) {
        return new Promise((resolve) => {
            let items = this.__getItems();
            items = items.filter((item) => item.id !== id);
            localStorage.setItem('todos', JSON.stringify(items));
            resolve(items);
        });
    }

    update(model) {
        return new Promise((resolve) => {
            let items = this.__getItems();
            const index = items.findIndex((item) => item.id === model.id);
            items[index] = model;
            localStorage.setItem('todos', JSON.stringify(items));
            resolve(items);
        });
    }

    find(id) {
        return new Promise((resolve) => {
            let items = this.__getItems();
            return resolve(items.find((item) => item.id === id));
        });
    }

    fetch() {
        return new Promise((resolve) => {
            resolve(this.__getItems());
        });
    }
}
