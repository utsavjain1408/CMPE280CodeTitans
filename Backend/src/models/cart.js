module.exports = function Cart(oldCart) {

    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    

    this.add = function(id) {
        var storedItem = this.items[id];
        var map = {1 : "Margherita", 2 : "Greek Garden", 3 : "Family Favorite", 4 : "Signature Titan"};
        var map1 = {1 : "35.194.50.254:3050/static/Margherita.png", 2 : "35.194.50.254:3050/static/Greek_Garden.png", 3 : "35.194.50.254:3050/static/Family_favorite.png", 4 : "35.194.50.254:3050/static/Signature_Titan.png"};
        var map2 = {1 : "Tomato, Mozzarella, Basil", 2 : " Garlic sauce, Spinach, Black olives", 3 : "Red sauce, Pepperoni, Mushrooms", 4 : "Pesto sauce, Tomatoes, Spinach, Red onion"};
        if (!storedItem) {
            storedItem = this.items[id] = {id: id, image: map1[id], title: map[id], topping: map2[id], qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = 4.5;
        this.totalQty ++;
        this.totalPrice += 4.5;
    };

    this.customize_add = function(id, topping) {
        var storedItem = this.items[id];
        
        if (!storedItem) {
            storedItem = this.items[id] = {id: id, image: "35.194.50.254:3050/static/customize.png", title: "Customized",topping: topping, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = 8;
        this.totalQty ++;
        this.totalPrice += 8;
    };

    this.reduceByOne = function(id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;

        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };

    this.removeItem = function(id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price * this.items[id].qty;
        delete this.items[id];
    };
    
    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};