"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_controllers_1 = require("../controllers/index.controllers");
router.get('/tasks', index_controllers_1.getTasks);
router.get('/tasks/:id', index_controllers_1.getTaskById);
setInterval(index_controllers_1.updateOverdueTasks, 60000); // Ejecutar cada minuto
router.post('/tasks', index_controllers_1.createTask);
router.put('/tasks/:id', index_controllers_1.updateTask);
router.delete('/tasks/:id', index_controllers_1.deleteTask);
exports.default = router;
