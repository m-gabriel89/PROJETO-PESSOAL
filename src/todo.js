class TodoList {
    constructor() {
        this.todos = [];
    }

    addTask(task) {
        if (!task || typeof task !== 'string') {
            throw new Error('Tarefa inválida');
        }
        this.todos.push({ task, done: false });
    }

    completeTask(index) {
        if (index < 0 || index >= this.todos.length) {
            throw new Error('Índice inválido');
        }
        this.todos[index].done = true;
    }

    getCompletedTasks() {
        return this.todos.filter(t => t.done);
    }

    getPendingTasks() {
        return this.todos.filter(t => !t.done);
    }

    deleteTask(index) {
        if (index < 0 || index >= this.todos.length) {
            throw new Error('Índice inválido');
        }
        this.todos.splice(index, 1);
    }

    editTask(index, newTask) {
        if (!newTask || typeof newTask !== 'string') {
            throw new Error('Nova tarefa inválida');
        }
        if (index < 0 || index >= this.todos.length) {
            throw new Error('Índice inválido');
        }
        this.todos[index].task = newTask;
    }

    getAllTasks() {
        return this.todos;
    }

    clearAll() {
        this.todos = [];
    }
}

module.exports = TodoList;
