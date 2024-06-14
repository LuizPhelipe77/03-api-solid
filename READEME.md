# App

gym app.

## RFs (requisitos funcionais)

- [] deve ser possivel se cadastrar;
- [] deve ser possivel se autenticar;
- [] deve ser possivel obter o perfil de um usuario logado;
- [] deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [] deve ser possivel usuario obeter seu historico de check-ins;
- [] deve ser possivel o usuario buscar academias proximas;
- [] deve ser possivel o usuario buscar academias pelo nome;
- [] deve ser possivel o usuario realizar check-in em uma academia;
- [] deve ser possivel validar o check-in de um usuario;
- [] deve ser possivel cadastrar uma academia;

## RNs (regras de negocio)

- [] o usuario nao deve poder se cadastrar com e-mail duplicado;
- [] o usuario nao pode fazer 2 check-ins no mesmo dia;
- []o usuario nao pode fazer check-in se nao estiver perto da academia; 
- [] o check-in so pode ser validado ate 20 minutos apos criado;
- [] o check-in so pode ser validado por administradores;
- [] a academia so pode ser cadastrada por adm;


## RNFs (requisitos nao-funcionais)

- [] a senha do usuario precisa estar criptografada;
- [] os dados da aplicacao precisa estar persisido em um banco PostgreSQL;
- [] todas listar de cados precisam estar paginadas com 20 itens por pagina;
- [] o usuario deve ser identificado por um JWT (json web token);