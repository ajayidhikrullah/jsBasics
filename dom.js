//changeing t=some html tags and values
// document.title = 'I got Changed';

// console.log(document.getElementById('id_one'));
// console.log(document.getElementsByClassName('class_one'))

//bette way of selecting html element
// const myElement = document.querySelectorAll('#id_one')
// console.log(myElement);
// <!-- changing the cntent in the tags -->

//using normal function
/*
const myPElement = document.querySelectorAll('p');
// myPElement.textContent = 'I am chnged now ooo';

myPElement.forEach(function(p) {
    this is just to change d text content
    p.textContent = 'Now i am changed with textconte and LoOPP'
})
*/
/*
// lets use arrow function
myPElement.forEach((p) => { p.textContent = 'I am now changed oooo using a=lop and arow funct'})
console.log(myPElement);
*/
//HOW TO ADD ELEMTN IN HTML
// select it before chaning or adding it
/*
const myNewP = document.createElement('h1');
myNewP.textContent = 'I am a new h1 here, via JS ooo';
//selecet where i wanna add it
document.querySelector('body').appendChild(myNewP);

console.log(myNewP);
*/



//eventlistener, and making things to to do something
// select d tag and tie it up with eventlistener
/*
document.querySelector('button').addEventListener('click', (event) => {
    // console.log(event)
    event.target.textContent = 'I was Punched';   
})*/

document.querySelector('#myForm').addEventListener('input', (event) => {
    console.log(event.target.value);
});