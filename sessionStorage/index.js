// sessionStorage.setItem("name","jainam")

// // //go to inspect-> applications-> sessionStorage



// let key= prompt("Enter the key")
// let value= prompt("Enter the value")

// //setItem
// sessionStorage.setItem(key,value)

// //getItem
// console.log(`The value at ${key} is ${sessionStorage.getItem(key)} `)


// //removeItem

// if(key=="red" || key=="blue"){
// 	sessionStorage.removeItem(key)
// }

// //clear

// if(key==0){
// 	sessionStorage.clear()
// }


//this will trigger event when value value for a key is changed in localStorage
window.onstorage=(e)=>{
	alert("changed")
	console.log(e)
}

	
// //type this first
// localStorage.setItem("Game","Cricket")
// // //then type this
// localStorage.setItem("Game","Football")