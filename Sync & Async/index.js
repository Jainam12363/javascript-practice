
//Synchronous programming
// let a=prompt("Enter your name")
// let b=prompt("Enter your age")
// let c=prompt("Enter your gender")
// console.log(`I am ${a}, my age is ${b}, and my gender is ${c}`)

//Asynchronous programming
console.log("Start")
setTimeout(function(){
	console.log("Hey i am asynchronous")
},3000)
console.log("End")