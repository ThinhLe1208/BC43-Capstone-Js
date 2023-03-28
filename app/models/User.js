class User {
    email;
    accessToken;
    carts;

    constructor() {
        const user = this.getUser();
        if (user) {
            const { email, accessToken, carts } = user;
            this.email = email;
            this.accessToken = accessToken;
            this.carts = carts;
        } else {
            return {};
        }
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    setUser() {
        localStorage.setItem('user', JSON.stringify(this));
    }

    addCart(cart) {
        this.carts.push(cart);
        this.setUser();
    }

    emptyCarts() {
        this.carts = [];
        this.setUser();
    }
};

export default User;