# Projeto 3 — API Node.js com PostgreSQL usando Docker Compose

## Visão geral

Este projeto demonstra um cenário **realista e profissional** de uso do Docker, combinando:

-   Uma **API em Node.js com TypeScript**
-   Um **banco de dados PostgreSQL**
-   **Dockerfile** para definir como a aplicação é construída
-   **Docker Compose** para orquestrar múltiplos containers

Ele representa a evolução natural dos Projetos 1 e 2, mostrando como o Docker resolve problemas reais de dependência, isolamento e integração entre serviços.

Este é o **terceiro projeto** do Knowledge Transfer **Introdução ao Docker**.

---

## Objetivo do projeto

O objetivo deste projeto é:

-   Demonstrar como rodar **múltiplos serviços** com Docker
-   Mostrar o papel do **Dockerfile** na construção da aplicação
-   Mostrar o papel do **Docker Compose** na orquestração
-   Subir uma API que se conecta a um banco PostgreSQL sem configuração local
-   Evidenciar a **simplificação extrema** em relação a subir tudo manualmente

---

## Estrutura do projeto

```text
project-03-compose/
├── src/
│   └── index.ts
├── Dockerfile
├── docker-compose.yml
├── package.json
└── tsconfig.json
```

---

## src/index.ts

Arquivo principal da aplicação. Ele define uma **API Express** que se conecta a um banco PostgreSQL.

```ts
import express from 'express';
import { Pool } from 'pg';
```

-   Importa o framework Express
-   Importa o Pool do `pg`, responsável por gerenciar conexões com o banco

---

```ts
const app = express();
const PORT = process.env.PORT || 3000;
```

-   Cria a aplicação Express
-   Define a porta da aplicação
-   Permite sobrescrever a porta via variável de ambiente

---

```ts
const pool = new Pool({
    host: 'db',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
});
```

-   Cria um pool de conexões com o PostgreSQL
-   `host: 'db'` referencia o **nome do serviço** definido no Docker Compose
-   Não usa `localhost`, pois os containers se comunicam via rede interna

---

```ts
app.get('/', async (_, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0] });
});
```

-   Define uma rota GET `/`
-   Executa uma query simples no banco
-   Retorna o horário atual do PostgreSQL
-   Prova que a API está conectada ao banco

---

```ts
app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

-   Inicia o servidor HTTP
-   Escuta na porta definida
-   Imprime log no console do container

---

## Dockerfile

O `Dockerfile` define **como a imagem da API será construída**.

```dockerfile
FROM node:20-alpine
```

-   Define a imagem base
-   Node.js 20 sobre Alpine (leve e eficiente)

---

```dockerfile
WORKDIR /app
```

-   Define o diretório de trabalho dentro do container

---

```dockerfile
COPY package.json tsconfig.json ./
RUN npm install
```

-   Copia os arquivos de dependência
-   Instala as dependências dentro do container
-   Aproveita cache do Docker para builds mais rápidos

---

```dockerfile
COPY src ./src
```

-   Copia o código-fonte da aplicação

---

```dockerfile
RUN npm run build
```

-   Compila o TypeScript
-   Gera os arquivos JavaScript na pasta `dist`

---

```dockerfile
EXPOSE 3000
```

-   Documenta que a aplicação usa a porta 3000

---

```dockerfile
CMD ["npm", "start"]
```

-   Define o comando principal do container
-   Inicia a API compilada

---

## O que é Docker Compose?

O **Docker Compose** é uma ferramenta para definir e executar **aplicações com múltiplos containers**.

Ele permite:

-   Definir serviços
-   Criar redes automaticamente
-   Gerenciar volumes
-   Subir tudo com um único comando

Sem Docker Compose, seria necessário:

-   Criar containers manualmente
-   Criar rede manualmente
-   Gerenciar ordem de inicialização

---

## docker-compose.yml

Arquivo que define a **orquestração dos containers**.

```yaml
services:
```

-   Define os serviços da aplicação

---

```yaml
api:
    build: .
    ports:
        - '3000:3000'
    depends_on:
        - db
```

-   `api`: serviço da aplicação Node.js
-   `build: .` usa o Dockerfile do projeto
-   Mapeia a porta 3000
-   Garante que o banco seja iniciado antes

---

```yaml
db:
    image: postgres:17
    environment:
        POSTGRES_PASSWORD: postgres
    volumes:
        - pg-data:/var/lib/postgresql/data
```

-   Serviço de banco de dados
-   Usa imagem oficial do PostgreSQL
-   Define senha via variável de ambiente
-   Usa volume para persistência de dados

---

```yaml
volumes:
    pg-data:
```

-   Define um volume nomeado
-   Garante que os dados do banco sobrevivam aos containers

---

## Por que usar Dockerfile + Docker Compose?

-   **Dockerfile**: define como cada serviço é construído
-   **Docker Compose**: define como os serviços se conectam

Eles se complementam:

-   Dockerfile = construção
-   Docker Compose = orquestração

---

## Como executar o projeto

No diretório do projeto, execute:

```bash
docker compose up --build
```

O que acontece:

-   As imagens são construídas
-   A API é iniciada
-   O PostgreSQL é iniciado
-   Os containers se conectam automaticamente

Acesse:

```
http://localhost:3000
```

---

## Conceitos demonstrados

-   Multi-container
-   Rede interna do Docker
-   Volumes
-   Variáveis de ambiente
-   Orquestração com Docker Compose

---

## Conclusão

Este projeto mostra o **verdadeiro poder do Docker** em aplicações modernas.

Com Docker Compose, um cenário que seria complexo se torna simples, reproduzível e profissional.
