import { Pool } from 'pg';

const connectionString = 'postgres://dwtkuovy:3YWiLvkz-FfqkUvBzwYtWn8sFOZCoYCG@kesavan.db.elephantsql.com/dwtkuovy';
const db = new Pool({ connectionString });

export default db;