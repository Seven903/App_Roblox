const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const db = new sqlite3.Database(path.resolve(__dirname, "banco.db"), (err) => {
  if (err) {
    console.log("Erro ao Criar Banco");
  } else {
    console.log("Banco inicializado");
  }
});

db.run(
  `
    CREATE TABLE IF NOT EXISTS Usuario(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    dataNascimento DATE NOT NULL
    )
    `,
  (err) => {
    if (err) {
      console.log("Erro ao Criar tabela: " + err);
    }
  }
);

module.exports = db;
