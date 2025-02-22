"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getTasks = void 0;
const database_1 = require("../database");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query(`
            SELECT tasks.id, tasks.title, tasks.due_date, statuses.name AS estado 
            FROM tasks
            JOIN statuses ON tasks.status_id = statuses.id
            ORDER BY tasks.id ASC;
        `);
        res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getTasks = getTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query(`SELECT tasks.id, tasks.title, tasks.due_date, statuses.name AS estado 
             FROM tasks
             JOIN statuses ON tasks.status_id = statuses.id 
             WHERE tasks.id = $1;`, [id]);
        res.json(response.rows);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getTaskById = getTaskById;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, due_date, status_id } = req.body;
    try {
        const response = yield database_1.pool.query('INSERT INTO tasks (title, due_date, status_id) VALUES ($1, $2, $3) RETURNING *;', [title, due_date, status_id || 1]);
        res.json({
            message: 'Task added successfully',
            body: response.rows[0]
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { title, due_date, status_id } = req.body;
    try {
        yield database_1.pool.query('UPDATE tasks SET title = $1, due_date = $2, status_id = $3 WHERE id = $4;', [title, due_date, status_id, id]);
        res.json('Task Updated Successfully');
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield database_1.pool.query('DELETE FROM tasks WHERE id = $1;', [id]);
        res.json(`Task ${id} deleted Successfully`);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteTask = deleteTask;
