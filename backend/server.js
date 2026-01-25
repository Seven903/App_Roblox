import express from "express";
import sequelize from "./db/banco.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

import authRoute from "./routes/authRoute.js";
import profileRoute from "./routes/profileRoute.js";
import userRoute from "./routes/userRoute.js";

app.use("/", authRoute);
app.use("/login", authRoute);
app.use("/usuario", userRoute);
app.use(profileRoute);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Banco conectado com sucesso");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta: ${PORT}`);
    });
  } catch (err) {
    console.log("Erro ao Conectar ", err);
  }
})();
