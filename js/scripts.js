function Pizza (topping, pizza_size, quantity) {
    this.topping = topping;
    this.pizza_size = pizza_size;
    this.quantity = quantity;
}

Pizza.prototype.getToppingPrice = function(topping) {
    var topping = this.topping;
    var toppings = {
        cheese : 0,
        meat : 2,
        veg : 1,
    }


    var topping_price = toppings.topping;
    console.log(topping_price)

}

Pizza.prototype.getPrice = function(topping, pizza_size, quantity){
    var toppings = {
        cheese : 0,
        meat : 2,
        veg : 1,
    }

    var sizes = {
        small : 8,
        medium : 10,
        large : 12,
        xl : 14,
    }
    console.log(toppings.veg)

    var total_price = ((toppings.topping + sizes.pizza_size) * quantity)

    return total_price;
}
