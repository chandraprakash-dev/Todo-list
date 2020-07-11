!function(e){var t={};function o(n){if(t[n])return t[n].exports;var d=t[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,o),d.l=!0,d.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)o.d(n,d,function(t){return e[t]}.bind(null,d));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=function(){const e=[];return{add:function(t){e.push(t)},remove:function(t){let o=e.findIndex(e=>e.getName()===t);e[o].getTodos().forEach(e=>d.remove(e.getTitle())),e.splice(o,1)},getProject:function(t){return e.find(e=>e.getName()===t)},getList:function(){return e}}}(),d=function(){const e=[];return{add:function(t){e.push(t)},remove:function(t){let o=e.findIndex(e=>e.getTitle()===t);e.splice(o,1)},getTodo:function(t){return e.find(e=>e.getTitle()===t)},getList:function(){return e}}}();function r(e,t,o,d="Home"){let r,c=e,l=t,s=o,i=d,a=[],u=!1;function p(e){if(i===e)return;console.log(i);let t=n.getProject(i);console.log(t.getTodos());let o=t.getTodos().findIndex(e=>e.getTitle()===c);console.log(o),t.getTodos().splice(o,1),i=e;let d=n.getProject(i);d.getTodos().push(this),console.log(d.getTodos())}return{edit:function(e,t,o,n){c=e,l=t,s=o,p(n)},moveToProject:p,addNotes:function(e){r=e},reschedule:function(e){l=e},setPriority:function(e){s=e},addToChecklist:function(e){a.push(e)},markAsCompleted:function(){console.log(a),a.every(e=>e.isCompleted())?(u=!0,console.log(`marked ${this} as completed`)):console.log("please complete all todos in checklist before marking the todo as complete")},getTitle:function(){return c},getNotes:function(){return r},getDueDate:function(){return l},getPriority:function(){return s},getProjectName:function(){return i},getCheckList:function(){return a},isCompleted:function(){return u},getTodo:function(){return{title:c,notes:r,dueDate:l,priority:s,projectName:i,checkList:a,completed:u}}}}const c={edit:(()=>{let e=document.createElement("p");return e.classList.add("edit-todo"),e.textContent="Edit Todo",e})(),del:(()=>{let e=document.createElement("p");return e.classList.add("delete-todo"),e.textContent="Delete Todo",e})(),notes:(()=>{let e=document.createElement("p");return e.classList.add("todo-notes"),e.textContent="Add notes",e})(),move:(()=>{let e=document.createElement("p");return e.classList.add("todo-move"),e.textContent="Move to project",e})(),reschedule:(()=>{let e=document.createElement("p");return e.classList.add("todo-reschedule"),e.textContent="Reschedule",e})(),priority:(()=>{let e=document.createElement("p");return e.classList.add("todo-priority"),e.textContent="Set priority",e})(),checklist:(()=>{let e=document.createElement("p");return e.classList.add("todo-checklist"),e.textContent="Add to checklist",e})(),mark:(()=>{let e=document.createElement("p");return e.classList.add("todo-mark"),e.textContent="Mark as completed",e})()};var l=function(){let e=document.createElement("div");return e.classList.add("dropdown"),e.appendChild(function(){let e=document.createElement("p");return e.classList.add("dropbtn"),e.textContent="...",e.addEventListener("click",i.renderDropdown),e}()),e.appendChild(function(){let e=document.createElement("div");e.classList.add("dropdown-content"),e.id="myDropdown";for(let t in c)e.appendChild(c[t]);return e}()),e};const s=document.querySelector("#todos");const i={renderProjectHeading(e){console.log(e);const t=document.createElement("h2");t.classList.add("todo-heading"),t.textContent=e,s.appendChild(t)},renderAddTodo(){const e=document.createElement("div");e.classList.add("add-todo");const t=document.createElement("p");t.classList.add("todo-plus"),t.textContent="+",e.appendChild(t);const o=document.createElement("p");o.classList.add("todo-text"),o.textContent="Add todo",e.appendChild(o),s.appendChild(e)},render(e){const t=s.querySelector(".add-todo");console.log("todo is rendering"),console.log(e),console.log(s);let o=document.createElement("div");o.classList.add("todo"),o.appendChild(function(){let e=document.createElement("p");return e.classList.add("todo-circle"),e.textContent="o",e}()),o.appendChild(function(e){let t=document.createElement("h3");return t.classList.add("project-name"),t.textContent=e,t}(e.getTitle())),o.appendChild(l()),s.insertBefore(o,t)},renderDropdown(){console.log("ok");const e=s.querySelector("#myDropdown");console.log(e),e.classList.toggle("show")}},a={edit:(()=>{let e=document.createElement("p");return e.classList.add("edit-project"),e.textContent="Edit Project",e})(),del:(()=>{let e=document.createElement("p");return e.classList.add("delete-project"),e.textContent="Delete Project",e})(),notes:(()=>{let e=document.createElement("p");return e.classList.add("project-notes"),e.textContent="Add notes",e})()};var u={editForm:(()=>{const e=document.createElement("form");e.name="editForm";const t=document.createElement("label");t.setAttribute("for","projectName"),t.textContent="Name",e.appendChild(t);const o=document.createElement("input");o.type="text",o.name="projectName",o.id="projectName",e.appendChild(o);const n=document.createElement("input");return n.type="button",n.value="Save",e.appendChild(n),e})()};var p={update(e,t){console.log(e,t);const o=document.editForm.projectName.value;e.edit(o),E.updateProjectElement(t,o)},addNotes(e){console.log("saving notes");const t=document.popupForm.notes.value;e.addNotes(t),E.hideNotesPopup()}};var m=function(){const e=this.parentNode.parentNode.parentNode,t=e.querySelector("h3").textContent;let o=n.getProject(t);switch(this.textContent){case"Edit Project":for(console.log(e.children);e.lastElementChild;)e.removeChild(e.lastElementChild);const t=u.editForm;e.appendChild(t);t.querySelector('input[type="button"]').addEventListener("click",p.update.bind(this,o,e));break;case"Delete Project":console.log("delete"),E.removeProjectElement(e),n.remove(o.getName()),console.log(n.getList());break;case"Add notes":console.log("add Notes"),E.renderNotesPopup();document.querySelector(".popup").querySelector('input[type="button"]').addEventListener("click",p.addNotes.bind(this,o))}};var g=function(){let e=document.createElement("div");return e.classList.add("dropdown"),e.appendChild(function(){let e=document.createElement("p");return e.classList.add("dropbtn"),e.textContent="...",e.addEventListener("click",E.renderDropdown),e}()),e.appendChild(function(){let e=document.createElement("div");e.classList.add("dropdown-content"),e.id="myDropdown";for(let t in a){const o=a[t];e.appendChild(o),o.addEventListener("click",m)}return e}()),e};const f=document.querySelector("#projects"),h=document.querySelector(".popup-container"),C=document.querySelector("#close-popup");function L(){let e=document.createElement("p");return e.classList.add("project-circle"),e.textContent="o",e}function v(e){let t=document.createElement("h3");return t.classList.add("project-name"),t.textContent=e,t}const E={render(e){console.log("project is rendering"),console.log(e);let t=document.createElement("div");t.classList.add("project"),t.appendChild(L()),t.appendChild(v(e.getName())),t.appendChild(g()),f.appendChild(t)},renderNotesPopup(){console.log(h),h.classList.toggle("show")},hideNotesPopup(){h.classList.toggle("show")},removeProjectElement(e){e.parentNode.removeChild(e)},updateProjectElement(e,t){console.log(e),e.removeChild(e.lastElementChild),e.appendChild(L()),e.appendChild(v(t)),e.appendChild(g())},selectProject(e){console.log("todos of current project are rendering"),i.renderProjectHeading(e.getName()),i.renderAddTodo(),e.getTodos().forEach(e=>i.render(e))},renderDropdown(){console.log("ok");const e=f.querySelector("#myDropdown");console.log(e),e.classList.toggle("show")}};function j(e){if(!e.target.matches(".dropbtn")){let e=document.querySelectorAll(".dropdown-content");for(let t of e)t.classList.contains("show")&&t.classList.remove("show")}}C.addEventListener("click",E.hideNotesPopup);var y=function(){window.addEventListener("click",j)};let T=function(e){let t,o=e;const n=[];return{edit:function(e){o=e},addNotes:function(e){t=e},addTodo:function(e){n.push(e)},getName:function(){return o},getNotes:function(){return t},getTodos:function(){return n},getProject:function(){return{name:o,todos:n}}}}("Home");T.addNotes("this is a default project"),n.add(T),E.render(T);let P=r("todo1","today","high");P.addNotes("this is notes"),P.setPriority("low"),d.add(P),console.log(P.getPriority()),console.log(d.getList()),console.log(d.getTodo("todo1")),T.addTodo(P),E.selectProject(T),P.edit("todo2","tomorrow","high","Home"),console.log(d.getTodo("todo2")),console.log(T.getTodos()),P.moveToProject("Home"),console.log(T.getTodos()),P.reschedule("today");let x=r("todo2","do todo","today","misc");P.addToChecklist(x),console.log(d.getTodo("todo2")),console.log("output for mark"),P.markAsCompleted(),x.markAsCompleted(),P.markAsCompleted(),console.log(P.getTodo());let N=P.getTodo().checkList;console.log(N[0].getTodo()),console.log("trying to remove project from projectList"),console.log(n.getList()),console.log(d.getList()),console.log(d.getList()),console.log(n.getList()),y()}]);