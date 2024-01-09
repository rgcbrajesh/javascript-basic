let score="33q"; // when changing the value in in number but but showing NaN 
console.log(score) // value = 33q
let valueInNumber = Number(score)
console.log(typeof valueInNumber)  // changing type = number 
console.log( valueInNumber)  // NaN = not a number


let score1=undefined; // when changing the value in in number but but showing NaN 
console.log(score1)  // value = undefined
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1) // changing type = number
console.log( valueInNumber1) // NaN = not a number


let score2=null; // when changing the value in in number but but showing NaN 
console.log(typeof score2) // value = Null
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)  // changing type = number
console.log( valueInNumber2)  // value = 0


// "33" =>33
//  "33abc" => NaN
// true =>1  false =>0
