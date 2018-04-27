module.exports = function Cart(oldCart) {

    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    

    this.add = function(id) {
        var storedItem = this.items[id];
        var map = {1 : "Margherita", 2 : "Greek Garden", 3 : "Family Favorite", 4 : "ignature - Code Titan"};
        if (!storedItem) {
            storedItem = this.items[id] = {id: id, title: map[id], qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = 4.5;
        this.totalQty ++;
        this.totalPrice += 4.5;
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
        this.totalPrice -= this.items[id].price;
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