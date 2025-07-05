
function loadScript(src){
	return new Promise((resolve,reject)=>{
		let script=document.createElement("script")
		script.src=src
		script.onload=function(){
			resolve(src)
		}
		script.onerror=function(){
			reject(new Error("Failed to load script: "+src))
		}
		document.body.appendChild(script)
	})	
}

let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")  

// p1.then((value)=>{
// 	alert("Script is loaded successfully: "+value)
// }).catch((error)=>{
// 	console.log(error)
// 	alert("Script failed to load")
// })


//this is what promises chaining is. We can add as many .then in this as we want
p1.then((value)=>{
	alert("Script is loaded successfully: "+value)
	return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
	console.log("Second script ready")
}).catch((error)=>{
	console.log(error)
	alert("Script failed to load")
})

