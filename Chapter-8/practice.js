// Q3

// document.getElementById("google").addEventListener("click",function(){
// 	window.location="https://www.google.com";
// 	win.focus
// })

// Q4

// this will keep fetching weather information every 3 seconds

// const fetchContent =async(url) =>{
// 	con=await fetch(url);
// 	let a=await con.json()
// 	return a;
// }

// setInterval(async function(){
// 	let url="https://official-joke-api.appspot.com/random_joke"
// 	console.log(await fetchContent(url))
// },3000)


// // Q5

	setInterval(async function(){
		document.querySelector("#bulb").classList.toggle("bulb")
	},300)