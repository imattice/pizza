function Pizza (topping, pizza_size, quantity) {
    this.topping = topping;
    this.pizza_size = pizza_size;
    this.quantity = quantity;
}

// Pizza.prototype.getToppingPrice = function(topping) {
//     var topping = this.topping;
//     var toppings = {
//         cheese : 0,
//         meat : 2,
//         veg : 1,
//     }
//
//
//     var topping_price = toppings.topping;
//     console.log(topping_price)
//
// }

Pizza.prototype.getPrice = function(topping, pizza_size, quantity){
    var topping_price;
    var size_price;

    if (topping == 'cheese') {
        topping_price = 0;
    } else if (topping == 'meat') {
        topping_price = 2;
    } else if (topping == 'veg'){
        topping_price = 1;
    }

    if (pizza_size == 'small') {
        size_price = 8;
    } else if (pizza_size == 'meduim') {
        size_price = 10;
    } else if (pizza_size == 'large'){
        size_price = 12;
    } else if (pizza_size == 'xl'){
        size_price = 14;
    }


//use local objects within prototypes to get topping prices?
    // var toppings = {
    //     cheese : 0,
    //     meat : 2,
    //     veg : 1,
    // }
    //
    // var sizes = {
    //     small : 8,
    //     medium : 10,
    //     large : 12,
    //     xl : 14,
    // }
    // console.log(toppings.veg)

    var total_price = ((topping_price + size_price) * quantity)

    return total_price;
}
