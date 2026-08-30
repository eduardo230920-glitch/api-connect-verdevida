const express = require("express");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
    res.json({
        empresa: "VerdeVida",
        mensagem: "API Connect funcionando!"
    });
});

app.listen(3000, () => {
    console.log("API VerdeVida rodando na porta 3000");
});