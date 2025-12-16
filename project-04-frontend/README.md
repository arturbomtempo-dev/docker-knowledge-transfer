# Projeto 4 — Frontend React com Vite e Multi-stage Build

## Visão geral

Este projeto demonstra como **containerizar uma aplicação frontend** moderna utilizando:

-   **React** com **TypeScript**
-   **Vite** como bundler e dev server
-   **Multi-stage build** no Dockerfile
-   **Nginx** para servir os arquivos estáticos em produção

Ele representa um cenário **extremamente comum em projetos profissionais**, mostrando como entregar aplicações frontend otimizadas e prontas para produção usando Docker.

Este é o **quarto projeto** do Knowledge Transfer **Introdução ao Docker**.

---

## Objetivo do projeto

O objetivo deste projeto é:

-   Demonstrar como **containerizar uma aplicação React**
-   Mostrar o uso de **multi-stage builds** para otimização
-   Separar o processo de **build** do processo de **runtime**
-   Servir uma aplicação frontend usando **Nginx**
-   Gerar imagens Docker **leves e eficientes** para produção

---

## Estrutura do projeto

```text
project-04-frontend/
├── src/
│   └── main.tsx
├── Dockerfile
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## src/main.tsx

Arquivo de entrada da aplicação React.

```tsx
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(<h1>Docker + React funcionando!</h1>);
```

### Explicação linha a linha

#### `import { createRoot } from "react-dom/client";`

-   Importa a função `createRoot` do React 18+
-   Responsável por inicializar a aplicação React no DOM

---

#### `createRoot(document.getElementById("root")!)`

-   Seleciona o elemento HTML com id `root`
-   Cria um root React nesse elemento
-   O `!` (non-null assertion) indica que o elemento existe

---

#### `.render(<h1>Docker + React funcionando!</h1>);`

-   Renderiza o componente JSX dentro do root
-   Exibe uma mensagem simples confirmando que a aplicação está funcionando

Este arquivo serve como **ponto de entrada** da aplicação React.

---

## index.html

Template HTML que hospeda a aplicação.

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8" />
        <title>Docker + React</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
    </body>
</html>
```

### Explicação linha a linha

#### `<!DOCTYPE html>`

-   Declara o documento como HTML5

---

#### `<html lang="pt-BR">`

-   Define o idioma do documento como português brasileiro

---

#### `<meta charset="UTF-8" />`

-   Define a codificação de caracteres como UTF-8

---

#### `<title>Docker + React</title>`

-   Define o título que aparece na aba do navegador

---

#### `<div id="root"></div>`

-   Elemento onde a aplicação React será montada
-   Referenciado no `main.tsx`

---

#### `<script type="module" src="/src/main.tsx"></script>`

-   Carrega o arquivo de entrada da aplicação
-   `type="module"` permite o uso de ES Modules
-   O Vite processa automaticamente arquivos TypeScript/JSX

---

## package.json

Define as dependências e scripts do projeto.

```json
{
    "name": "project-04-frontend",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },
    "dependencies": {
        "react": "^19.2.0",
        "react-dom": "^19.2.0"
    },
    "devDependencies": {
        "@types/react": "^19.2.5",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^5.1.1",
        "typescript": "~5.9.3",
        "vite": "^7.2.4"
    }
}
```

### Explicação dos campos principais

#### `"type": "module"`

-   Habilita ES Modules nativamente no Node.js

---

#### Scripts

-   `"dev"`: Inicia o servidor de desenvolvimento local
-   `"build"`: Compila a aplicação para produção
-   `"preview"`: Visualiza a build de produção localmente

---

#### Dependencies

-   `react`: Biblioteca React
-   `react-dom`: Responsável pela renderização no DOM

---

#### DevDependencies

-   `@vitejs/plugin-react`: Plugin para suporte a React no Vite
-   `typescript`: Compilador TypeScript
-   `vite`: Build tool ultrarrápida

---

## tsconfig.json

Configuração do TypeScript.

```jsonc
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "moduleResolution": "Node",
        "strict": true,
        "jsx": "react-jsx",
        "outDir": "dist"
    },
    "include": ["src"]
}
```

### Explicação das opções

#### `"target": "ES2020"`

-   Define a versão do JavaScript para compilação

---

#### `"module": "ESNext"`

-   Usa o sistema de módulos mais recente

---

#### `"moduleResolution": "Node"`

-   Resolve módulos como o Node.js faria

---

#### `"strict": true`

-   Ativa todas as verificações rigorosas do TypeScript

---

#### `"jsx": "react-jsx"`

-   Define como o TypeScript deve transformar JSX
-   Compatível com React 17+

---

#### `"outDir": "dist"`

-   Define o diretório de saída da compilação

---

#### `"include": ["src"]`

-   Especifica quais arquivos devem ser incluídos na compilação

---

## vite.config.ts

Configuração do Vite.

```typescript
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
});
```

### Explicação linha a linha

#### `import react from '@vitejs/plugin-react';`

-   Importa o plugin oficial do React para o Vite

---

#### `import { defineConfig } from 'vite';`

-   Importa função helper para configuração tipada

---

#### `export default defineConfig({ plugins: [react()] });`

-   Define a configuração do Vite
-   Registra o plugin React
-   Permite o uso de JSX/TSX

