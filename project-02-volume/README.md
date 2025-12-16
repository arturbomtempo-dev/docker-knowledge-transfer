# Projeto 2 — Dockerfile Avançado com Volumes

## Visão geral

Este projeto aprofunda os conceitos apresentados no **Projeto 1**, introduzindo um **Dockerfile mais complexo**, uso de **variáveis de ambiente**, **ENTRYPOINT**, **volumes** e uma organização de arquivos mais próxima de cenários reais de mercado.

Ele demonstra como:

-   Criar uma imagem Docker com múltiplas responsabilidades
-   Utilizar **ENTRYPOINT** para controle do processo principal
-   Persistir dados utilizando **volumes**
-   Entender a diferença entre **build time** e **runtime**
-   Trabalhar com containers que executam continuamente

Este é o **segundo projeto** do Knowledge Transfer _Introdução ao Docker_ e tem como foco mostrar como a complexidade cresce ao usar Docker “na mão”, preparando o terreno para a introdução do **Docker Compose**.

---

## Objetivo do projeto

O objetivo deste projeto é:

-   Demonstrar um **Dockerfile mais verboso e realista**
-   Introduzir o conceito de **volumes** para persistência de dados
-   Mostrar o uso de **ENTRYPOINT** para inicialização controlada do container
-   Evidenciar que containers podem executar processos contínuos
-   Apresentar boas práticas de organização de arquivos

---

## Estrutura do projeto

```text
project-02-volume/
├── Dockerfile
├── entrypoint.sh
└── app/
    └── log.sh
```

---

## entrypoint.sh

Script responsável por **inicializar o container**.

```sh
#!/bin/sh

echo "Inicializando container..."
mkdir -p /data
exec ./app/log.sh
```

### O que esse arquivo faz?

-   Exibe uma mensagem indicando o início do container
-   Garante que o diretório `/data` exista
-   Executa o script principal da aplicação
-   Utiliza `exec` para substituir o processo atual, garantindo que o script seja o processo principal do container

---

## app/log.sh

Script que representa a **aplicação principal**.

```sh
#!/bin/sh

echo "Executando aplicação..."
date >> /data/app.log
tail -f /data/app.log
```

### O que esse arquivo faz?

-   Registra a data e hora atual em um arquivo de log
-   Escreve os dados dentro do volume `/data`
-   Mantém o container em execução contínua usando `tail -f`

Esse comportamento é comum em aplicações que precisam permanecer ativas.

---

## Dockerfile

O `Dockerfile` define como a imagem será construída, incorporando mais conceitos avançados.

```dockerfile
FROM alpine:latest

LABEL maintainer="docker-workshop"
LABEL description="Demo de Dockerfile mais complexo"

ENV APP_HOME=/usr/src/app

WORKDIR $APP_HOME

RUN apk update && \
    apk add --no-cache coreutils bash

COPY app ./app
COPY entrypoint.sh .

RUN chmod +x entrypoint.sh app/log.sh

VOLUME ["/data"]

ENTRYPOINT ["./entrypoint.sh"]
```

---

## Explicação linha a linha do Dockerfile

### `FROM alpine:latest`

Define a imagem base do container, utilizando Alpine Linux por ser leve e segura.

---

### `LABEL maintainer` e `LABEL description`

Adicionam metadados à imagem Docker.

-   Facilitam documentação
-   Auxiliam na identificação da imagem
-   São considerados boa prática em ambientes profissionais

---

### `ENV APP_HOME=/usr/src/app`

Define uma variável de ambiente reutilizável.

-   Evita caminhos hardcoded
-   Facilita manutenção e leitura do Dockerfile

---

### `WORKDIR $APP_HOME`

Define o diretório de trabalho dentro do container.

-   Usa a variável de ambiente previamente definida
-   Cria o diretório automaticamente, se não existir

---

### `RUN apk update && apk add --no-cache coreutils bash`

Instala dependências necessárias durante o build.

-   `apk` é o gerenciador de pacotes do Alpine
-   `--no-cache` reduz o tamanho final da imagem
-   `coreutils` e `bash` adicionam ferramentas comuns de sistema

---

### `COPY app ./app`

Copia o diretório da aplicação para dentro do container.

---

### `COPY entrypoint.sh .`

Copia o script de inicialização para o diretório de trabalho.

---

### `RUN chmod +x entrypoint.sh app/log.sh`

Concede permissão de execução aos scripts.

-   Executado durante o build
-   Necessário para execução correta no runtime

---

### `VOLUME ["/data"]`

Declara um ponto de volume.

-   Indica que `/data` deve ser persistido
-   Dados não são perdidos ao remover o container
-   Essencial para logs, bancos e uploads

---

### `ENTRYPOINT ["./entrypoint.sh"]`

Define o comando principal do container.

-   Sempre executado ao iniciar o container
-   Diferente de `CMD`, não é facilmente sobrescrito
-   Ideal para containers com lógica de inicialização

---

## Como executar o projeto

### 1. Build da imagem

No diretório do projeto, execute:

```bash
docker build -t volume-demo .
```

#### O que esse comando faz?

-   Constrói a imagem com base no Dockerfile
-   Gera uma imagem chamada `volume-demo`

---

### 2. Criar o volume

```bash
docker volume create app-data
```

Cria um volume Docker para persistência dos dados.

---

### 3. Executar o container

```bash
docker run -it -v app-data:/data volume-demo
```

#### O que acontece nesse momento?

-   O container é criado a partir da imagem
-   O volume é montado em `/data`
-   Logs são gravados de forma persistente
-   O container permanece em execução

---

## Conceitos importantes demonstrados

-   **ENTRYPOINT vs CMD**
-   **Volumes Docker**
-   **Persistência de dados**
-   **Containers de longa duração**
-   **Boas práticas em Dockerfile**

---

## Conclusão

Este projeto mostra como a complexidade aumenta ao trabalhar diretamente com Docker, reforçando a necessidade de ferramentas que simplifiquem a orquestração de containers.

Ele prepara o caminho para o uso do **Docker Compose**, que será apresentado no próximo projeto como solução para reduzir essa complexidade.
