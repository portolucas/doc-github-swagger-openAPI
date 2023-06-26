# API de Usuários para os alunos da PUC Minas

Olá! Meu nome é Lucas, sou professor da pós-graduação da **PUC Minas**. Este é um projeto para os alunos da pós-graduação.

Uma API simples para gerenciar usuários.

## Endpoints

- `GET /users`: Retorna todos os usuários cadastrados.
- `POST /users`: Cria um novo usuário.
- `PUT /users/:id`: Atualiza um usuário existente.
- `DELETE /users/:id`: Remove um usuário.

## Rodando a API

1. Certifique-se de ter o Node.js instalado.
2. Execute `npm install` para instalar as dependências.
3. Execute `node server.js` para iniciar o servidor.
4. A API estará disponível em http://localhost:4000.

# Swagger
1. Crie um arquivo chamado swagger.js e adicione o seguinte código:
```
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuários',
      version: '1.0.0',
      description: 'Uma API simples para gerenciar usuários',
    },
  },
  apis: ['./server.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(5000, () => {
  console.log('Swagger documentation available at http://localhost:5000/api-docs');
});

```
2. Execute o comando para instalar as dependências necessárias.
```
npm install swagger-jsdoc swagger-ui-express --save
```
3. No arquivo server.js, adicione as seguintes anotações aos endpoints:
```
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
```
4. Execute o comando `node swagger.js` para iniciar o servidor da documentação do Swagger
