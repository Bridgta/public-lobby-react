export const addItem = (item = [], count = 0, next = f => f) => {
    let cart = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.push({
            ...item,
            count: 1
        });

        // remove duplicates
        cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
            return cart.find(p => p._id === id);
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        next();
    }
};

export const itemTotal = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart")).length;
        }
    }
    return 0;
};

export const getCart = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart"));
        }
    }
    return [];
};

export const updateItem = (projectId, count) => {
    let cart = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }

        cart.map((project, i) => {
            if (project._id === projectId) {
                cart[i].count = count;
            }
        });

        localStorage.setItem("cart", JSON.stringify(cart));
    }
};
