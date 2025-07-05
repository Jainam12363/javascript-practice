//Chapter-7 practice set

//Q1

// let a=document.body.firstElementChild.firstElementChild
// console.log(a)
// a.style.color="red"

//or

// document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"

//Q2

//solution in html section


//Q3

// document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"

//Q4

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
	element.style.background="cyan"
})