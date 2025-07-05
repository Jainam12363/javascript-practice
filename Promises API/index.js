// //1)
// let p1=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value1")
// 	},1000)
// })

// let p2=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value2")
// 	},2000)
// })

// let p3=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value3")
// 	},3000)
// })


// //1.1)
// // //this will execute them one after other
// // //this after 1 sec
// // p1.then((value)=>{
// // 	console.log(value)
// // })
// // //this after 2 sec
// // p2.then((value)=>{
// // 	console.log(value)
// // })
// // //this after 3 sec
// // p3.then((value)=>{
// // 	console.log(value)
// // })

// //1.2) Promise.all()
// //this way it will create array of promises and result will be displayed when all promises are executed
// let promises_all=Promise.all([p1,p2,p3])
// promises_all.then((value)=>{
// 	console.log(value)
// })


// //2)
// let p1=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value1")
// 	},1000)
// })

// let p2=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		// resolve("Value2")
// 		reject(new Error("Error"))
// 	},2000)
// })

// let p3=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value3")
// 	},3000)
// })
// //2.1) Promise.allSettled()
// let promise_res= Promise.allSettled([p1,p2,p3])
// promise_res.then((value)=>{
// 	console.log(value)
// })


// //3)
// let p1=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value1")
// 	},55000)
// })

// let p2=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		// resolve("Value2")
// 		reject(new Error("Error"))
// 	},3000)
// })

// let p3=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value3")
// 	},1000)
// })
// //3.1) Promise.race()
// //here it will display value3 because according timer it will execute first
// let promise_res= Promise.race([p1,p2,p3])
// promise_res.then((value)=>{
// 	console.log(value)
// })

// //4)
// let p1=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value1")
// 	},55000)
// })

// let p2=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		// resolve("Value2")
// 		reject(new Error("Error"))
// 	},1000)
// })

// let p3=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value3")
// 	},3000)
// })
// //4.1) Promise.any()
// //here timer wise p2 executes first but since it is rejected p3 will be displayed
// let promise_res= Promise.any([p1,p2,p3])
// promise_res.then((value)=>{
// 	console.log(value)
// })

// //5)
// let p1=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value1")
// 	},1000)
// })

// let p2=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		// resolve("Value2")
// 		reject(new Error("Error"))
// 	},2000)
// })

// let p3=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve("Value3")
// 	},3000)
// })

// // //5.1) Promise.resolve()
// // let promise_res= Promise.resolve(6)
// // //5.2) Promise.reject()
// // let promise_res=Promise.reject(new Error("Hey this is an error"))
// promise_res.then((value)=>{
// 	console.log(value)
// })
