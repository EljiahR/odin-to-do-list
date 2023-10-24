(()=>{"use strict";function t(t,e,...n){return new class{constructor(t,e,...n){this.title=t,this.description=e,this.list=[...n]}addTask(...t){this.list=[...this.list,...t]}}(t,e,...n)}function e(t,e,n,o){return new class{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o}setTitle(t){this.title=t}setDescription(t){this.description=t}setDueDate(t){this.dueDate=t}setPriority(t){this.priority=t}}(t,e,n,o)}function n(t){t.forEach(((t,e)=>{if(!document.querySelector(`.project[data-pid='${e}']`)){const n=document.createElement("li");n.classList.add("project"),n.innerText=t.title,n.dataset.pid=e,document.querySelector("#projects").appendChild(n)}}))}function o(t,e,n="All projects",o=""){document.getElementById("project-title").innerText=n,document.getElementById("project-title").dataset.pid=o;const d=document.getElementById("content");d.innerHTML="",t.forEach((t=>{const n=document.createElement("div");n.classList.add("task"),n.dataset.tid=e.indexOf(t);const o=document.createElement("h2");o.innerText=t.title;const s=document.createElement("p");s.innerText=`Due: ${t.dueDate}`;const i=document.createElement("button");i.innerText="Edit",i.classList.add("task-edit");const c=document.createElement("button");c.innerText="Delete",c.classList.add("task-delete"),n.append(o,s,i,c),d.appendChild(n)}));const s=document.createElement("button");s.id="new-task-button",d.appendChild(s)}function d(){const t=document.getElementById("project-menu-overlay");t.classList.contains("hidden")?t.classList.remove("hidden"):t.classList.add("hidden")}function s(){const t=document.getElementById("content");if(document.getElementById("new-task-button")){document.getElementById("new-task-button").remove();const e=document.createElement("div");e.classList.add("task"),e.id="new-task-form-div";const n=document.createElement("form");n.id="new-task-form";const o=document.createElement("label");o.innerText="Title: ",o.setAttribute("for","new-task-title");const d=document.createElement("input");d.type="text",d.id="new-task-title",d.setAttribute("required","");const s=document.createElement("label");s.innerText="Description: ",s.setAttribute("for","new-task-description");const i=document.createElement("input");i.type="text",i.id="new-task-description";const c=document.createElement("label");c.innerText="Due By: ",c.setAttribute("for","new-task-due-date");const a=document.createElement("input");a.type="date",a.id="new-task-due-date",a.setAttribute("required","");const r=document.createElement("button");r.type="submit",r.value="Submit",r.innerText="Submit",r.id="task-form-submit",n.append(o,d,s,i,c,a,r),e.appendChild(n),t.appendChild(e)}else{document.getElementById("new-task-form-div").remove();const e=document.createElement("button");e.id="new-task-button",t.appendChild(e)}}let i=[],c=[];if(localStorage.getItem("projects")){const n=JSON.parse(localStorage.getItem("projects"));JSON.parse(localStorage.getItem("tasks")).forEach((t=>c.push(e(t.title,t.description,t.dueDate,t.priority)))),n.forEach(((e,n)=>{i.push(t(e.title,e.description)),e.list.forEach((t=>{const e=c.findIndex((e=>e.title===t.title));i[n].addTask(c[e])}))}))}else i.push(t("Home","home projects")),i.push(t("Odin","odin projects")),c.push(e("To-Do Project","complete this project","date","priorty")),c.push(e("Floors","lay down new floors","date","priorty")),c.push(e("Paint","paint the walls","date","priorty")),c.push(e("Kitchen","clean kitchen","date","priorty")),c.push(e("Trash","take out trash","date","priorty")),i[0].addTask(c[1],c[2],c[3],c[4]),i[1].addTask(c[0]);function a(){document.getElementById("new-task-button").addEventListener("click",(t=>{t.preventDefault(),s(),document.getElementById("new-task-form-div")&&document.getElementById("new-task-form").addEventListener("submit",(t=>{t.preventDefault(),function(){const t=document.querySelector("#new-task-title").value,n=document.querySelector("#new-task-description").value,d=document.querySelector("#new-task-due-date").value,s=c.push(e(t,n,d,""))-1,a=document.getElementById("project-title").dataset.pid;""!==a?(i[a].addTask(c[s]),o(i[a].list,c,i[a].title,a)):o(c,c)}(),l()}))}))}function r(){document.querySelectorAll(".task-edit").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),console.log("edit")}))})),document.querySelectorAll(".task-delete").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault();const e=c.findIndex((t=>t.title===c.title));c.splice(e,1),t.target.parentElement.remove()}))}))}function l(){localStorage.setItem("projects",JSON.stringify(i)),localStorage.setItem("tasks",JSON.stringify(c)),console.log(c),console.log(JSON.parse(localStorage.getItem("tasks")))}document.getElementById("add-project").addEventListener("click",(t=>{t.preventDefault(),d()})),document.getElementById("project-menu-overlay").addEventListener("click",(t=>{"project-menu-overlay"===t.target.id&&d()})),document.getElementById("project-form").addEventListener("submit",(e=>{e.preventDefault(),function(){const e=document.querySelector("#project-name").value,s=i.push(t(e,""))-1;n(i),d(),document.getElementById("project-form").reset(),o(i[s].list,c,i[s].title,s),r(),a()}(),l()})),document.querySelector("#projects").addEventListener("click",(t=>{t.target.dataset.pid?o(i[t.target.dataset.pid].list,c,i[t.target.dataset.pid].title,t.target.dataset.pid):o(c,c),a()})),document.getElementById("content").addEventListener("click",(t=>{"content"===t.target.id&&document.getElementById("new-task-form-div")&&(s(),a())})),document.getElementById("content").addEventListener("click",(t=>{let e=t.target;const n=e.parentElement;"new-task-button"!=e.id&&"task-form-submit"!=e.id&&(n.classList.contains("task")&&(e=n),e.classList.contains("task")&&(e.classList.contains("expand")?(e.classList.remove("expand"),function(t){const e=document.querySelector(`[data-tid="${t}"]`);e.removeChild(e.lastChild)}(e.dataset.tid)):(function(t,e){const n=document.createElement("p");n.innerText=t,document.querySelector(`[data-tid="${e}"]`).appendChild(n)}(c[e.dataset.tid].description,e.dataset.tid),e.classList.add("expand"))))})),n(i),o(c,c),a(),r()})();