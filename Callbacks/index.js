//1) This is callback function initial basic understanding

// function loadScript(src){
// 	let script=document.createElement("script")
// 	script.src=src
// 	script.onload=function(){
// 		console.log("The script is loaded with SRC: "+ src)
// 	}
// 	document.body.appendChild(script)
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")


//2) Here a function can be sent as argument which will be executed when the main function is executed. This is callback

// function loadScript(src, callback){
// 	let script=document.createElement("script")
// 	script.src=src
// 	script.onload=function(){
// 		console.log("The script is load with SRC: "+ src)
// 		callback()
// 	}
// 	document.body.appendChild(script)
// }
// function hello(){
// 	alert("Hello world")
// }
// function goodMorning(){
// 	alert("goodMorning")
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",hello)

//3) If we want to pass something in the callback function then:

// function loadScript(src, callback){
// 	let script=document.createElement("script")
// 	script.src=src
// 	script.onload=function(){
// 		console.log("The script is load with SRC: "+ src)
// 		callback(src)
// 	}
// 	document.body.appendChild(script)
// }
// function hello(src){
// 	alert("Hello world"+src)
// }
// function goodMorning(src){
// 	alert("goodMorning"+src)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",hello)

//4) sometimes there can be error like in below code in loadScript where i am passing src link i have wrong link.
//so for that on error function is used

function loadScript(src, callback){
	let script=document.createElement("script")
	script.src=src
	script.onload=function(){
		console.log("The script is load with SRC: "+ src)
		callback(null,src) //whenever the script will run successfully then the error will be null
	}
	script.onerror=function(){
		console.log("Error loading the script with SRC: "+src)
		callback(new Error("src got some error"))
	}
	document.body.appendChild(script)
}
function hello(error, src){
	if(error){
		console.log(error)
		return
	}
	alert("Hello world"+src)
}
function goodMorning(error, src){
	if(error){
		console.log(error)
		return
	}
	alert("goodMorning"+src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",goodMorning)  //i have changed the url to something which will give error


