const userService = require("../services/user.service");

class UserController {
    
    async create(req, res) {
        try {
            const user = await userService.create(req.body);
            res.status(201).json(user);
        } catch (e) {
            res.status(400).json({ error: "Email déjà pris ou erreur" });
        }
    }

    async getAll(req, res) {
        const users = await userService.findAll();
        res.json(users);
    }

    async getPending(req, res) {
        const users = await userService.findUsersWithPendingTasks();
        res.json(users);
    }
}

module.exports = new UserController();