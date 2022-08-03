function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}
var total = add(45, 20);
console.log(total);

// more explore
function bringSingra(money) {
    var singraPrice = 5;
    var sum = money / singraPrice;
    return sum;
}
var myAmount = 200;
var singra = bringSingra(myAmount);
console.log('Eating singra:',singra);