//basic promise working

// let promise=new Promise(function(resolve,reject){
// 	alert("Hello inside promise")
// });
// console.log("Hello1")
// setTimeout(function(){
// 	console.log("Hello inside set timer")
// },2000)
// console.log("Hello2")


//resolve inside promise
let promise=new Promise(function(resolve,reject){
	alert("Hello inside promise")
	resolve(56)
});

console.log("Hello1")
setTimeout(function(){
	console.log("Hello inside set timer")
},2000)
console.log("Hello2")

console.log(promise)