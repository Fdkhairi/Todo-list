let toDoList =[];///empty array to store what ever is typed in the input bar

let inputBox = document.querySelector(".search input");//input box

let inputBtn = document.querySelector(".addData");//input button


let deleteBtn=document.querySelector('.deleteData')//delete button

let outputList= document.querySelector(".output ul");


inputBox.addEventListener('keydown',function(event){//when enter is pressed input box values are entered 
  
  if(event.key==='Enter'){
    task=inputBox.value.trim();
    if(task !==''){
    toDoList.push(task),
    inputBox.value="",
    displayTask();
    }  
}
});

inputBtn.addEventListener("click",()=>{//input button functions whenever add is pressed data is added 
    let task=inputBox.value.trim();//store dvalue typed in the box 
    
    if(task!==''){
    toDoList.push(task);//task is pushed in the to do list empty array
    inputBox.value="";//inpout box is reset again to zero
    displayTask();//tasks are displayed by running the function diplayTask(); in the event listener
    }
});

function displayTask(){//task is displayed using the following function
    outputList.innerHTML="";//first the ul made is emptied 
    toDoList.forEach(task =>{//using for each loop we go through each task 
    let listItem = document.createElement('li');
    listItem.innerHTML=`<input type='checkbox' class ='delete-checkBox'></input>`+task;

    outputList.appendChild(listItem);
});

}
deleteBtn.addEventListener("click",()=>{

    let checkBox=document.querySelectorAll('.delete-checkBox');
   checkBox.forEach((checkBox,index)=>{
    if (checkBox.checked) {
        toDoList.splice(index, 1);
    }
 
   });
displayTask();
});

