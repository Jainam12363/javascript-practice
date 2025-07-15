// //go to inspect-> applications-> localStorage

// localStorage.setItem("USN","4CS041")


let key= prompt("Enter the key")
let value= prompt("Enter the value")

//setItem
localStorage.setItem(key,value)

//getItem
console.log(`The value at ${key} is ${localStorage.getItem(key)} `)


//removeItem

if(key=="red" || key=="blue"){
	localStorage.removeItem(key)
}

//clear

if(key==0){
	localStorage.clear()
}