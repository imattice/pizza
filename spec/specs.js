//create pizza object

describe('Pizza', function(){
    it('creates an object with toppings, pizza_size, and quantity', function() {
        var testPizza = new Pizza ('cheese', 'large', '5')
        expect(testPizza.topping).to.equal('cheese');
        expect(testPizza.pizza_size).to.equal('large');
        expect(testPizza.quantity).to.equal('5');
    })

    it('returns a price for a pizza based on toppings, pizza_size, and quantity.', function() {
        var testPizza = new Pizza ('veg', 'xl', '2')
        var total_price = testPizza.getPrice('veg', 'xl', '2')
        expect(total_price).to.equal(30)
    })
})
//create pizza protoype that gets price
//create html page that accepts input
//return price on html page
