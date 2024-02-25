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
    let inputElement: HTMLInputElement = document.getElementById('nameInput') as HTMLInputElement;
    let inputValue: string = inputElement.value;
    console.log('Input Value:', inputValue);
}

function abc() {
    var inputValue: string = (document.getElementById('name') as HTMLInputElement).value;
    console.log(inputValue);
    if (inputValue === 'this') {
        alert("Your value is " + inputValue + " in if condition");
    } else {
        alert("Your value is  " + inputValue + " in else condition");
    }
}

function test()
{
    var textentered : string = (document.getElementById('select') as HTMLInputElement).value;
    alert ("your value is " +textentered);
}