import { addTask } from "./edit.js";
import {removeTask, changePri, complete} from "./index.js"
function seeProject(number) {
    document.querySelector(".header").style.display = "none";
    document.querySelector(".projectHolder").style.display = "none";
    const content = document.querySelector(".content");
    const projectDiv = document.createElement("div");
    projectDiv.id = `project${number}`;
    projectDiv.className = "projectDiv";
    let data = JSON.parse(localStorage.getItem(number));
    console.log(data.list[0]);
    console.log(data);
    const header = document.createElement("div");
    header.className = "projectHeader";
    
    const title = document.createElement("h1");
    title.id = data.name;
    title.innerText = `Project: ${data.name}`;
    header.appendChild(title);
    const addBtn = document.createElement("button");
        addBtn.id = `add${number}`;
        addBtn.className = "btn";
        addBtn.innerText = "Add Task";
        header.appendChild(addBtn);
    
    
    projectDiv.appendChild(header);
    const toDo = document.createElement("div");
    toDo.className = "toDo";
    let length = data.list.length;
    console.log(length);
    console.log(data.list);
    
    for (let x = 0; x< length; x++)
    {
        let items = data.list[x];
        let list = document.createElement("ul");
            let task = document.createElement("li");
            task.innerText = `Task: ${items.task}`;
        list.appendChild(task);
            let description = document.createElement("li");
            description.innerText = `Description: ${items.description}`;
        list.appendChild(description);
            let priority = document.createElement("li");
            priority.innerText = `Priority: ${items.priority}`;
        list.appendChild(priority);
            let date = document.createElement("li");
            date.innerText = `Date: ${items.date}`;
        list.appendChild(date);
            let complete = document.createElement("li");
            complete.innerText = `Complete: ${items.complete}`;
            list.appendChild(complete);
        toDo.appendChild(list);
      
       // toDo.appendChild(addBtn);
        
       // toDo.appendChild(removeBtn);
       let btnHolder = document.createElement("div");
        btnHolder.id = `holder${items.task}`;
        let changePriorityBtn = document.createElement("button");
            changePriorityBtn.id = `priority${number}${items.task}`;
            changePriorityBtn.className = "btn";
            changePriorityBtn.innerText = "Change Priority";
        btnHolder.appendChild(changePriorityBtn);
        let setCompleteBtn = document.createElement("button");
            setCompleteBtn.id = `complete${number}${items.task}`;
            setCompleteBtn.className = "btn";
            setCompleteBtn.innerText = "Mark Complete";
        btnHolder.appendChild(setCompleteBtn);
        let removeBtn = document.createElement("button");
            removeBtn.id = `remove${number}${items.task}`;
            removeBtn.className = "btn";
            removeBtn.innerText = "Remove Task";
        btnHolder.appendChild(removeBtn);
        toDo.appendChild(btnHolder);
        
    }
    projectDiv.appendChild(toDo);
    content.appendChild(projectDiv);

    document.querySelectorAll(".btn").forEach(function(btn) {
            btn.addEventListener("click", function() {
                let id;
                if (btn.innerHTML == "Add Task")
                {
                        id = btn.id[3];
                        //write a function for each to handle these things!
                        // input the number to get the data from storage and then edit and update!
                        addTask(id);
                        
                }
                if (btn.innerHTML == "Remove Task")
                {
                    id = btn.id[6];
                    let info = btn.id;
                    let len = btn.id.length;
                    let task = info.substring(7,len);
                    removeTask(id,task);
                }
                if (btn.innerHTML == "Change Priority")
                {
                    document.getElementById(`${btn.id}`).style.display = "none";
                    id = btn.id[8];
                    let info = btn.id;
                    let len = info.length;
                    let task = info.substring(9,len);
                    priHtml(task, id);
                    
                    
                }
                if (btn.innerHTML == "Mark Complete")
                {
                    id = btn.id[8];
                    let info = btn.id;
                    let len = info.length;
                    let task = info.substring(9,len);
                    complete(id,task);
                }
            })
    })
}

function priHtml(task, id) {
    const input = document.createElement("div");
    input.id = "priSubmit";
    const ht = ` <h3>Set new priority</h3>
    <form>
    <label for = "priority">Priority</label>
    <input type = "number" id = "priority">
    <button type = "submit" id = "newpri">Submit</button>
    </form>`;
    
    input.innerHTML = ht;
    document.getElementById(`holder${task}`).appendChild(input);
    document.getElementById("newpri").onclick = function(e) {
        e.preventDefault();
        const newPri = document.getElementById("priority").value;
        console.log(newPri);
    changePri(id,task, newPri);
    }
}



export {seeProject};