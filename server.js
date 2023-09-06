const express = require("express");
const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições
app.use(express.json());

// Dados de exemplo
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// Rotas da API
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  users = users.map((user) => {
    if (user.id === userId) {
      return { ...user, ...updatedUser };
    }
    return user;
  });

  res.json(updatedUser);
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  users = users.filter((user) => user.id !== userId);

  res.sendStatus(204);
});

// Iniciar o servidor
app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
