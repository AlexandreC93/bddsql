const AppDataSource = require("../config/data-source");

class TodoService {
    constructor() {
        this.todoRepo = AppDataSource.getRepository("Todo");
    }

    async create(data) {
        const todoData = {
            title: data.title,
            user: { id: data.userId } 
        };
        
        const todo = this.todoRepo.create(todoData);
        return await this.todoRepo.save(todo);
    }
}

module.exports = new TodoService();