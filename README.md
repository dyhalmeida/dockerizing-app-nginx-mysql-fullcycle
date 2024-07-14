# Full Cycle Rocks! - Desafio Nginx como Proxy Reverso

## Descrição do Desafio

Neste desafio, você deve colocar em prática o que aprendeu sobre a utilização do Nginx como proxy reverso. A ideia principal é que, quando um usuário acesse o Nginx, ele fará uma chamada à nossa aplicação Node.js. Essa aplicação, por sua vez, adicionará um registro no nosso banco de dados MySQL, cadastrando um nome na tabela `people`.

O retorno da aplicação Node.js para o Nginx deve ser:

```html
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrados no banco de dados.
```

## Estrutura do Projeto

O projeto está dividido em três serviços principais:

1. Nginx: Atua como proxy reverso.
2. Node.js: Aplicação que recebe as requisições do Nginx, insere um registro no banco de dados e retorna a lista de nomes cadastrados.
3. MySQL: Banco de dados para armazenar os registros.

## Como Executar o Projeto

### Pré-requisitos

- Docker
- Docker Compose

### Passos para Executar

1. Clone o repositório:

```bash
git clone https://github.com/dyhalmeida/dockerizing-app-nginx-mysql-fullcycle.git
cd dockerizing-app-nginx-mysql-fullcycle
```

2. Execute o Docker Compose para construir e iniciar os containers:

```bash
docker-compose up --build
```

3. Acesse o Nginx no navegador:

```bash
http://localhost:8080
```
