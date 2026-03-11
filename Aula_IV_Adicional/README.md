# API REST de Seleções

Uma API REST completa para gerenciar seleções (como times de futebol), construída com Node.js, Express e MySQL. 
Segue padrão MVC com camadas de controllers, repositories e database.
Inclui testes automatizados e estrutura de banco de dados.


## Tecnologias

- Node.js (ES Modules)
- Express (Framework)
- MySQL (Banco de Dados)
- Jest (testes unitários e de integração)
- Supertest (testes de API)
- Babel (transpilação para testes)

## Funcionalidades

- Listar todas as seleções.
- Buscar seleção por ID.
- Criar nova seleção.
- Atualizar seleção existente.
- Deletar seleção.


## Instalação e Configuração

1. Clone o repositório.
2. Instale as dependências: `npm install`
3. Configure o MySQL:
   - Instale e inicie o MySQL (ex.: XAMPP ou standalone).
   - Execute o script em `src/app/database/schema.sql` para criar o banco `dbselecao` e tabela `selecoes`.
4. Verifique a conexão em `infra/conexao.js` .
5. Execute o servidor: `npm start` .

## Testes

Execute os testes com: `npm test`

Os testes cobrem os endpoints principais. 
Alguns podem falhar se houver bugs no código ou se o banco não estiver configurado. 
Corrija se necessário , erros em `src/app.js` para melhorar a cobertura.

## Estrutura do Projeto

- `server.js`: Ponto de entrada, conecta ao banco e inicia o servidor na porta 3000.
- `src/app.js`: Configuração do Express e rotas (atualmente com dados mock; integrar com controllers).
- `infra/conexao.js`: Configuração da conexão MySQL.
- `src/app.test.js`: Testes automatizados da API.
- `babel.config.js`: Configuração do Babel para testes.
- `src/app/controllers/SelecaoControllers.js`: Controllers para lógica de requisições HTTP.
- `src/app/repositories/SelecaoRepository.js`: Repository para abstração de acesso aos dados.
- `src/app/database/index.js`: Funções diretas para queries MySQL.
- `src/app/database/schema.sql`: Script SQL para criar banco e tabela.


## Uso da API

Após iniciar o servidor, testar os endpoints com ferramentas como Postman ou useBr:

- GET /selecoes: Lista seleções.
- POST /selecoes: Body JSON { "selecao": "Nome", "grupo": "A" }.
- PUT /selecoes/1: Atualiza seleção por ID.
- DELETE /selecoes/1: Remove seleção por ID.