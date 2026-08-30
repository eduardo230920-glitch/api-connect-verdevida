# API Connect - VerdeVida

## Objetivo

A API Connect - VerdeVida é uma API REST desenvolvida como MVP para demonstrar o gerenciamento de usuários de uma empresa fictícia chamada VerdeVida.

A aplicação permite realizar operações de cadastro, consulta, atualização e remoção de usuários por meio de requisições HTTP, utilizando dados armazenados temporariamente em memória.

## Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* JSON
* Git e GitHub
* Thunder Client para testes das requisições HTTP

## Estrutura do projeto

```text
projeto-verdevida/
├── server.js
├── controllers/
│   └── employeeController.js
├── data/
│   └── employees.js
├── routes/
│   └── employeeRoutes.js
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Execução local

Para executar o projeto localmente, é necessário ter o Node.js instalado.

Primeiramente, abra o terminal na pasta do projeto e instale as dependências:

```bash
npm install
```

Depois, execute o servidor:

```bash
node server.js
```

Quando o servidor estiver funcionando, será exibida a mensagem:

```text
API VerdeVida rodando na porta 3000
```

A API estará disponível em:

```text
http://localhost:3000
```

## Endpoints

| Método | Endpoint             | Descrição                | Status esperado |
| ------ | -------------------- | ------------------------ | --------------- |
| GET    | `/api/employees`     | Lista todos os usuários  | 200             |
| GET    | `/api/employees/:id` | Busca um usuário pelo ID | 200 / 404       |
| POST   | `/api/employees`     | Cadastra um novo usuário | 201 / 400       |
| PUT    | `/api/employees/:id` | Atualiza um usuário      | 200 / 400 / 404 |
| DELETE | `/api/employees/:id` | Remove um usuário        | 200 / 404       |

## Exemplos de requisições

### Listar usuários

```http
GET /api/employees
```

### Buscar usuário por ID

```http
GET /api/employees/1
```

### Cadastrar usuário

```http
POST /api/employees
Content-Type: application/json
```

Corpo da requisição:

```json
{
    "name": "João Pereira",
    "email": "joao@verdevida.com"
}
```

### Atualizar usuário

```http
PUT /api/employees/1
Content-Type: application/json
```

Corpo da requisição:

```json
{
    "name": "João Pereira",
    "email": "joao.pereira@verdevida.com"
}
```

### Remover usuário

```http
DELETE /api/employees/1
```

## Validações e códigos HTTP

A API utiliza códigos de status HTTP para indicar o resultado das operações:

* `200 OK` - Requisição processada com sucesso.
* `201 Created` - Usuário criado com sucesso.
* `400 Bad Request` - Dados obrigatórios não informados.
* `404 Not Found` - Usuário não encontrado.

## Persistência

Para este MVP, os usuários são armazenados em um array na memória da aplicação. Os dados são reiniciados quando o servidor é encerrado.

Os identificadores são gerados automaticamente pela função `generateId()`, que utiliza o maior ID existente e acrescenta 1.

## Testes

A API foi testada utilizando o Thunder Client, contemplando os seguintes cenários:

* Cadastro de usuário com sucesso: `201 Created`;
* Cadastro sem e-mail: `400 Bad Request`;
* Listagem geral: `200 OK`;
* Busca de usuário inexistente: `404 Not Found`.
