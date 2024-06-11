# Inventory API

Uma API em Node.js com Express para gerenciar um inventário de ativos de TI para funcionários.

## Funcionalidades

- Inserir um novo funcionário
- Excluir um funcionário (somente se não houver nenhum ativo configurado para ele)
- Listar todos os funcionários
- Consultar o inventário completo de um determinado funcionário
- Atualizar o nome do funcionário usando o CPF
- Atualizar e limpar informações de diversos tipos de ativos (notebook, monitor, teclado, mouse, etc.)
- Restrições para evitar que um funcionário possua mais ativos do que o permitido

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Pré-requisitos

- Node.js instalado
- MongoDB instalado e em execução

## Instalação

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/inventory-api.git

2. Navegue até o diretório do projeto:
    ```bash
    cd inventory-api

3. Instale as dependências:
    ```bash
    npm i

4. Configure o MongoDB:
    
    Certifique-se de que o MongoDB esteja em execução e acessível em mongodb://localhost:27017/inventory. Caso contrário, edite a string de conexão no arquivo config/database.js para apontar para a sua instância do MongoDB.

5. Executando a aplicação:
    ```bash 
    node app.js

O servidor estará em execução em http://localhost:3000.

## Endpoints

### Funcionários
    POST /api/employees: Inserir um novo funcionário
    DELETE /api/employees/:cpf: Excluir um funcionário
    GET /api/employees: Listar todos os funcionários
    GET /api/employees/:cpf/inventory: Consultar o inventário de um funcionário
    PUT /api/employees/:cpf: Atualizar o nome de um funcionário

### Ativos
    PUT /api/employees/:cpf/assets/:assetType: Atualizar as informações de um ativo
    DELETE /api/employees/:cpf/assets/:assetType: Limpar as informações de um ativo

### Tipos de Ativos Válidos
    notebook
    monitor1
    monitor2
    teclado
    mouse
    nobreak
    desktop
    headset
    celular
    acessorios