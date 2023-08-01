# README - Supliu Test

## Descrição

Este é um guia rápido para rodar localmente a aplicação React. Certifique-se de seguir os passos abaixo para executar corretamente a aplicação em sua máquina.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (https://nodejs.org)
- npm (Normalmente vem com o Node.js)

## Passo 1 - Clonar o repositório

Primeiro, clone este repositório em sua máquina local:

```
git clone https://github.com/maxwell-paulo/supliu-test.git
```

## Passo 2 - Instalar as dependências

Navegue até o diretório da aplicação e instale as dependências usando o npm:

```
cd nome-do-diretorio-da-aplicacao
npm install
```

## Passo 3 - Configurar a chave de autorização

Antes de executar a aplicação, você precisa configurar a chave "Authorization" no arquivo `headers.js`. Siga os passos abaixo:

1. Abra o arquivo `src/services/headers.js` em um editor de texto.

2. Localize a linha que contém a chave "Authorization" e substitua o valor "SEU_EMAIL_AQUI" pelo seu email de usuário.

   Exemplo:

   ```js
   // src/services/headers.js

   const headers = {
     Authorization: "seu_email@example.com",
     // outras chaves e valores...
   };

   export default headers;
   ```

3. Salve o arquivo após realizar a alteração.

## Passo 4 - Executar a aplicação

Para rodar a aplicação localmente, utilize o comando:

```
npm run dev
```

A aplicação será iniciada e estará disponível no endereço http://localhost:5173.

## Passo 5 - Acessar a aplicação

Abra o seu navegador e acesse o seguinte endereço:

```
http://localhost:5173
```

Agora você deverá visualizar a aplicação React em execução.

## Conclusão

Seguindo esses passos, você conseguirá rodar a aplicação React localmente em sua máquina e acessá-la no endereço http://localhost:5173. Lembre-se de configurar corretamente a chave de autorização antes de executar a aplicação.

Caso tenha algum problema ou dúvida, sinta-se à vontade para entrar em contato com os desenvolvedores da aplicação. Aproveite a experiência e divirta-se!
