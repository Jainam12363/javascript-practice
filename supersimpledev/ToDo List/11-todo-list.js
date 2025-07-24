const todoList=[]

function addTodo(){
	const inputElement= document.querySelector('.js-name-input')	;
	const name= inputElement.value;
	todoList.push(name);
	console.log(todoList);
	inputElement.value='';
}


const todoList1=[{
		name:'make dinner',
		dueDate:'2022-12-22'
	},{
		name:'wash dishes',
		dueDate:'2022-12-29'
	}];

function totododo(){

	let todoListHTML ='';

	for(let i=0;i<todoList1.length;i++){
		const todo = todoList1[i];
		const name=todo.name;
		const dueDate=todo.dueDate;
		const html= 
			`<p>
				${name} ${dueDate}
				<button onclick="
					todoList1.splice(${i},1);
					totododo();
					">Delete</button>
			</p>`;
		todoListHTML+=html;	
	}
	console.log(todoListHTML);

	document.querySelector('.js-todo-list').innerHTML = todoListHTML; 

}


function addTodo1(){
	const inputElement1= document.querySelector('.js-name-input1')	;
	const name1= inputElement1.value;
	const dateInputElement= document.querySelector('.js-due-date-input');
	const dueDate = dateInputElement.value;
	todoList1.push({
		name:name1,
		dueDate:dueDate
	});
	console.log(todoList1);
	totododo();
	inputElement1.value='';
}