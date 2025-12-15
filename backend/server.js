const express = require("express");

const { verifyTokenAndSetUser } = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.use(verifyTokenAndSetUser);

const authRoute = require("./routes/authRoute");
const profileRoute = require("./routes/profileRoute");
const userRoute = require("./routes/userRoute");

app.use("/", authRoute);
app.use("/usuario", userRoute);
app.use("/login", authRoute);
app.use("/perfil", profileRoute);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
