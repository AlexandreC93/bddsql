const AppDataSource = require("../config/data-source");

class UserService {
    constructor() {
        this.userRepo = AppDataSource.getRepository("User");
    }

    async create(data) {
        const user = this.userRepo.create(data);
        return await this.userRepo.save(user);
    }

    async findAll() {
        return await this.userRepo.find({
            relations: { todos: true }
        });
    }

    async findUsersWithPendingTasks() {
        return await this.userRepo.createQueryBuilder("user")
            .leftJoinAndSelect("user.todos", "todo")
            .where("todo.completed = :status", { status: false }) // false ou 0 selon SQLite
            .getMany();
    }
}

module.exports = new UserService();