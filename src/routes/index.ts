import {Router} from 'express';
const router = Router();

import { getTasks, getTaskById, createTask, updateTask, deleteTask, updateOverdueTasks } from '../controllers/index.controllers';

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
setInterval(updateOverdueTasks, 60000); // Ejecutar cada minuto
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask);

export default router;