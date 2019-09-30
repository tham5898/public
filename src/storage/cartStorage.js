class CartStorage {
    constructor(key) {
        this._key = 'sanPham'
    }
    get() {
        return localStorage.getItem(this._key)
    }
    set(value) {
        return localStorage.setItem(this._key, JSON.stringify(value))
    }
}

const cartStorage = new CartStorage();
export default cartStorage;