---

## Dockerfile

O `Dockerfile` utiliza **multi-stage build** para gerar uma imagem otimizada.

```dockerfile
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json tsconfig*.json vite.config.ts index.html ./
RUN npm install

COPY src ./src
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
```

---

## Explicação linha a linha do Dockerfile

### Stage 1: Build

#### `FROM node:20-alpine AS build`

-   Define a **primeira etapa** do multi-stage build
-   Usa Node.js 20 sobre Alpine Linux
-   Nomeia esta etapa como `build`

Este stage é responsável por **compilar a aplicação**.

---

#### `WORKDIR /app`

-   Define o diretório de trabalho como `/app`
-   Todos os comandos seguintes são executados nesse diretório

---

#### `COPY package.json tsconfig*.json vite.config.ts index.html ./`

-   Copia os arquivos de configuração para o container
-   `tsconfig*.json` cobre `tsconfig.json` e variações
-   Essencial para o processo de build

---

#### `RUN npm install`

-   Instala todas as dependências do projeto
-   Inclui dependências de desenvolvimento necessárias para o build
-   Este comando é executado **dentro do container**

---

#### `COPY src ./src`

-   Copia o código-fonte da aplicação
-   Copiado separadamente para melhor aproveitamento de cache

---

#### `RUN npm run build`

-   Executa o comando de build do Vite
-   Compila TypeScript
-   Minifica JavaScript e CSS
-   Gera os arquivos otimizados na pasta `dist`

---

### Stage 2: Runtime

#### `FROM nginx:alpine`

-   Inicia um **novo stage** a partir do zero
-   Usa a imagem oficial do Nginx sobre Alpine
-   Extremamente leve (poucos MB)

Este stage é responsável por **servir os arquivos estáticos**.

---

#### `COPY --from=build /app/dist /usr/share/nginx/html`

-   Copia **apenas os arquivos compilados** do stage anterior
-   `--from=build` referencia o primeiro stage
-   `/usr/share/nginx/html` é o diretório padrão do Nginx

**Resultado:** A imagem final **não contém** Node.js, TypeScript ou código-fonte. Apenas os arquivos HTML, CSS e JS otimizados.

---

#### `EXPOSE 80`

-   Documenta que o container usa a porta 80
-   Porta padrão do HTTP

---

## O que é Multi-stage Build?

**Multi-stage build** é uma técnica que permite usar múltiplas imagens base no mesmo Dockerfile.

### Benefícios:

-   **Imagem final menor**: apenas o necessário para runtime
-   **Separação clara**: build vs produção
-   **Segurança**: código-fonte não vai para produção
-   **Performance**: imagem leve carrega mais rápido

### Comparação:

-   **Sem multi-stage**: ~400 MB (Node.js + deps + código)
-   **Com multi-stage**: ~20 MB (apenas Nginx + arquivos estáticos)

---

## Como executar o projeto

### 1. Build da imagem

No diretório do projeto, execute:

```bash
docker build -t react-frontend .
```

#### O que acontece:

-   Stage 1: Node.js compila a aplicação
-   Stage 2: Nginx recebe apenas os arquivos finais
-   Imagem final é gerada e nomeada como `react-frontend`

---

### 2. Executar o container

```bash
docker run -p 8080:80 react-frontend
```

#### O que acontece:

-   Container é criado a partir da imagem
-   Porta 80 do container é mapeada para 8080 do host
-   Nginx serve os arquivos estáticos

---

### 3. Acessar a aplicação

Abra o navegador em:

```
http://localhost:8080
```

Você verá a mensagem: **Docker + React funcionando!**

---

## Por que usar Nginx para servir frontend?

O Nginx é ideal para aplicações frontend porque:

-   **Extremamente rápido** para servir arquivos estáticos
-   **Leve**: consome poucos recursos
-   **Configurável**: permite proxy reverso, cache, SSL
-   **Padrão da indústria**: usado em produção mundialmente

Aplicações React/Vue/Angular após o build são apenas HTML/CSS/JS. Não precisam de Node.js em produção.

---

## Conceitos importantes demonstrados

-   **Multi-stage builds**
-   **Separação build vs runtime**
-   **Otimização de imagem Docker**
-   **Servir frontend com Nginx**
-   **Containerização de aplicações React**

---

## Comparação com os projetos anteriores

| Projeto   | Foco                           | Complexidade         |
| --------- | ------------------------------ | -------------------- |
| Projeto 1 | Container básico               | ⭐ Iniciante         |
| Projeto 2 | Volumes e ENTRYPOINT           | ⭐⭐ Básico          |
| Projeto 3 | Multi-container (API + DB)     | ⭐⭐⭐ Intermediário |
| Projeto 4 | Frontend com multi-stage build | ⭐⭐⭐ Intermediário |

---

## Conclusão

Este projeto demonstra uma **prática essencial** para times de frontend: containerizar aplicações React/Vue/Angular de forma otimizada.

O uso de **multi-stage builds** é considerado **boa prática obrigatória** em ambientes profissionais, pois garante:

-   Imagens leves
-   Segurança (código-fonte não exposto)
-   Performance em produção
-   Custos reduzidos em cloud

Com isso, você aprendeu a containerizar aplicações frontend de forma profissional e eficiente.
