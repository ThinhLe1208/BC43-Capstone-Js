import { localStorageName } from '../configs/configs.js';

class User {
    constructor(email = "", accessToken = "", carts = []) {
        this.email = email;
        this.accessToken = accessToken;
        this.carts = carts;
    }

    static getLocalStorage() {
        const localUser = JSON.parse(localStorage.getItem(localStorageName));
        if (localUser) {
            const user = new User();
            Object.assign(user, localUser);
            return user;
        } else {
            return null;
        }
    }

    setLocalStorage() {
        localStorage.setItem(localStorageName, JSON.stringify(this));
    }

    removeLocalStorage() {
        localStorage.removeItem(localStorageName);
    }

    addCart(cart) {
        this.carts.push(cart);
        this.setLocalStorage();
    }

    emptyCarts() {
        this.carts = [];
        this.setLocalStorage();
    }
};

export default User;