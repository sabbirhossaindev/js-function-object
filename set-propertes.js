var soppingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
console.log(soppingCard);

// get the property value
// var penCount = shoppingCart.pen;
// alternative System get the property value
// var penCount2 = shoppingCart['pen'];

var properties = Object.keys(soppingCard); // just keys gula output dibaaa
console.log(properties);
var propertiesValue = Object.values(soppingCard); // just values gula output dibaaa
console.log(propertiesValue);