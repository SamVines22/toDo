function homepage() {
   const content = document.querySelector(".content");
 
        let html =  `
         <div class = "header">
                <div id = "info">Here are your projects!</div>
                <div id = "btns"><button id = "addProject">Add Project</button></div>
                 
         </div>
         <div class = "projectHolder">
         </div>`

         
         const form = document.createElement("div");
         form.style.display = "none";
         form.className = "addProject";
         form.innerHTML = `
         <form>
             <label for = "name">Project Name</label>
             <input type = "text" id = "name">
             <label for = "tast">Task</label>
             <input type = "text" id = "task">
             <label for = "description">Description</label>
             <input type = "text" id = "description">
             <label for = "priority">Priority</label>
             <input type = "number" id = "priority">
             <label for = "date">Date</label>
             <input type = "text" id = "date">
             <button id = "submit" type="submit">Submit</button>
         </form>`
         content.appendChild(form);
         
         
         
         

    
       content.innerHTML = html;
           
}

function projects(project){
       const list = project.list;
       const length = list.length;
       const container = document.querySelector(".projectHolder");
       for (let x=0; x<length; x++)
       {      
              let pro = document.createElement("div");
              pro.className = "project"
              pro.id = `${list[x]}`;
              pro.innerText = list[x];
              container.appendChild(pro);
       }
}


function populateProject(name,id) {
       const list = name.list;
      // const len = list.length;
       const projectName = name.name;
       const projectElement = document.getElementById(`${projectName}`);
       const itemHolder = document.createElement("div");
       itemHolder.className = "itemHolder";
       /*for (let x=0; x<len;x++){      
              const itemHeader = document.createElement("div");
              itemHeader.className = "itemHeader";
              itemHeader.innerText = `${list[x].task}`;
              itemHolder.appendChild(itemHeader);
              const itemDetails = document.createElement("div");
              itemDetails.className = "itemDetails";
              itemDetails.innerHTML = `due date: ${list[x].date} <br> priority: ${list[x].priority}`;
              itemHolder.appendChild(itemDetails);
       }*/
       const btn = document.createElement("button");
       btn.id = `${id}`;
       btn.className = "detailsBtn";
       btn.innerText = "Details";
       projectElement.appendChild(itemHolder);
       projectElement.appendChild(btn);
        
}

export {homepage, populateProject, projects}