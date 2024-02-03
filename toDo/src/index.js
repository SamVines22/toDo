import './style.css';
import {compareAsc, format} from 'date-fns';
import {homepage, populateProject, projects }from './buildpage.js';
import {buttons, submit} from './buttons.js';
import { seeProject } from './seeprojects.js';
let test = format(new Date(2014,1,11), "yyyy-MM-dd");

//localStorage.clear();

function getStorage(count) {
        let data = [];
        for (let x = 0; x < count; x++){
            let gimp = localStorage.getItem(x);
            let item = JSON.parse(gimp);
            data.push(item);
            }
        if (data[0] != null)
        {
            return data;
        }
        else return [];
    }

function Storage(){
    let count;
    const startCount = function() {
      
    if (localStorage.getItem("count") == null)
    {
         count = 0;
    }
    else {
         count = localStorage.getItem("count");
    } 
    return count;
    }

    const addItem = function() {
        return count++;
    }
    const getCount = function () {
        return count;
    }

    return {addItem, getCount, startCount}
}
const memory = Storage();
let c = memory.startCount();



function make() {
    let data = getStorage(c);
    let length = memory.getCount()
    for (let x = 0; x<length; x++)
    {
        populateProject(data[x],x);
    }
}


function updateStorage(obj, num){
    const stuff = JSON.stringify(obj);
    if (num == -1) {
        let number = memory.getCount();
        localStorage.setItem(number, stuff);
        memory.addItem();
        localStorage.setItem("count", memory.getCount());
    }

    let pro = JSON.parse(localStorage.getItem(num));
    console.log(obj);
    console.log("LOOK HERE!!!!");
    console.log(obj.list);
    console.log(pro);
    localStorage.setItem(num,stuff);
    

}






function allProjects() {
    let list = []
    let data = getStorage(c);
    for (let x = 0; x < memory.getCount(); x++)
    {
        list.push(data[x].name);
    }
    const add = function(name) 
    {
        list.push(name);
        return list;
    }
    return {add, list};
    
    
}

const allPro = allProjects();




function createProject (name) {

    let list = [];
    let length = 0;
    allPro.add(name);

    const getLength = function() {
        return length;
    }

    const addLength = function() {
        return length++;
    }

    const subtractLength = function() {
        return length--;
    }


    return {name, list, getLength, addLength, subtractLength};
}



function manipulateProject(project) {
    
    let list = project.list;

    const getTask = function(task, description, priority, date, complete) {

        let data = {task, description, priority, date, complete};
        addTask(data);    
    }

    const addTask = function(data)
    { 
        list.push(data);
        project.addLength();
        return list;
    }


    const removeTask = function(item) {  
        let length = project.getLength(); 
        for (let x = 0; x< length; x++)
            {
            if (item == list[x].task)
            {        
                list.splice(`${x}`,1);
                project.subtractLength();    
                break;
            }   
        }  
        return list 
    }

    const changePriority = function (item, newPriority) { 
        const length = project.getLength();
        for (let x = 0; x<length; x++)
        {
            if (list[x].task == item)
            {
                list[x].priority = newPriority;
            }
        }
        return list;
    }

const setComplete = function(item) {
    const length = project.getLength();
    for (let x =0; x<length; x++)
    {
        if (list[x].task == item)
        {
            list[x].complete = 1;
        }
    }
    return list;
}
return {getTask, addTask, removeTask, changePriority, setComplete, list}
}


homepage();


projects(allPro);


/*const twat = createProject("twat");
manipulateProject(twat).getTask("a","b","c", "12/1", 0);
console.log(twat);
console.log(twat.list);*/

make();


document.querySelector("#addProject").addEventListener("click", buttons);


function submitForm() {
document.querySelector("#submit").addEventListener("click", function (e) {
  //  e.preventDefault();
    const name = document.getElementById("name").value;
    const task = document.getElementById("task").value;
    const desc = document.getElementById("description").value;
    const pri = document.getElementById("priority").value;
    const date = document.getElementById("date").value;
    //const pro = createProject(name);
    //  this needs to be outsourced to another function to keep all objects and methods together!!
    saveNewProject(name, task, desc, pri, date);
    //manipulateProject(pro).getTask(task,desc,pri,date, 0);
   
    
 

    });
}


