import { LOCAL_STORAGE_NAME } from '../configs/configs.js';

class User {
    constructor(email = "", accessToken = "", carts = []) {
        this.email = email;
        this.accessToken = accessToken;
        this.carts = carts;
    }

    static getLocalStorage() {
        const localUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
        if (localUser) {
            const user = new User();
            Object.assign(user, localUser);
            return user;
        } else {
            return null;
        }
    }

    setLocalStorage() {
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(this));
    }

    removeLocalStorage() {
        localStorage.removeItem(LOCAL_STORAGE_NAME);
    }

    addCart(cart) {
        this.carts.push(cart);
        this.setLocalStorage();
    }

    removeCart(index) {
        this.carts.splice(index, 1);
        this.setLocalStorage();
    }

    totalPrice() {
        return this.carts.reduce((total, cart) => {
            return total += cart.price;
        }, 0);
    }

    emptyCarts() {
        this.carts = [];
        this.setLocalStorage();
    }
};

export default User;