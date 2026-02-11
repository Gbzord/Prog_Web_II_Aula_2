# 🏆 API REST - Seleções da Copa do Mundo

API RESTful desenvolvida com **Node.js** e **Express.js** para gerenciar informações sobre seleções de futebol da Copa do Mundo.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Endpoints da API](#endpoints-da-api)
- [Exemplos de Requisições](#exemplos-de-requisições)

---

## 🎯 Sobre o Projeto

Esta API permite realizar operações CRUD (Create, Read, Update, Delete) em uma coleção de seleções de futebol. O projeto foi desenvolvido como uma aplicação de estudo para demonstrar conceitos fundamentais de APIs REST com Node.js.

---

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
- **[Express.js](https://expressjs.com/)** v5.2.1 - Framework web minimalista
- **[Nodemon](https://nodemon.io/)** v3.1.11 - Ferramenta de desenvolvimento para reinicialização automática
- **ES Modules** - Sintaxe moderna de importação/exportação

---

## ✨ Funcionalidades

- ✅ Listar todas as seleções
- ✅ Buscar seleção por ID
- ✅ Cadastrar nova seleção
- ✅ Deletar seleção por ID
- ✅ Middleware para parsing de JSON
- ✅ Respostas com status HTTP apropriados

---

## 📁 Estrutura do Projeto

```
NodeProgWeb2-main/
└── web/
    └── api-rest/
        ├── src/
        │   └── app.js          # Configuração do Express e rotas
        ├── server.js           # Inicialização do servidor
        ├── package.json        # Dependências e scripts
        ├── package-lock.json   # Lock de versões
        └── node_modules/       # Dependências instaladas
```

---

## 🔧 Instalação

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

### Passos

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd NodeProgWeb2-main/web/api-rest
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **O servidor estará rodando em:**
   ```
   http://localhost:3000
   ```

---

## 💻 Como Usar

### Modo Desenvolvimento

```bash
npm run dev
```

O **Nodemon** irá monitorar alterações nos arquivos e reiniciar o servidor automaticamente.

### Testar a API

Você pode testar os endpoints usando:
- **Navegador** (para requisições GET)
- **[Postman](https://www.postman.com/)**
- **[Insomnia](https://insomnia.rest/)**
- **cURL** (linha de comando)
- **Thunder Client** (extensão do VS Code)

---

## 📡 Endpoints da API

### Base URL
```
http://localhost:3000
```

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/` | Retorna mensagem de boas-vindas |
| `GET` | `/selecoes` | Lista todas as seleções |
| `GET` | `/selecoes/:id` | Busca uma seleção específica por ID |
| `POST` | `/selecoes` | Cadastra uma nova seleção |
| `DELETE` | `/selecoes/:id` | Deleta uma seleção por ID |

---

## 📝 Exemplos de Requisições

### 1. **GET /** - Rota raiz
```bash
GET http://localhost:3000/
```

**Resposta:**
```
Hello World
```

---

### 2. **GET /selecoes** - Listar todas as seleções
```bash
GET http://localhost:3000/selecoes
```

**Resposta:**
```json
[
  { "id": 1, "selecao": "Brasil", "grupo": "G" },
  { "id": 2, "selecao": "Suíça", "grupo": "G" },
  { "id": 3, "selecao": "Camarões", "grupo": "G" },
  { "id": 4, "selecao": "Sérvia", "grupo": "G" }
]
```

---

### 3. **GET /selecoes/:id** - Buscar seleção por ID
```bash
GET http://localhost:3000/selecoes/1
```

**Resposta:**
```json
[
  { "id": 1, "selecao": "Brasil", "grupo": "G" }
]
```

---

### 4. **POST /selecoes** - Cadastrar nova seleção
```bash
POST http://localhost:3000/selecoes
Content-Type: application/json

{
  "id": 5,
  "selecao": "Argentina",
  "grupo": "C"
}
```

**Resposta:**
```
Seleção cadastrada com sucesso
```

---

### 5. **DELETE /selecoes/:id** - Deletar seleção
```bash
DELETE http://localhost:3000/selecoes/4
```

**Resposta:**
```
Seleção deletada com sucesso
```

---

## 🧩 Detalhes Técnicos

### Middleware
```javascript
app.use(express.json());
```
Permite que a aplicação receba e processe dados JSON no corpo das requisições.

### Funções Auxiliares

**buscarSelecaoPorId(id)**
- Retorna um array com a seleção que possui o ID especificado
- Utiliza o método `filter()`

**buscarIndexPorId(id)**
- Retorna o índice da seleção no array
- Utiliza o método `findIndex()`
- Usado para operações de deleção

---

## 🎓 Conceitos Aplicados

- **API REST** - Arquitetura de serviços web
- **CRUD** - Create, Read, Update, Delete
- **HTTP Methods** - GET, POST, DELETE
- **Status Codes** - 200 (OK), 201 (Created)
- **Route Parameters** - `:id` para rotas dinâmicas
- **Middleware** - Funções intermediárias no Express
- **ES Modules** - `import`/`export` moderno
- **Separação de responsabilidades** - `server.js` vs `app.js`

---

## 📦 Scripts Disponíveis

```json
{
  "dev": "nodemon server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

- **`npm run dev`** - Inicia o servidor em modo desenvolvimento com Nodemon

---

## 🔮 Melhorias Futuras

- [ ] Implementar método PUT para atualizar seleções
- [ ] Conectar a um banco de dados (MongoDB, PostgreSQL)
- [ ] Adicionar validação de dados com Joi ou Yup
- [ ] Implementar tratamento de erros
- [ ] Adicionar testes automatizados (Jest, Mocha)
- [ ] Documentação com Swagger/OpenAPI
- [ ] Autenticação e autorização (JWT)
- [ ] Paginação para listagem de seleções
- [ ] Filtros e busca avançada

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

---

## 👨‍💻 Autor

Desenvolvido como projeto educacional para aprendizado de APIs REST com Node.js e Express.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📞 Suporte

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue no repositório.

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**
