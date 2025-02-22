import {Router} from 'express';
const router = Router();

import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/index.controllers';

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask);

export default router;