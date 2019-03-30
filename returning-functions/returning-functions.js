
// function three(){
//     return function(){
//         return 'Inner meeee';
//     }
// }
// console.log(three());


// function two(){
//     return function(){
//         console.log('two');
//     }
// }
// let re = two();
// re();



// -------------------------------------
function sayHello (name){
    return (function(){
    console.log(`howday ${name}`)
    }('bob'));
};
// let bob = sayHello('bob');
// let dhikr = sayHello('Dhikr');
// sayHello('Ade');
// bob();
// console.log(dhikr);