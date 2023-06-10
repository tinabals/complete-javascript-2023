const damilola ={
    firstName: 'Damilola',
    lastName : 'Balogun',
    birthYeah : 1996,
    job : 'teacher',
    friends : ['Micheal', 'peter', 'Simon'],
    hasDriversLicense : true,

    // calcAge : function(birthYeah){
    //     return 2037 - birthYeah
    //     //this works.... because it is an expression..
    //     // so functions work in objects too
    // },
    
    // function calcAge(birthYeah){
    //     return 2037 - birthYeah
//   this wouldnt work here, it has to be an expression
    // }

    // calcAge : function(){
    //     console.log(this)
    //     return 2037 - this.birthYeah
    // }
    calcAge : function(){
        this.age = 2037 - this.birthYeah
        return this.age
    },
    getSummary: function(){
       return `${this.firstName} is a ${this.calcAge()} year old and he has ${this.hasDriversLicense ? `a` : `no`} drivers license`
    }

    
}
console.log(damilola.calcAge())

// console.log(damilola.age)
console.log(damilola.getSummary())
// console.log(damilola['calcAge']()) ///it has to be a string 


//Arrays are special kind of objects that have methods that can manipulate them thats why they can methods as well

