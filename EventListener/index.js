//this is simple execution

// btn.addEventListener('click',function(e){
// 	alert("hello 1")
// })
// btn.addEventListener('click',function(e){
// 	alert("hello 2")
// })


let x=function(e){
	alert("hello 1")
}

let y=function(){
	alert("hello 2")
}


btn.addEventListener('click',x)

btn.addEventListener('click',y)

let a= prompt("Do you want to execute x")

//here if no is entered then when we click button it wont execute x that is hello 1
if(a=="no"){
	btn.removeEventListener('click',x)
}
