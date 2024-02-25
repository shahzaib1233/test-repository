console.log("hello world");
// var i = 0;
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// var a = 0;
// while(a<=10)
// {
//     console.log(a);
//     a++;
// }
// let fruits: string[] = ['apple', 'banana', 'orange'];
// let [first, second, third] = fruits;
// console.log(first); // Output: apple
// console.log(second); // Output: banana
// console.log(third); // Output: orange
// let a  : string = 'shahid';
// if(a == 'shahid'){
// console.log("the name is " + a);
// }
// else{
//     console.log("the name is not shahid" + a);
//     }
// let fruit : string[] = ['apple' , 'naer' , 'me'];
// fruit.forEach(function (element) {
//     console.log(element);
// });
function displayInputValue() {
    var inputElement = document.getElementById('nameInput');
    var inputValue = inputElement.value;
    console.log('Input Value:', inputValue);
}
function abc() {
    var inputValue = document.getElementById('name').value;
    console.log(inputValue);
    if (inputValue === 'this') {
        alert("Your value is " + inputValue + " in if condition");
    }
    else {
        alert("Your value is  " + inputValue + " in else condition");
    }
}
function test() {
    var textentered = document.getElementById('select').value;
    alert("your value is " + textentered);
}
