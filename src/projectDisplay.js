import {todoRender} from './todoDisplay';
import dropdown from './projectDropdown';
const projects = document.querySelector('#projects');

function circle() {
    let circle = document.createElement('p');
    circle.classList.add('project-circle');
    circle.textContent = 'o';

    return circle;
}

function name(name_) {
    let name = document.createElement('h3');
    name.classList.add('project-name');
    name.textContent = name_;

    return name;
}

const projectRender = {
    render(project) {
        console.log('project is rendering');
        console.log(project);

        // each project is a div with 3 items: circle, name and dropdown
        let div = document.createElement('div');
        div.classList.add('project');

        div.appendChild(circle());
        div.appendChild(name(project.getName()));
        div.appendChild(dropdown());

        projects.appendChild(div);
    },
    removeProjectElement(projectElement) {
        (projectElement.parentNode.removeChild(projectElement));
    },
    updateProjectElement(projectElement, projectName) {
        console.log(projectElement);
        projectElement.removeChild(projectElement.lastElementChild);

        projectElement.appendChild(circle());
        projectElement.appendChild(name(projectName));
        projectElement.appendChild(dropdown());
    },
    selectProject(project) {
        console.log('todos of current project are rendering');
        todoRender.renderProjectHeading(project.getName());
        todoRender.renderAddTodo();
        let currentTodos = project.getTodos();
        currentTodos.forEach(todo => todoRender.render(todo));
    },
    renderDropdown() {
        console.log('ok');
        const dropdownContent = projects.querySelector('#myDropdown');
        console.log(dropdownContent);
        dropdownContent.classList.toggle('show');
    }
}

export {projectRender};