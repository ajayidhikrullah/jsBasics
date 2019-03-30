let bus = {
    maker: "danfo",
    seater: '14',
    year: 'lt12',
    model: 2019,
    getPrice: function(){
        return 5000
    },
    printDesc: function(){
        console.log(this.maker + ' ' + this.model);
    }
}

bus.printDesc(); 
console.log(bus.year);
console.log(bus.model);
// console.log(bus['model']);
// console.log(bus[5]);

//array of Object
let c = {
    myproperty: [
        {d: 'Heloo'},
        {e: 'How'},
        {f: 'are'},
        {e: 'you?'},
    ]
};
console.log(c);
// console.log(c.myproperty[2]);



