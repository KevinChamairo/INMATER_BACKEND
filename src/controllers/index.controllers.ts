import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

export const getTasks = async (req: Request, res: Response) => {
    try {
        const response: QueryResult = await pool.query(`
            SELECT tasks.id, tasks.title, tasks.due_date, statuses.name AS estado 
            FROM tasks
            JOIN statuses ON tasks.status_id = statuses.id
            ORDER BY tasks.id ASC;
        `);
        res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getTaskById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const response: QueryResult = await pool.query(
            `SELECT tasks.id, tasks.title, tasks.due_date, statuses.name AS estado 
             FROM tasks
             JOIN statuses ON tasks.status_id = statuses.id 
             WHERE tasks.id = $1;`,
            [id]
        );
        res.json(response.rows);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createTask = async (req: Request, res: Response) => {
    const { title, due_date, status_id } = req.body;
    try {
        const response = await pool.query(
            'INSERT INTO tasks (title, due_date, status_id) VALUES ($1, $2, $3) RETURNING *;',
            [title, due_date, status_id || 1]
        );
        res.json({
            message: 'Task added successfully',
            body: response.rows[0]
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { title, due_date, status_id } = req.body;
    try {
        await pool.query(
            'UPDATE tasks SET title = $1, due_date = $2, status_id = $3 WHERE id = $4;',
            [title, due_date, status_id, id]
        );
        res.json('Task Updated Successfully');
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        await pool.query('DELETE FROM tasks WHERE id = $1;', [id]);
        res.json(`Task ${id} deleted Successfully`);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
