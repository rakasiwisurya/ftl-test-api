import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_DB_HOST || "localhost",
  user: process.env.MYSQL_DB_USER || "root",
  password: process.env.MYSQL_DB_PASSWORD || "",
  database: process.env.MYSQL_DB_NAME || "ftl_test",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const query = async <T extends mysql.RowDataPacket[]>(
  sql: string,
  params?: any[]
): Promise<T> => {
  const [rows] = await pool.execute<mysql.RowDataPacket[]>(sql, params);
  return rows as T;
};
