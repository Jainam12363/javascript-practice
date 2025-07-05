//Chapter 6 pracitice set

//Question1

// let age=prompt("enter the age")
// age= Number.parseInt(age)

// const canDrive=(age)=>{
// 	return age>=18?true:false
// }

// if(canDrive(age)){
// 	alert("You can drive")
// }
// else{
// 	alert("You cannot drive")
// }

//===============================

//QUestion2

// let runAgain=true

// const canDrive=(age)=>{
// 	return age>=18?true:false
// }

// while(runAgain){
// 	let age=prompt("enter the age")
// 	age= Number.parseInt(age)

// 	if(canDrive(age)){
// 		alert("You can drive")
// 	}
// 	else{
// 		alert("You cannot drive")
// 	}
// 	runAgain=confirm("Do you want to try again?")
// }

//==============================

//Question3

// let runAgain=true

// const canDrive=(age)=>{
// 	return age>=18?true:false
// }

// while(runAgain){
// 	let age=prompt("enter the age")
// 	age= Number.parseInt(age)
// 	if(age<0){
// 		console.error("Please enter a valid age")
// 		break;
// 	}

// 	if(canDrive(age)){
// 		alert("You can drive")
// 	}
// 	else{
// 		alert("You cannot drive")
// 	}
// 	runAgain=confirm("Do you want to try again?")
// }

//==================================

//Question4

// let number=prompt("Enter a number")
// number= Number.parseInt(number)
//  if(number>4){
//  	location.href= "https://google.com"
//  }

//===================================

//Question5

let color= prompt("Enter a color")
document.body.style.background= color
