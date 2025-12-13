const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());

const routh = require("./routes/authRoute");
const route = require("./routes/userRoute");

app.use("/", routh);
app.use("/login",routh)
app.use("/usuario", route);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
