import {submitForm} from './index.js' ;

function buttons() {
    const content = document.querySelector(".content");
    document.querySelector(".projectHolder").style.display = "none";
    const form = document.createElement("div");
    form.className = "addProject";
    form.innerHTML = `
    <form>
        <label for = "name">Project Name</label>
        <input type = "text" id = "name">
        <label for = "task">Task</label>
        <input type = "text" id = "task">
        <label for = "description">Description</label>
        <input type = "text" id = "description">
        <label for = "priority">Priority</label>
        <input type = "number" id = "priority">
        <label for = "date">Date</label>
        <input type = "date" id = "date">
        <button id = "submit" type="submit">Submit</button>
    </form>`
    content.appendChild(form);
    document.querySelector("#addProject").removeEventListener("click", buttons);
    submitForm();
}




export {buttons};



