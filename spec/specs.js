//create pizza object

describe('Pizza', function(){
    it('creates an object with toppings, pizza_size, and quantity', function() {
        var testPizza = new Pizza ('cheese', 'large', '5')
        expect(Pizza.toppings).to.equal('cheese');
        expect(Pizza.pizza_size).to.equal('large');
        expect(Pizza.quantity).to.equal('5');
    })
})
//create pizza protoype that gets price
//create html page that accepts input
//return price on html page
