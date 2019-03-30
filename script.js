// // ES5 AND ES6
// // Variables: var and let
// var howMuch = '200';
// howMuch = howMuch * 2;
// console.log(howMuch);
// // the above code print out '400';

// // now lets convert "How much" to a string and add dollar symbol'$' on the beginning
// howMuch = '$' + String(howMuch);
// console.log(howMuch);
// // $400



// ===============================
// an educational management lecturer sells textbooks @ 1000, can student afford it.
/*
const textBookPrice = 1000;

var myAccount = 2000; //actually I dont even have upto this
// lets check if d student can get d handout
if (textBookPrice > myAccount) {
    console.log('You might carry this course oh')
    // if that condition aint met, then do this below...
} else{console.log('I am eventually getting the book.')}
// this prints "I am eventually getting the book"

console.log(typeof(textBookPrice));
// print number
*/

// VARIABLE MUTATION AND TYPE COERCION
/*
let name = "John";
let age = 50;
console.log(name + age); //print john50
console.log(age + age); //print 100
console.log(name.length);
// we cn declare a value down
let job, isMarried; //declaring an empty variable
console.log(job); //print out Undefined

job = 'Lecturer';
isMarried = false;
// Type Coercion between a string, number and boolean
// JS convert each data types to string automatically
console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married?' + isMarried + '.');

// you can declare many variables in one statement
let naijaPres = "PMB", vicePres = "PYO", senatePres = "DBS";
console.log(naijaPres + ' is working hand in hand with ' + vicePres + ' we hope the ' + senatePres + 'also work hand in hand with them');

// getting data to the console
let country = prompt('what is the country Name?');
console.log(country + ' go BETTER!!!');

// alert(country);
// ============changing the value of variable
// is called MUTATION
// now let's mutate the naijapres and vicePres above
// we will not declare the variables again as we have done dat earlier
naijaPres = 'Atiku', vicePres = 'OBI', senatePres = "Saraki";

console.log(naijaPres + ' is working hand in hand with ' + vicePres + 'to unseat Buhari');
// JS autotically convert one datatype to another datatype (Type coercion)

*/

// OPERATORS
// operator works with Pecedence, just like BODMAS
// the higher the precedence, the higher their priority
// let now = 2019;
// let birthYear = now - 50; //2019 - 50
// birthYear = now - 26 * 2; //1967
// console.log(birthYear);

// ---------------------------------
// let johnAge = 50, markAge = 50;
// johnAge =  markAge = (2 + 3) * 4 - 6;
//johnAge = markAge = 26;
//johnAge = 26


// if else


// BOOLEAN LOGIC AND SWITCH OPERATOR
// this is a process of taking decisions
// var age = 20;
// if (age < 20) {
//     console.log('John is a teenager');
// } else if (age >= 20 && age < 20) {
//     console.log('John is a Young man');
// } else {
//     console.log('John is a man')
// }


// switch case for decision
/*
var job = 'teacher';
job = prompt('What does John do? ');
switch (job) {
    case 'teacher':
        console.log('john teaches kids');
        break;
    case 'driver':
        console.log('John drives a car in Jos');
        break;
    case 'cop':
        console.log('john helps fight crime')
        break;
    default:
        console.log('John does something else');
}
// the above prints JOHN TEACHES KIDS

// example

let user = prompt('Whats your name')
let food = prompt('Welcome ' + user + '!.' + 'Which swallow do you want?'); //takes age from users
switch (food) {
    case 'Eba':
        document.write('Eba is $500 per plate and it is available');
        break;
    case 'Semo':
        document.write('Not available');
        break;
    case 'pounded Yam':
        document.write('Always available and it is 2000$');
        break;
    case 'Akpu':
        document.write('Fufu is available, and it cost $600');
        break;
    default:
        alert('Please type the corect food');
}
*/
// calculate the week day name
// var dayOfTheWeek = prompt('Whats the day? ')
/*
function theDay(){ 
    var day;
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        console.log(day);
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'saturday';
    }
    document.getElementById('theDate').innerHTML = 'Today is ' + day;
}*/

// switch Case
/*the break can be skipped, and so that two cases can run

const inecTraining = prompt("Welcome! How many days for the Training?");
switch (inecTraining) {
    case "1":
        friday = 'Friday';
    case '2':
        'Saturday';
    case "3":
        'Sunday'
        document.write('You have been booked for 3 days, starting from' + 1);
        break;
    case "4":  
    case "5":
    case "6":
        document.write('')
        break;
    default:
        document.write('Wrong House');
}
*/

