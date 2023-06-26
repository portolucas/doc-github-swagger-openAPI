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

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do usuário
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           description: Email do usuário
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários cadastrados.
 *     responses:
 *       200:
 *         description: Lista de usuários.
 *   post:
 *     summary: Cria um novo usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso.
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *   delete:
 *     summary: Remove um usuário existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser removido.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso.
 */

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
