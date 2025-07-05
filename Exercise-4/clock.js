
const Clock=()=>{
	let a=new Date()
	let h=a.getHours()
	let m=a.getMinutes()
	let s=a.getSeconds()
	let d=a.getDate()
	let mo=a.getMonth()+1
	let y=a.getFullYear()
    let dayIndex=a.getDay()
	let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	let day=days[dayIndex]

	console.clear();
	console.log(`Time: ${h}:${m}:${s}`)
	console.log(`Date: ${d}-${mo}-${y}`)
	console.log(`Day: ${day}`)	
}

let ans=setInterval(Clock,1000)