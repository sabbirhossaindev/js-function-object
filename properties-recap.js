var student = {
    id: 477470,
    class: "5th",
    result: 3.86,
    dep: "cmt"
}
console.log(typeof student);// Use of typeOf for object
console.log(student.class); // just class properties view output / value get
console.log(student); // full object output
student.class = '5th semester'; // properties value change / value set
console.log(student); //properties value change then full object output
