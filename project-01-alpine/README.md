# Projeto 1 — Alpine Docker Demo

## Visão geral

Este projeto tem como objetivo **introduzir os conceitos fundamentais do Docker** de forma simples e direta, utilizando uma imagem extremamente leve: **Alpine Linux**.

Ele demonstra como:

-   Criar uma imagem Docker a partir de um **Dockerfile**
-   Executar um container baseado nessa imagem
-   Entender o ciclo de vida básico de um container
-   Compreender a relação entre **imagem**, **container** e **processo**

Este é o **primeiro projeto** do Knowledge Transfer _Introdução ao Docker_ e serve como base conceitual para os próximos exemplos mais avançados.

---

## Objetivo do projeto

O objetivo deste projeto é:

-   Mostrar como um container é criado **a partir de um Dockerfile**
-   Executar um script simples dentro de um container
-   Evidenciar que o container executa um **processo específico** e finaliza ao término desse processo
-   Introduzir o uso da imagem **Alpine**, muito comum em ambientes profissionais por ser leve e segura

---

## Estrutura do projeto

```text
project-01-alpine/
├── Dockerfile
└── app.sh
```

### app.sh

Arquivo de script em Shell que será executado **dentro do container**.

```sh
#!/bin/sh

echo "Container iniciado"
echo "Sistema:"
uname -a

echo "Arquivos:"
ls

echo "Finalizando container"
```

#### O que esse arquivo faz?

-   Exibe mensagens no terminal para indicar o ciclo de execução do container
-   Mostra informações do sistema operacional do container
-   Lista os arquivos disponíveis no diretório de trabalho
-   Finaliza a execução após concluir o script

Esse arquivo representa o **processo principal** do container.

---

## Dockerfile

O `Dockerfile` define **como a imagem Docker será construída**.

```dockerfile
FROM alpine:latest

WORKDIR /app

COPY app.sh .

RUN chmod +x app.sh

CMD ["./app.sh"]
```

### Explicação linha a linha

#### `FROM alpine:latest`

Define a **imagem base** do container.

-   Alpine Linux é uma distribuição extremamente leve
-   Muito utilizada em produção por reduzir o tamanho das imagens
-   `latest` indica a versão mais recente disponível

---

#### `WORKDIR /app`

Define o diretório de trabalho dentro do container.

-   Todos os comandos seguintes serão executados a partir desse diretório
-   Se o diretório não existir, o Docker o cria automaticamente

---

#### `COPY app.sh .`

Copia o arquivo `app.sh` do host para o diretório `/app` dentro do container.

-   Primeiro argumento: arquivo de origem no host
-   Segundo argumento: destino dentro da imagem

---

#### `RUN chmod +x app.sh`

Concede permissão de execução ao script.

-   Necessário para que o arquivo possa ser executado como comando
-   Esse comando é executado **durante o build da imagem**

---

#### `CMD ["./app.sh"]`

Define o comando padrão do container.

-   Esse comando será executado quando o container iniciar
-   Representa o **processo principal** do container
-   Quando esse processo termina, o container também é finalizado

---

## Como executar o projeto

### 1. Build da imagem

No diretório do projeto, execute:

```bash
docker build -t alpine-demo .
```

#### O que esse comando faz?

-   `docker build` → inicia o processo de build da imagem
-   `-t alpine-demo` → define o nome da imagem
-   `.` → indica que o Dockerfile está no diretório atual

---

### 2. Executar o container

```bash
docker run alpine-demo
```

#### O que acontece nesse momento?

-   O Docker cria um container a partir da imagem `alpine-demo`
-   O comando definido em `CMD` é executado
-   O script `app.sh` roda e imprime as informações no terminal
-   Ao final do script, o container é encerrado

---

## Conceitos importantes demonstrados

-   **Imagem Docker**: definida pelo Dockerfile
-   **Container**: instância em execução da imagem
-   **Processo principal**: o script `app.sh`
-   **Container é descartável**: ao final do processo, ele é finalizado

---

## Sobre o Alpine Linux

O **Alpine Linux** é uma distribuição minimalista baseada em `musl libc` e `BusyBox`.

Principais características:

-   Imagens extremamente pequenas (poucos MB)
-   Inicialização rápida
-   Superfície de ataque reduzida
-   Muito usada como base para imagens Docker em produção

Por esses motivos, Alpine é uma escolha frequente em projetos profissionais.

---

## Conclusão

Este projeto estabelece a base para o entendimento de Docker, preparando o terreno para exemplos mais complexos envolvendo:

-   Dockerfiles mais elaborados
-   Persistência com volumes
-   Orquestração com Docker Compose

Ele reforça o conceito fundamental de que **containers executam processos**, e não sistemas operacionais completos.
