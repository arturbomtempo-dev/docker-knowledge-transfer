import express from 'express';
import { Pool } from 'pg';

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
    host: 'db',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
});

app.get('/', async (_, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0] });
});

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
