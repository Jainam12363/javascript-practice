// //1)
// let url="https://poetrydb.org/title/Ozymandias/lines.json"
// let response=fetch(url)
// response.then((v)=>{
// 	return v.json()
// }).then((res)=>{
// 	console.log(res)
// 	ihtml=""
// 	const parent = document.body;
// 	//the below code is print each poem from the url
// 	res[0].lines.forEach((line) => {
// 		ihtml+=`
// 			<div class="cardContainer"> 
// 	          <p style="font-weight: bold;">Welcome to shayari bazaar</p>
//     		  <p>${line}</p>
// 	        </div>
// 		`
// 	});
// 	parent.innerHTML+=ihtml
// })


// //2)
// let a =prompt("Enter your note")
// localStorage.setItem("Note",a)

// //3)
// let n= localStorage.getItem("Note")
// alert("Your note is "+n)


//4)
let c= confirm("Do you want to delete your note")
if(c){
	localStorage.removeItem("Note")	
}