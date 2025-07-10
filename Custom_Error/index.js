try{
	let age=prompt("Enter your age")
	age=Number.parseInt(age)
	if(age>150){
		throw new ReferenceError("This is not true")
	}
}
catch(err){
	console.log(err.name)
	console.log(err.message)
}