//Fetch API requires two .then
//here p is a promise
let p= fetch("https://poetrydb.org/title/Ozymandias/lines.json")
p.then((value)=>{
	console.log(value.status)
	console.log(value.ok)
	console.log(value.headers)
	// // it can either return text or in json format
	// return value.text()
	return value.json()
}).then((value1)=>{
	console.log(value1)
})