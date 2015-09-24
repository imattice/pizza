//create pizza object

describe('Pizza', function(){
    it('creates an object with toppings, pizza_size, and quantity', function() {
        var testPizza = new Pizza ('cheese', 'large', '5')
        expect(testPizza.topping).to.equal('cheese');
        expect(testPizza.pizza_size).to.equal('large');
        expect(testPizza.quantity).to.equal('5');
    })

    it('returns a price for a meat pizza', function() {
        var testPizza = new Pizza ('meat', 'small', '1')
        var total_price = testPizza.getPrice()
        expect(total_price).to.equal(30)
    })

    it('returns a price for a medium meat pizza ', function() {
        var testPizza = new Pizza ('meat', 'medium', '1')
        var total_price = testPizza.getPrice()
        expect(total_price).to.equal(12)
    })

    it('returns a price for 400 medium meat pizzas', function() {
        var testPizza = new Pizza ('meat', 'medium', '400')
        var total_price = testPizza.getPrice()
        expect(total_price).to.equal(4800
    })
})
