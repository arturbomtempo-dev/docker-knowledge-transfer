<div  align="center" id="about">
    <h1 align="center">
        Knowledge Transfer — Introduction to Docker
    </h1>
    <p align="center">
        This project was developed as supporting material for a <strong>Knowledge Transfer (KT)</strong> conducted at <strong>dti digital</strong>, with the goal of presenting fundamental Docker concepts in a didactic and practical way. The repository contains four progressive projects that demonstrate everything from basic container usage to implementing complete applications using Docker Compose and multi-stage builds. Each project has detailed documentation in Portuguese, explaining line by line the Dockerfiles, commands, and concepts involved. The material serves as a practical guide for developers who want to understand and apply containerization in their professional projects.
    </p>
    <img 
        src="./resources/banner-en.png"
        alt="Docker Knowledge Transfer"
    />
</div>
<br>
<div align="center">
    <a href="https://react.dev/" target="_blank">
        <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React">
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
    </a>
    <a href="https://vitejs.dev/" target="_blank">
        <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite">
    </a>
    <a href="https://www.docker.com/" target="_blank">
        <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" alt="Docker">
    </a>
    <a href="https://github.com/ArturColen/docker-knowledge-transfer" target="_blank">
        <img src="https://img.shields.io/badge/status-completed-brightgreen" alt="Status: Completed">
    </a>
    <a href="https://github.com/ArturColen/docker-knowledge-transfer/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/badge/license-MIT-red" alt="MIT License">
    </a>
</div>

---

<div align="center">
    <p>🇧🇷 <a href="https://github.com/arturbomtempo-dev/docker-knowledge-transfer/blob/main/README.md" target="_blank"><strong>Versão em português disponível aqui</strong></a></p>
</div>

<br>

<div id="table-of-contents"></div>

## 📋 Table of Contents

