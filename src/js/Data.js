class Data {
    // default property
    uid = 1;

    constructor() {
        this._data = {};
    }
    
    set(uid, key, value) {
        if (!this._data.hasOwnProperty(uid)) {
            this._data[uid] = {};
        }
        this._data[uid][key] = value;
    }

    get(uid, key) {
        if (!this._data.hasOwnProperty(uid)) {
            return undefined;
        }
        return this._data[uid][key];
    }

    dump(uid) {
        if (this._data.hasOwnProperty(uid)) {
            delete this._data[uid];
        }
    }
}

export default Data;
