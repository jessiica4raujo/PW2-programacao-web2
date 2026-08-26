import mysql from "mysql2/promise";

async function conexao() {
    const pool = mysql.createPool({
        host: 'localhost',
        port: 3306,
        user: 'root', // Seu usuário do MySQL
        password: '1234', // Sua senha do MySQL
        database: 'firma_db'
    });
    return pool;
}

async function testarConexao() {
    try {
        const pool = await conexao();
        const conn = await pool.getConnection();
        await conn.ping();
        console.log("✅ Conexão com o banco firma_db bem-sucedida!");
        conn.release();
    } catch (erro) {
        console.error("❌ Falha ao conectar com o MySQL:", erro.message);
    }
}

export { conexao, testarConexao };