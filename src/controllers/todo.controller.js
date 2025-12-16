const todoService = require("../services/todo.service");

class TodoController {

    // POST /api/todos
    async create(req, res) {
        try {
            // On attend { "title": "...", "userId": 1 }
            const todo = await todoService.create(req.body);
            res.status(201).json(todo);
        } catch (e) {
            res.status(500).json({ error: "Erreur création todo" });
        }
    }
}

module.exports = new TodoController();