E-commerce Platform
===================

Este é um projeto de plataforma de e-commerce construído usando a arquitetura de microsserviços. Cada serviço é independente e pode ser escalado individualmente. Esta plataforma permitirá a gestão de produtos, usuários, pedidos e pagamentos de forma modular e eficiente.

Serviços
--------

### 1\. Auth Service

O Auth Service é responsável pela autenticação e autorização dos usuários. Ele fornece endpoints para registro, login e gerenciamento de perfis de usuário.

Usando o Auth Service
---------------------

### Endpoints Disponíveis

-   **Registro de Usuário**

    `POST /api/auth/register`

-   **Login de Usuário**

    `POST /api/auth/login`

-   **Perfil do Usuário (Protegido)**

    `GET /api/auth/profile`