// let a = prompt('whats d num?');
// switch (a) {
//     case 2:
//     case 10:
//         document.write("How far");
//         break;
//     case 42:
//         document.write('yeah');
//         break;
//     default:
//         document.write('None');
// }








/*


// LOOPS
// is  a way of repeating  set of actions, so far a condition is true
// each time a block is executed, it is called Iteration
// use conditionals to determine if the loop should keep going or stop
// forms of loop
/*while loop, do...while loop*/
/*
const numOfCorpers = 1000;
// while (numOfCorpers > 0) /*checking if the remaining copers are more than 0 {
//     document.write('Welcome! <br> Kindly Thumbprint'); //then do this
//     numOfCorpers = numOfCorpers - 1;
// }

// do while loop
/*
do {
    document.write('Come for your clearance');
    numOfCorpers = numOfCorpers - 1;
} while (numOfCorpers > 0);
*/

// var TAX_RATE =0.08; //this print 8% sales tax
// var amount = 99.99;
// amount = amount * 2;
// amount = amount + (amount * TAX_RATE);

// document.write(amount); //215.9784

// document.write(amount.toFixed(2)); //print '215.98'

// const usefulness
/*const is a process of rigging too much occurencies of a value.,once u set const, u cant change d value*/



// ===============DOM===========
// let user_name = prompt('Please, provide your Username...'); //get the user name from the user
// returns mesage to user after getting d username
// let x = document.getElementById('dom').innerHTML = `Hello, Welcome ${user_name}`;
// document.write(x);

// ===change color

//     //changes the background color to chocolate once loaded
//     document.getElementById('header').style.background = 'chocolate'; //changes background color
//      // this changes the text color to chocolate
//      document.getElementById('header').style.color = 'white';
//      // hide and show form
// // this
//      function btn() {
//         // e.preventDefault();
//         // return alert('');
//         document.getElementById('btn').style.visibility = 'hidden';
//}

/*
//==============checking the numbers of links
document.getElementById('display').innerHTML = 'Number of Links here are: ' + document.links.length;
document.getElementById('display').style.border = '2px solid grey';
document.getElementById('display').style.color = 'lemon';
document.getElementById('display').style.fontSize = '1.5em';


//=======================DOM DAY 7
// querying the DOM
//circle through the html collection and add some styles etc.
let link = document.getElementsByTagName('a');
console.log(link);
for (i =0; i < link.length; i++){ //circle through the collection for as long as i is less than 0
    console.log(link[i]);
}

// Query Selector
const wrapper = document.querySelector("#header"); //select the header and it content
console.log(wrapper); //print (<div id='header'>...</div>)

//grab the whole element
// print [input#name, input#password, button#btn]
let lab = document.querySelectorAll('#name, #password, #btn');
console.log(lab);

//Lets add some content to the html isntead of over writing the content there
const links = document.querySelector('#links a');
links.innerHTML = '<h2>Click to Navigate</h2>';

console.log(links);

//Node
const header = document.querySelector('#header');
console.log('The header node.type is:', header.nodeType);
// print The header no type is 1
const form = document.querySelector('#main-form');
console.log('The form node type is: ', form.nodeName);
//returns the form nodeName is DIV

console.log('does this header has a childNode?', header.hasChildNodes());
//print true because it has a child node.
//lets get the parent node~
let userform = document.querySelector('#main-form');
console.log('This is d parent node', userform.parentNode);
//print the parent element

*/

//////////////////////
// let userState = Prompt(['Your state please? ']);
// userState.push = citiesToCheck;
let citiesToCheck = ['Osun', 'Ondo', 'Ekiti', 'PortHarcourt', 'Borno'];//array of state to be looped through
// if (userState === citiesToCheck[1]) {
//     console.log('confirm ni')    
// }
let cleanestCity = citiesToCheck[1]; //set a state to be the most cleanest
for (i = 0; i < citiesToCheck.length; i++){ //loop through
    // console.log(cleanestCities[i]);
    if (citiesToCheck[i] === cleanestCity){ //check d condition; if after it loops through d states, and satisfies the cleanestCity.
        //if it satisfies; this will print 'Ondo is most cleanest among the Nigerian state'
        // console.log(`${citiesToCheck[i]} is most cleanest among the Nigerian state`);
    } else if(citiesToCheck[i] !== cleanestCity){
        // console.log(`${citiesToCheck[i]} is not clean enough`);
    }
}


///////////////DOOOOOOOOM
// console.log(document);
