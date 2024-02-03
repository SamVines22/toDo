import {submitAddTask} from "./index.js";

function addTask(id) {

    console.log(id);

    const projectHolder = document.querySelector(`#project${id}`);
    //document.querySelector(".projectHolder").style.display = "none";
    const form = document.createElement("div");
    form.className = "addTask";
    form.innerHTML = `
    <form>
        <label for = "task">Task</label>
        <input type = "text" id = "task">
        <label for = "description">Description</label>
        <input type = "text" id = "description">
        <label for = "priority">Priority</label>
        <input type = "number" id = "priority">
        <label for = "date">Date</label>
        <input type = "date" id = "date">
        <button id = "addTaskSubmit" type="submit">Submit</button>
    </form>`
    projectHolder.appendChild(form);
    document.querySelector(`#add${id}`).style.display = "none";
    submitAddTask(id);

}





export {addTask}