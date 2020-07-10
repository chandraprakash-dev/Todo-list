import dropdown from './todoDropdown';

const todos = document.querySelector('#todos');

function circle() {
    let circle = document.createElement('p');
    circle.classList.add('todo-circle');
    circle.textContent = 'o';

    return circle;
}

function title(title_) {
    let title = document.createElement('h3');
    title.classList.add('project-name');
    title.textContent = title_;

    return title;
}

const todoRender = {
    renderProjectHeading(name) {
        console.log(name);
        const heading = document.createElement('h2');
        heading.classList.add('todo-heading');
        heading.textContent = name;
        todos.appendChild(heading);
    },
    renderAddTodo() {
        const div = document.createElement('div');
        div.classList.add('add-todo');

        const plus = document.createElement('p');
        plus.classList.add('todo-plus');
        plus.textContent = '+';
        div.appendChild(plus);

        const p = document.createElement('p');
        p.classList.add('todo-text');
        p.textContent = 'Add todo';
        div.appendChild(p);

        todos.appendChild(div);
    },
    render(todo) {
        const addtodo = todos.querySelector('.add-todo');
        console.log('todo is rendering');
        console.log(todo);
        console.log(todos);

        // each project is a div with 3 items: circle, name and options
        let div = document.createElement('div');
        div.classList.add('todo');

        div.appendChild(circle());
        div.appendChild(title(todo.getTitle()));
        div.appendChild(dropdown());

        todos.insertBefore(div, addtodo);
    },
    renderDropdown() {
        console.log('ok');
        const dropdownContent = todos.querySelector('#myDropdown');
        console.log(dropdownContent);
        dropdownContent.classList.toggle('show');
    }
}

export {todoRender};