-   [About](#about)
-   [Table of Contents](#table-of-contents)
-   [Knowledge Transfer Objective](#kt-objective)
-   [Projects Structure](#projects-structure)
-   [Projects Demonstration](#projects-demonstration)
-   [Setup and Execution](#setup-and-run-the-application)
-   [Technologies](#technologies)
-   [Author](#author)
-   [License](#license)

<div id="kt-objective"></div>

## 🎯 Knowledge Transfer Objective

This Knowledge Transfer was presented at **dti digital** with the following objectives:

-   [x] Introduce fundamental concepts of **containerization** and **Docker**
-   [x] Demonstrate the evolution of complexity in real Docker projects
-   [x] Teach best practices in creating **Dockerfiles**
-   [x] Present the use of **volumes** for data persistence
-   [x] Explain the orchestration of multiple containers with **Docker Compose**
-   [x] Show optimization techniques with **multi-stage builds**
-   [x] Provide complete documentation in Portuguese for each concept
-   [x] Prepare developers to use Docker in professional environments
-   [x] Include complete installation guide for Docker Desktop for all operating systems

<div id="projects-structure"></div>

## 🗂️ Projects Structure

The repository contains four progressive projects, each introducing new concepts and complexity:

### 📦 Project 1 — Alpine Docker Demo

**Concepts:** Basic introduction to Docker, images, containers, and Dockerfile.

A simple project that demonstrates how to create a container from an extremely lightweight Alpine Linux image. It teaches the fundamentals of how containers execute processes and the basic lifecycle.

**Technologies:** Alpine Linux, Shell Script  
**Documentation:** [project-01-alpine/README.md](project-01-alpine/README.md)

---

### 📂 Project 2 — Advanced Dockerfile with Volumes

**Concepts:** More complex Dockerfiles, volumes, ENTRYPOINT, data persistence.

Evolves the previous concept by introducing volumes for data persistence, using ENTRYPOINT for main process control, and a more realistic file structure. Demonstrates long-running containers and the importance of volumes.

**Technologies:** Alpine Linux, Shell Script, Docker Volumes  
**Documentation:** [project-02-volume/README.md](project-02-volume/README.md)

---

### 🚀 Project 3 — Node.js API with PostgreSQL using Docker Compose

**Concepts:** Multi-container, Docker Compose, orchestration, Docker networks, service integration.

A complete professional scenario with a REST API in Node.js connected to a PostgreSQL database. Demonstrates how to use Docker Compose to orchestrate multiple services, manage internal networks and volumes declaratively.

**Technologies:** Node.js, TypeScript, Express, PostgreSQL, Docker Compose  
**Documentation:** [project-03-compose/README.md](project-03-compose/README.md)

---

### ⚛️ Project 4 — React Frontend with Vite and Multi-stage Build

**Concepts:** Multi-stage builds, image optimization, serving frontend applications, Nginx.

A modern React application using Vite, containerized with multi-stage build technique to generate extremely lightweight images. The build is done in Node.js and runtime uses Nginx, demonstrating separation between build and production.

**Technologies:** React, TypeScript, Vite, Nginx, Multi-stage Build  
**Documentation:** [project-04-frontend/README.md](project-04-frontend/README.md)

<div id="projects-demonstration"></div>

## 📲 Projects Demonstration

All projects are organized in individual folders, each containing its own detailed documentation in Portuguese.

### 📖 How to Navigate the Projects

Each project has a complete `README.md` file that explains:

-   **Project objective** and demonstrated concepts
-   **File structure** and organization
-   **Line-by-line explanation** of all code (Dockerfile, source code, configurations)
-   **Execution commands** step by step
-   **Technical concepts** with practical examples

### 🎓 Recommended Study Order

It is recommended to follow the projects in numerical order (1 → 2 → 3 → 4), as each builds upon the concepts of the previous one:

1. **Project 1:** Basic Docker fundamentals
2. **Project 2:** Intermediate concepts and persistence
3. **Project 3:** Orchestration and multi-container
4. **Project 4:** Optimization and professional practices

### 📚 Additional Documentation

In addition to the projects, this repository includes:

-   **[INSTALACAO-DOCKER.md](INSTALACAO-DOCKER.md):** Complete installation guide for Docker Desktop for Windows, macOS, and Linux, with detailed step-by-step and troubleshooting.
-   **Commented source code files** in each project
-   **Practical examples** ready for execution

<div id="setup-and-run-the-application"></div>

## 📁 Setup and Execution

### ⚙️ Prerequisites

Before you begin, you need to have the following tools installed on your machine:

-   [Git](https://git-scm.com) - To clone the repository
-   [Docker Desktop](https://www.docker.com/products/docker-desktop/) - To run containers (see the [complete installation guide](INSTALACAO-DOCKER.md))

It is also recommended to use a code editor like [Visual Studio Code](https://code.visualstudio.com/).

### 📦 Installing Docker

If you don't have Docker installed yet, consult the complete installation guide available in this repository:

**[📖 Docker Desktop Installation Guide](INSTALACAO-DOCKER.md)**

The guide contains detailed step-by-step instructions for:

-   Windows (with WSL 2)
-   macOS (Intel and Apple Silicon)
-   Linux (Ubuntu, Debian, Fedora, RHEL)

### 🚀 How to Run the Projects

```bash
# Clone this repository
$ git clone https://github.com/arturbomtempo-dev/docker-knowledge-transfer.git

# Access the project folder
$ cd docker-knowledge-transfer

# Choose one of the projects and enter the folder
$ cd project-01-alpine

# Follow the instructions in each project's README.md
# Each project has specific documented commands
```

### 📂 Repository Structure

```
docker-knowledge-transfer/
├── INSTALACAO-DOCKER.md          # Complete Docker installation guide
├── README.md                      # This file
├── CITATION.cff                   # Citation metadata
│
├── project-01-alpine/             # Project 1: Basic introduction
│   ├── Dockerfile                 # Docker image definition
│   ├── app.sh                     # Execution script
│   └── README.md                  # Detailed documentation
│
├── project-02-volume/             # Project 2: Volumes and persistence
│   ├── Dockerfile                 # Image definition
│   ├── entrypoint.sh              # Initialization script
│   ├── app/
│   │   └── log.sh                 # Main application
│   └── README.md                  # Detailed documentation
│
├── project-03-compose/            # Project 3: Multi-container with Compose
│   ├── docker-compose.yml         # Service orchestration
│   ├── Dockerfile                 # API image definition
│   ├── package.json               # Node.js dependencies
│   ├── tsconfig.json              # TypeScript configuration
│   ├── src/
│   │   └── index.ts               # API code
│   └── README.md                  # Detailed documentation
│
├── project-04-frontend/           # Project 4: Frontend with multi-stage build
│   ├── Dockerfile                 # Multi-stage build
│   ├── index.html                 # HTML template
│   ├── package.json               # React dependencies
│   ├── tsconfig.json              # TypeScript configuration
│   ├── vite.config.ts             # Vite configuration
│   ├── src/
│   │   └── main.tsx               # React code
│   └── README.md                  # Detailed documentation
│
└── presentation/                  # Presentation material (slides)
```

<div id="technologies"></div>

## 💻 Technologies

The following tools and technologies were used in the projects of this Knowledge Transfer:

### Containerization and Orchestration

-   [**Docker**](https://docs.docker.com/): Containerization platform used in all projects to create, run, and manage containers.
-   [**Docker Compose**](https://docs.docker.com/compose/): Orchestration tool used in Project 3 to manage multiple containers and their dependencies.
-   [**Alpine Linux**](https://alpinelinux.org/): Extremely lightweight Linux distribution used as a base in Projects 1 and 2.
-   [**Nginx**](https://nginx.org/): High-performance web server used in Project 4 to serve the React application in production.

### Backend and APIs

-   [**Node.js**](https://nodejs.org/): JavaScript runtime used in Project 3 to run the REST API.
-   [**TypeScript**](https://www.typescriptlang.org/): JavaScript superset that adds static typing, used in Projects 3 and 4.
-   [**Express**](https://expressjs.com/): Minimalist web framework for Node.js used in Project 3 to create the API.
-   [**PostgreSQL**](https://www.postgresql.org/): Relational database used in Project 3, running in a Docker container.

### Frontend

-   [**React**](https://react.dev/): JavaScript library for building user interfaces, used in Project 4.
-   [**Vite**](https://vitejs.dev/): Ultra-fast build tool and development server used in Project 4.

### Scripts and Automation

-   [**Shell Script**](https://www.gnu.org/software/bash/manual/): Scripts used in Projects 1 and 2 to demonstrate processes inside containers.

<div id="author"></div>

## 👨🏻‍💻 Author

---

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/96635074?v=4" width=115><br><sub>Artur Bomtempo</sub>](https://arturbomtempo.dev/) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: |

Developed by Artur Bomtempo 👋🏻. Get in touch:

[![Gmail Badge](https://img.shields.io/badge/-arturbcolen@gmail.com-D14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:arturbcolen@gmail.com)](mailto:arturbcolen@gmail.com)
[![LinkedIn Badge](https://img.shields.io/badge/-Artur%20Bomtempo-0A66C2?style=flat-square&logo=LinkedIn&logoColor=white&link=https://www.linkedin.com/in/artur-bomtempo/)](https://www.linkedin.com/in/artur-bomtempo/)
[![Instagram Badge](https://img.shields.io/badge/-@arturbomtempo.dev-E4405F?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/arturbomtempo.dev/)](https://www.instagram.com/arturbomtempo.dev/)

<div id="license"></div>

## 📜 License

Copyright (c) 2025 Artur Bomtempo Colen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
