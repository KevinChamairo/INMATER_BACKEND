import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'inmater',
    port: 5432
});

// 🔹 Forzar la codificación a UTF-8 en cada nueva conexión
pool.on('connect', async (client) => {
    await client.query("SET client_encoding = 'UTF8'");
});
