const TodoList = require('./src/todo');
const lista = new TodoList();

lista.addTask('Escrever testes unitários');
lista.addTask('Rodar teste de regressão');
lista.completeTask(0);

console.log('Todas as tarefas:', lista.getAllTasks());
console.log('Tarefas pendentes:', lista.getPendingTasks());
console.log('Tarefas concluídas:', lista.getCompletedTasks());
