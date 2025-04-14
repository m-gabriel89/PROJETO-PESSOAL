const TodoList = require('../src/todo');

describe('To-Do List - Qualidade e Teste de Software', () => {
    let todo;

    beforeEach(() => {
        todo = new TodoList();
    });

    test('1. Deve adicionar uma tarefa corretamente', () => {
        todo.addTask('Escrever testes unitários');
        expect(todo.getAllTasks()).toHaveLength(1);
    });

    test('2. Deve lançar erro ao adicionar tarefa inválida', () => {
        expect(() => todo.addTask(null)).toThrow('Tarefa inválida');
    });

    test('3. Deve marcar uma tarefa como concluída', () => {
        todo.addTask('Executar teste de integração');
        todo.completeTask(0);
        expect(todo.getCompletedTasks()).toHaveLength(1);
    });

    test('4. Deve retornar somente tarefas pendentes', () => {
        todo.addTask('Criar casos de teste');
        todo.addTask('Rodar testes de carga');
        todo.completeTask(1);
        const pendentes = todo.getPendingTasks();
        expect(pendentes).toHaveLength(1);
        expect(pendentes[0].task).toBe('Criar casos de teste');
    });

    test('5. Deve excluir uma tarefa pelo índice', () => {
        todo.addTask('Testar endpoint de login');
        todo.deleteTask(0);
        expect(todo.getAllTasks()).toHaveLength(0);
    });

    test('6. Deve lançar erro ao completar tarefa com índice inválido', () => {
        expect(() => todo.completeTask(5)).toThrow('Índice inválido');
    });

    test('7. Deve lançar erro ao excluir tarefa com índice inválido', () => {
        expect(() => todo.deleteTask(-1)).toThrow('Índice inválido');
    });

    test('8. Deve editar uma tarefa existente', () => {
        todo.addTask('Escrever testes de UI');
        todo.editTask(0, 'Atualizar testes de UI');
        expect(todo.getAllTasks()[0].task).toBe('Atualizar testes de UI');
    });

    test('9. Deve lançar erro ao editar com tarefa inválida', () => {
        todo.addTask('Teste de regressão');
        expect(() => todo.editTask(0, null)).toThrow('Nova tarefa inválida');
    });

    test('10. Deve limpar todas as tarefas', () => {
        todo.addTask('Rodar testes de performance');
        todo.addTask('Analisar logs');
        todo.clearAll();
        expect(todo.getAllTasks()).toHaveLength(0);
    });
});
