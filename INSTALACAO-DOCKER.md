````markdown
# Guia de Instalação do Docker Desktop

## Visão geral

Este guia tem como objetivo fornecer um **tutorial passo a passo completo** para instalar o Docker Desktop nos principais sistemas operacionais: **Windows**, **macOS** e **Linux**.

O Docker Desktop é a ferramenta oficial recomendada pela Docker Inc. para desenvolvimento local, pois fornece:

-   Interface gráfica intuitiva
-   Integração completa com o sistema operacional
-   Gerenciamento de containers, imagens e volumes
-   Suporte a Docker Compose
-   Atualizações automáticas

Este tutorial foi desenvolvido seguindo as **práticas oficiais** recomendadas pela documentação do Docker e inclui verificações detalhadas para garantir que a instalação foi bem-sucedida.

---

## Informações importantes sobre licenciamento

> **Docker Desktop Terms**
>
> O **Docker Desktop é gratuito** para:
>
> -   Uso pessoal
> -   Educação
> -   Projetos open source não comerciais
> -   Pequenas empresas (menos de 250 funcionários **E** menos de $10 milhões em receita anual)
>
> Para empresas maiores ou uso comercial, é necessária uma **assinatura paga** (Docker Pro, Team ou Business).
>
> Para mais informações: [Docker Pricing](https://www.docker.com/pricing/)

---

## Índice

-   [Instalação no Windows](#instalação-no-windows)
-   [Instalação no macOS](#instalação-no-macos)
-   [Instalação no Linux](#instalação-no-linux)
-   [Verificação da instalação](#verificação-da-instalação)
-   [Primeiros passos após a instalação](#primeiros-passos-após-a-instalação)
-   [Solução de problemas comuns](#solução-de-problemas-comuns)

---

## Instalação no Windows

### Requisitos de sistema

Antes de instalar o Docker Desktop no Windows, verifique se seu sistema atende aos seguintes requisitos:

#### Versões do Windows suportadas

-   **Windows 10** 64-bit: Enterprise, Pro ou Education versão 22H2 (build 19045) ou superior
-   **Windows 11** 64-bit: Enterprise, Pro ou Education versão 23H2 (build 22631) ou superior

> **Importante:** Windows Home ou Education permitem executar apenas containers Linux. Para executar containers Windows, é necessário Windows Pro ou Enterprise.

#### Requisitos de hardware

-   Processador de 64 bits com [SLAT (Second Level Address Translation)](https://en.wikipedia.org/wiki/Second_Level_Address_Translation)
-   Mínimo de **4 GB de RAM**
-   Virtualização habilitada na BIOS/UEFI

#### WSL 2 (Recomendado)

-   WSL versão **2.1.5** ou superior
-   Recurso WSL 2 habilitado no Windows

---

### Passo 1: Habilitar e configurar o WSL 2

O WSL 2 (Windows Subsystem for Linux 2) é o backend **recomendado** para Docker Desktop no Windows.

#### 1.1. Verificar se o WSL está instalado

Abra o **PowerShell** ou **Prompt de Comando** como **Administrador** e execute:

```powershell
wsl --version
```

**Saída esperada:**

```
Versão do WSL: 2.1.5.0
...
```

Se o comando retornar informações da versão, o WSL já está instalado. Prossiga para o [Passo 2](#passo-2-baixar-o-docker-desktop).

---

#### 1.2. Instalar ou atualizar o WSL

Se o WSL não estiver instalado ou precisar de atualização, execute:

```powershell
wsl --install
```

**O que esse comando faz:**

-   Instala o WSL 2
-   Instala uma distribuição Linux padrão (geralmente Ubuntu)
-   Configura o WSL 2 como versão padrão

Após a instalação, **reinicie o computador**.

---

#### 1.3. Atualizar o WSL (se necessário)

Para garantir que você tem a versão mais recente:

```powershell
wsl --update
```

---

#### 1.4. Verificar a instalação do WSL

Após reiniciar, verifique novamente:

```powershell
wsl --version
```

Confirme que a versão é **2.1.5** ou superior.

---

### Passo 2: Baixar o Docker Desktop

1. Acesse o site oficial do Docker:
   [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

2. Clique no botão **"Download for Windows"**

3. O arquivo `Docker Desktop Installer.exe` será baixado (aproximadamente 500-600 MB)

**Link direto:** [Docker Desktop Installer.exe](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)

---

### Passo 3: Instalar o Docker Desktop

#### 3.1. Executar o instalador

1. Localize o arquivo `Docker Desktop Installer.exe` na pasta de Downloads
2. Clique duas vezes no arquivo para iniciar a instalação
3. Se solicitado pelo **Controle de Conta de Usuário (UAC)**, clique em **"Sim"**

---

#### 3.2. Configurar a instalação

Na tela de configuração:

-   **Certifique-se** de que a opção **"Use WSL 2 instead of Hyper-V"** está **marcada**
-   Deixe as outras opções padrão

Clique em **"OK"** para continuar.

---

#### 3.3. Aguardar a instalação

O instalador irá:

-   Extrair os arquivos necessários
-   Configurar os componentes do Docker
-   Instalar o Docker Desktop em `C:\Program Files\Docker\Docker`

A instalação pode levar **5-10 minutos** dependendo do seu hardware.

---

#### 3.4. Finalizar a instalação

Quando a instalação for concluída:

-   Clique em **"Close"**
-   Se solicitado, **reinicie o computador**

---

### Passo 4: Iniciar o Docker Desktop

1. Abra o menu **Iniciar** do Windows
2. Procure por **"Docker Desktop"**
3. Clique no ícone para iniciar

Na primeira execução:

-   O Docker exibirá os **Termos de Serviço**
-   Leia e clique em **"Accept"** para continuar
-   O Docker Desktop iniciará e você verá o ícone da baleia na bandeja do sistema

---

### Passo 5: Verificar a instalação

Abra o **PowerShell** ou **Prompt de Comando** e execute:

```powershell
docker --version
```

**Saída esperada:**

```
Docker version 24.0.x, build xxxxxxx
```

Execute também:

```powershell
docker run hello-world
```

**O que esse comando faz:**

-   Baixa uma imagem de teste
-   Cria e executa um container
-   Exibe uma mensagem de confirmação

**Saída esperada:**

```
Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

✅ **Se você viu essa mensagem, a instalação foi bem-sucedida!**

---

## Instalação no macOS

### Requisitos de sistema

#### Versões do macOS suportadas

-   Docker Desktop é suportado nas **duas últimas versões principais** do macOS
-   Recomenda-se usar a versão mais recente disponível

#### Requisitos de hardware

-   Mínimo de **4 GB de RAM**

---

### Escolher a versão correta

O Docker Desktop possui versões diferentes dependendo do processador do seu Mac:

-   **Mac com chip Apple Silicon** (M1, M2, M3, M4): Baixe a versão **ARM64**
-   **Mac com processador Intel**: Baixe a versão **AMD64**

#### Como identificar o tipo de processador

1. Clique no ícone da **Apple** no canto superior esquerdo
2. Selecione **"Sobre Este Mac"**
3. Verifique:
    - Se aparecer **"Chip Apple M1"** (ou M2, M3, M4): Use a versão ARM64
    - Se aparecer **"Processador Intel"**: Use a versão AMD64

---

### Passo 1: Baixar o Docker Desktop

Acesse o site oficial:
[https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

**Links diretos:**

-   **Apple Silicon (M1/M2/M3/M4):** [Docker.dmg (ARM64)](https://desktop.docker.com/mac/main/arm64/Docker.dmg)
-   **Intel:** [Docker.dmg (AMD64)](https://desktop.docker.com/mac/main/amd64/Docker.dmg)

O arquivo `.dmg` será baixado (aproximadamente 500-700 MB).

---

### Passo 2: Instalar o Docker Desktop

#### 2.1. Abrir o instalador

1. Localize o arquivo `Docker.dmg` na pasta de Downloads
2. Clique duas vezes para abrir

Uma janela será aberta mostrando o ícone do Docker e a pasta Applications.

---

#### 2.2. Arrastar para Applications

1. **Arraste** o ícone do **Docker** para a pasta **Applications**
2. Aguarde a cópia dos arquivos

---

#### 2.3. Iniciar o Docker Desktop

1. Abra o **Finder**
2. Vá para **Applications** (Aplicativos)
3. Localize e clique duas vezes em **Docker**

---

#### 2.4. Primeira execução

Na primeira vez que você abrir o Docker Desktop:

-   O macOS pode solicitar confirmação de segurança
-   Clique em **"Open"** (Abrir)
-   Os **Termos de Serviço** serão exibidos
-   Leia e clique em **"Accept"**

---

#### 2.5. Configurações recomendadas

O instalador perguntará sobre configurações:

-   **Opção 1:** "Use recommended settings" (Recomendado)
    -   Configurações automáticas
    -   Requer senha do administrador
-   **Opção 2:** "Use advanced settings"
    -   Permite personalizar configurações

Para a maioria dos usuários, escolha **"Use recommended settings"**.

Digite sua **senha** quando solicitado e clique em **"Finish"**.

---

### Passo 3: Verificar a instalação

Abra o **Terminal** e execute:

```bash
docker --version
```

**Saída esperada:**

```
Docker version 24.0.x, build xxxxxxx
```

Execute o teste:

```bash
docker run hello-world
```

**Saída esperada:**

```
Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

✅ **Instalação concluída com sucesso!**

---

## Instalação no Linux

O Docker Desktop para Linux está disponível para as seguintes distribuições:

-   **Ubuntu** (versão LTS atual e anterior)
-   **Debian** (versão atual e anterior)
-   **Fedora** (versão atual e anterior)
-   **Red Hat Enterprise Linux (RHEL)**
-   **Arch Linux** (experimental)

---

### Requisitos de sistema

#### Requisitos gerais

-   Kernel 64-bit com suporte a virtualização
-   Suporte a virtualização **KVM**
-   **QEMU** versão 5.2 ou superior
-   Sistema de inicialização **systemd**
-   Ambiente desktop: GNOME, KDE ou MATE
-   Mínimo de **4 GB de RAM**

---

### Verificar suporte a KVM

O Docker Desktop no Linux usa KVM (Kernel-based Virtual Machine) para executar containers.

#### Verificar se KVM está habilitado

Abra o terminal e execute:

```bash
kvm-ok
```

**Saída esperada:**

```
INFO: /dev/kvm exists
KVM acceleration can be used
```

---

#### Carregar módulos KVM (se necessário)

Se o KVM não estiver carregado, execute:

```bash
sudo modprobe kvm
```

Para processadores **Intel**:

```bash
sudo modprobe kvm_intel
```

Para processadores **AMD**:

```bash
sudo modprobe kvm_amd
```

---

#### Verificar módulos carregados

```bash
lsmod | grep kvm
```

**Saída esperada:**

```
kvm_intel             167936  0
kvm                  1089536  1 kvm_intel
```

---

#### Configurar permissões do dispositivo KVM

Adicione seu usuário ao grupo `kvm`:

```bash
sudo usermod -aG kvm $USER
```

**Importante:** Faça **logout** e **login** novamente para que as mudanças tenham efeito.

Verificar proprietário do `/dev/kvm`:

```bash
ls -al /dev/kvm
```

---

### Instalação por distribuição

Como cada distribuição Linux tem seu próprio sistema de pacotes, siga o guia específico para sua distribuição:

#### Ubuntu / Debian

**Passo 1:** Baixar o pacote `.deb`

Acesse: [https://docs.docker.com/desktop/setup/install/linux/ubuntu/](https://docs.docker.com/desktop/setup/install/linux/ubuntu/)

Ou baixe diretamente:

```bash
wget https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb
```

**Passo 2:** Instalar o pacote

```bash
sudo apt update
sudo apt install ./docker-desktop-amd64.deb
```

---

#### Fedora / RHEL

**Passo 1:** Baixar o pacote `.rpm`

```bash
wget https://desktop.docker.com/linux/main/amd64/docker-desktop-x86_64.rpm
```

**Passo 2:** Instalar o pacote

```bash
sudo dnf install ./docker-desktop-x86_64.rpm
```

---

### Iniciar o Docker Desktop no Linux

Após a instalação, inicie o Docker Desktop:

```bash
systemctl --user start docker-desktop
```

Ou procure por **"Docker Desktop"** no menu de aplicativos.

---

### Verificar a instalação

Abra o terminal e execute:

```bash
docker --version
```

```bash
docker run hello-world
```

✅ **Instalação concluída com sucesso!**

---

## Verificação da instalação

Independentemente do sistema operacional, execute os seguintes comandos para validar a instalação:

### 1. Verificar versão do Docker

```bash
docker --version
```

**Saída esperada:**

```
Docker version 24.0.x, build xxxxxxx
```

---

### 2. Verificar versão do Docker Compose

```bash
docker compose version
```

**Saída esperada:**

```
Docker Compose version v2.x.x
```

---

### 3. Verificar informações do sistema

```bash
docker info
```

**O que esse comando faz:**

-   Exibe informações detalhadas sobre o Docker
-   Mostra número de containers e imagens
-   Exibe configurações do sistema

**Saída esperada (parcial):**

```
Client:
 Version:    24.0.x
 Context:    default
 ...

Server:
 Containers: 0
 Images: 1
 ...
```

---

### 4. Executar container de teste

```bash
docker run hello-world
```

**O que acontece:**

1. Docker procura a imagem `hello-world` localmente
2. Não encontra, então faz download do Docker Hub
3. Cria um container a partir da imagem
4. Executa o container
5. O container exibe uma mensagem e finaliza

**Saída esperada:**

```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
...
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.
...
```

---

### 5. Listar containers

```bash
docker ps -a
```

**O que esse comando faz:**

-   Lista todos os containers (incluindo os parados)
-   `-a` significa "all" (todos)

**Saída esperada:**

```
CONTAINER ID   IMAGE         COMMAND    CREATED         STATUS                     PORTS     NAMES
abc123def456   hello-world   "/hello"   2 minutes ago   Exited (0) 2 minutes ago             relaxed_name
```

---

### 6. Listar imagens

```bash
docker images
```

**Saída esperada:**

```
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    9c7a54a9a43c   3 months ago   13.3kB
```

---

### 7. Remover o container de teste

```bash
docker rm $(docker ps -aq)
```

**O que esse comando faz:**

-   `docker ps -aq` lista todos os IDs de containers
-   `docker rm` remove os containers

---

### 8. Remover a imagem de teste

```bash
docker rmi hello-world
```

**O que esse comando faz:**

-   Remove a imagem `hello-world` do sistema

---

## Primeiros passos após a instalação

Agora que o Docker está instalado e funcionando, você pode:

### 1. Explorar a interface do Docker Desktop

-   Abra o Docker Desktop
-   Navegue pelas abas:
    -   **Containers**: Gerenciar containers em execução
    -   **Images**: Ver imagens baixadas
    -   **Volumes**: Gerenciar volumes de dados
    -   **Dev Environments**: Ambientes de desenvolvimento

---

### 2. Testar um container simples

Execute um servidor web Nginx:

```bash
docker run -d -p 8080:80 --name meu-nginx nginx
```

**O que esse comando faz:**

-   `run`: Cria e executa um container
-   `-d`: Executa em background (detached)
-   `-p 8080:80`: Mapeia porta 8080 do host para porta 80 do container
-   `--name meu-nginx`: Define um nome para o container
-   `nginx`: Nome da imagem

Acesse no navegador: [http://localhost:8080](http://localhost:8080)

Você verá a página de boas-vindas do Nginx.

Para parar e remover o container:

```bash
docker stop meu-nginx
docker rm meu-nginx
```

---

### 3. Explorar os projetos deste repositório

Agora você está pronto para executar os projetos de exemplo:

-   [Projeto 1 — Alpine Docker Demo](project-01-alpine/README.md)
-   [Projeto 2 — Dockerfile Avançado com Volumes](project-02-volume/README.md)
-   [Projeto 3 — API Node.js com PostgreSQL](project-03-compose/README.md)
-   [Projeto 4 — Frontend React com Vite](project-04-frontend/README.md)

---

### 4. Comandos básicos úteis

| Comando                              | Descrição                                       |
| ------------------------------------ | ----------------------------------------------- |
| `docker ps`                          | Lista containers em execução                    |
| `docker ps -a`                       | Lista todos os containers                       |
| `docker images`                      | Lista imagens disponíveis                       |
| `docker pull <imagem>`               | Baixa uma imagem do Docker Hub                  |
| `docker run <imagem>`                | Cria e executa um container                     |
| `docker stop <container>`            | Para um container                               |
| `docker start <container>`           | Inicia um container parado                      |
| `docker rm <container>`              | Remove um container                             |
| `docker rmi <imagem>`                | Remove uma imagem                               |
| `docker logs <container>`            | Exibe logs de um container                      |
| `docker exec -it <container> bash`   | Acessa o terminal de um container               |
| `docker compose up`                  | Sobe containers definidos no docker-compose.yml |
| `docker compose down`                | Para e remove containers do compose             |

---

## Solução de problemas comuns

### Windows

#### Problema: "WSL 2 installation is incomplete"

**Solução:**

1. Abra PowerShell como Administrador
2. Execute: `wsl --install`
3. Reinicie o computador

---

#### Problema: "Docker Desktop failed to start"

**Solução:**

1. Verifique se a virtualização está habilitada na BIOS
2. Verifique se o WSL 2 está instalado: `wsl --version`
3. Reinstale o Docker Desktop

---

#### Problema: "Cannot connect to the Docker daemon"

**Solução:**

-   Certifique-se de que o Docker Desktop está em execução
-   Verifique o ícone da baleia na bandeja do sistema

---

### macOS

#### Problema: "Docker.app is damaged"

**Solução:**

1. Abra o Terminal
2. Execute: `xattr -d com.apple.quarantine /Applications/Docker.app`

---

#### Problema: "Cannot start Docker Desktop"

**Solução:**

1. Abra **System Preferences > Security & Privacy**
2. Permita que o Docker seja executado

---

### Linux

#### Problema: "Cannot connect to /dev/kvm"

**Solução:**

1. Verifique se KVM está habilitado: `kvm-ok`
2. Adicione-se ao grupo kvm: `sudo usermod -aG kvm $USER`
3. Faça logout e login novamente

---

#### Problema: "Permission denied while trying to connect to Docker daemon"

**Solução:**

```bash
sudo usermod -aG docker $USER
```

Faça logout e login novamente.

---

### Problemas gerais

#### Limpar todos os containers e imagens

**Atenção:** Isso remove TUDO relacionado ao Docker.

```bash
# Parar todos os containers
docker stop $(docker ps -aq)

# Remover todos os containers
docker rm $(docker ps -aq)

# Remover todas as imagens
docker rmi $(docker images -q)

# Limpar volumes não utilizados
docker volume prune -f

# Limpar redes não utilizadas
docker network prune -f
```

---

## Recursos adicionais

### Documentação oficial

-   [Docker Docs](https://docs.docker.com/)
-   [Docker Desktop](https://docs.docker.com/desktop/)
-   [Docker Hub](https://hub.docker.com/)

### Tutoriais recomendados

-   [Docker Getting Started](https://docs.docker.com/get-started/)
-   [Docker Compose](https://docs.docker.com/compose/)
-   [Dockerfile Best Practices](https://docs.docker.com/develop/dev-best-practices/)

### Comunidade

-   [Docker Community Forums](https://forums.docker.com/)
-   [Docker Community Slack](https://www.docker.com/docker-community)
-   [Stack Overflow - Docker](https://stackoverflow.com/questions/tagged/docker)

---

## Conclusão

Parabéns! Você instalou o Docker Desktop com sucesso e está pronto para começar a containerizar suas aplicações.

O Docker é uma ferramenta **essencial** no desenvolvimento moderno, e dominar seus conceitos básicos abrirá portas para:

-   Desenvolvimento consistente entre equipes
-   Deploy simplificado
-   Isolamento de ambientes
-   Microserviços e arquiteturas modernas

Continue explorando os projetos deste repositório para aprofundar seus conhecimentos!

---

**Próximo passo:** Comece pelo [Projeto 1 — Alpine Docker Demo](project-01-alpine/README.md)

````