document.querySelectorAll(".detailsBtn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        seeProject(btn.id);
    })
})


function submitAddTask(id) {
    document.getElementById("addTaskSubmit").addEventListener("click", function(e){
          //  e.preventDefault();
            const task = document.getElementById("task").value;
            const description = document.getElementById("description").value;
            const priority = document.getElementById("priority").value;
            const date = document.getElementById("date").value;
            const complete = 0;
            const data = {task, description, priority, date, complete}
            editTask(id,data,"add")
            
            
            
       
               
    }) 
}

//move this function to another page. Add the set complete, remove task and change priority functions to it.  On see projects.js
function editTask(id,data,edit)
{
        
        let pro = JSON.parse(localStorage.getItem(id)); 
        let proName = pro.name;
        let proList = pro.list;
        console.log(proList[0]);
        let task = proList[0].task;
        let desc = proList[0].description;
        let pri = proList[0].priority;
        let date = proList[0].date;
        let len = pro.list.length;

        const newPro = createProject(proName);
        manipulateProject(newPro).getTask(task, desc, pri, date, 0);
       
        if (len > 1)
        { 
        for (let x = 1; x < len; x++)
            {   
              
                 let task = proList[x].task;
               let description = proList[x].description;
               let priority = proList[x].priority;
                let date = proList[x].date;
                let complete = 0;
                let data1 = {task, description, priority, date, complete}
                manipulateProject(newPro).addTask(data1);
            }
        }
        
        manipulateProject(newPro).addTask(data);
        
    
    updateStorage(newPro,id);
   
        
    
}

function saveNewProject(name, task, desc, pri, date) {
    const pro = createProject(name);
    manipulateProject(pro).getTask(task,desc,pri,date, 0);
    updateStorage(pro,-1);


};


function removeTask(id,task) {
    console.log(`task is ${task}`);
    const data = JSON.parse(localStorage.getItem(id));
    let list = data.list;
    let len = data.list.length;
    for (let x = 0; x<len; x++)
    {   
        if (list[x].task == task)
        {
            list.splice(x,1);
            break;
        }
    }
   // got the element removed from the list, now create new object, add all the necessary tasks and then edit local storage.
   let len1 = list.length;
   const editPro = createProject(data.name);
   let task1 = list[0].task;
   let desc = list[0].description;
   let pri = list[0].priority;
   let date = list[0].date;
   let complete = list[0].complete;
   manipulateProject(editPro).getTask(task1, desc,pri, date, complete);
   for(let x =1; x < len1; x++)
   {
    let task = list[x].task;
    let description = list[x].description;
    let priority = list[x].priority;
    let date = list[x].date;
    let complete = list[x].complete;
    let data = {task, description, priority, date, complete}
    manipulateProject(editPro).addTask(data);
   }
    
    updateStorage(editPro,id);
}

function changePri(id, task, newpri) {
    console.log(id);
    console.log(task);
    const obj = getObj(id);
    console.log(obj);
    manipulateProject(obj).changePriority(task,newpri);
    console.log(obj);
    updateStorage(obj,id);
}

function complete(id,task) {
    console.log(id);
    console.log(task);
    const obj = getObj(id);
    console.log(obj);
    manipulateProject(obj).setComplete(task);
    updateStorage(obj,id);

}






function getObj(id) 
{
    const data = JSON.parse(localStorage.getItem(id));
    let list = data.list;
    let len1 = list.length;
   const editPro = createProject(data.name);
   let task1 = list[0].task;
   let desc = list[0].description;
   let pri = list[0].priority;
   let date = list[0].date;
   let complete = list[0].complete;
   manipulateProject(editPro).getTask(task1, desc,pri, date, complete);
   for(let x =1; x < len1; x++)
   {
    let task = list[x].task;
    let description = list[x].description;
    let priority = list[x].priority;
    let date = list[x].date;
    let complete = list[x].complete;
    let data = {task, description, priority, date, complete}
    manipulateProject(editPro).addTask(data);
   }
   return editPro
}

export {submitForm, submitAddTask, removeTask, changePri, complete}