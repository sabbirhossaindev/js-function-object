var soppingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
console.log(soppingCard);

// 1.get the property value
// var penCount = shoppingCart.pen;

// 2.alternative System get the property value
// var penCount2 = shoppingCart['pen'];

var properties = Object.keys(soppingCard); // just keys gula output dibaaa
console.log(properties);
var propertiesValue = Object.values(soppingCard); // just values gula output dibaaa
console.log(propertiesValue);

// 3.variable diya property & value get the property value
var propertyName = 'mouse';
var propertiesValue = soppingCard[propertyName];
console.log(propertyName, propertiesValue);

// set property values
shoppingCart.mouse = 15; // step 1
console.log(shoppingCart);
shoppingCart['mouse'] = 29;// step 2
console.log(shoppingCart);
shoppingCart[propertyName] = 89;// step 3
console.log(shoppingCart);