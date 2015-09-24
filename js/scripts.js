function Pizza (topping, pizza_size, quantity) {
    this.topping = topping;
    this.pizza_size = pizza_size;
    this.quantity = quantity;
}

Pizza.prototype.getPrice = function(){
    var topping_price;
    var size_price;

    if (this.topping == 'cheese') {
        topping_price = 0;
    } else if (this.topping == 'meat') {
        topping_price = 2;
    } else if (this.topping == 'veg'){
        topping_price = 1;
    }

    if (this.pizza_size == 'small') {
        size_price = 8;
    } else if (this.pizza_size == 'medium') {
        size_price = 10;
    } else if (this.pizza_size == 'large'){
        size_price = 12;
    } else if (this.pizza_size == 'xl'){
        size_price = 14;
    }

    var total_price = ((topping_price + size_price) * this.quantity)

    return total_price;
}


//jQuery
$(document).ready(function() {

    $('div#reciept').hide();

    $('form#pizza_order_form').submit(function(event){
        event.preventDefault();
        var new_topping = $('select#new_topping').val();
        var new_size = $('select#new_size').val();
        var new_quantity = $('input#new_quantity').val();
        var newPizza = new Pizza (new_topping, new_size, new_quantity);
        var total_price = newPizza.getPrice()

        $('span#total_price').text(total_price);
        $('div#reciept').show();

    })
})
