import AddTodo from "./components/add-todo.js";

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        this.addTodoForm.onClick((title,description) => this.addTodo(title,description));
        //const btn = document.getElementById('add');
        //btn.onclick = () => this.addTodo('Titulo', 'Desc');
    }
    setModel(model){
        this.model = model;
    }

    addTodo(title,description){
        const todo = this.model.addTodo(title, description);
    }

}