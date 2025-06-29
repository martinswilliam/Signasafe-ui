# SignaSafe UI - Interface de Assinatura Digital

![Angular](https://img.shields.io/badge/Angular-16.x-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Angular Material](https://img.shields.io/badge/Angular%20Material-16.x-F8BBD0?style=for-the-badge&logo=angular)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmartinswilliam%2FSignasafe-ui)

## 📝 Descrição

**SignaSafe UI** é a aplicação de frontend (cliente) para a [API SignaSafe](https://github.com/martinswilliam/Signasafe-api). Desenvolvida com Angular, esta interface de usuário permite que os usuários se registrem, autentiquem, façam upload e assinem documentos digitais de forma segura.

O projeto foi construído com foco em boas práticas de arquitetura de frontend, como a separação de responsabilidades em componentes e serviços, formulários reativos e proteção de rotas.

## ✨ Prévia da Aplicação

![Prévia da Aplicação](URL_DA_SUA_IMAGEM.png)
_(Instruções de como adicionar sua imagem ao final)_

## ✨ Funcionalidades

- **Autenticação de Usuários:** Telas de Login e Registro com validação de formulário.
- **Gerenciamento de Sessão:** Uso de Tokens JWT para manter o usuário logado e persistência de dados no `localStorage`.
- **Rotas Protegidas:** Uso de `AuthGuard` para garantir que apenas usuários autenticados acessem a área principal (Dashboard).
- **Dashboard Interativo:** Exibe uma mensagem de boas-vindas personalizada e lista os documentos do usuário.
- **Upload de Documentos:** Interface para selecionar e enviar arquivos para a API backend.
- **Assinatura de Documentos:** Funcionalidade para solicitar a assinatura digital de um documento listado.

## 🛠️ Tecnologias Utilizadas

- **Angular 16** e **TypeScript**
- **Angular Material**: Para a construção de uma UI moderna e responsiva.
- **Angular Router**: Para navegação entre as páginas (SPA - Single Page Application).
- **Angular Reactive Forms**: Para gerenciamento robusto de formulários.
- **RxJS**: Para lidar com programação reativa e chamadas assíncronas.
- **NPM**: Gerenciador de pacotes e dependências.

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

- [Node.js e NPM](https://nodejs.org/) (versão LTS recomendada)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- A **API backend (SignaSafe API)** deve estar rodando localmente.

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/martinswilliam/Signasafe-ui.git](https://github.com/martinswilliam/Signasafe-ui.git)
    cd Signasafe-ui
    ```

2.  **Instale as dependências:**
    Este comando lê o `package.json` e baixa todas as bibliotecas necessárias para o projeto.

    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    ng serve -o
    ```
    O `-o` abre seu navegador automaticamente em `http://localhost:4200/`. A aplicação irá recarregar automaticamente se você fizer qualquer alteração nos arquivos.

## 🔗 Conectando ao Backend

Esta aplicação foi projetada para se comunicar com a [API SignaSafe](https://github.com/martinswilliam/Signasafe-api). A URL base da API está configurada nos arquivos de serviço dentro de `src/app/services/`. Por padrão, ela aponta para `http://localhost:8080`.
