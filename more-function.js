function getAverage(assignment1, assignment2, assignment3) {
    var total = assignment1 + assignment2 + assignment3;
    var average = total / 3;
    return average;
}
const assign1Marks = 60;
const assign2Marks = 59;
const assign3Marks = 60;

var myAverage = getAverage(assign1Marks, assign2Marks, assign3Marks);
console.log(myAverage);

//
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
// const result1 = add(12, 13);
// const result2 = add(44, 54);
// const total = add(result1, result2);
add(25, 50);