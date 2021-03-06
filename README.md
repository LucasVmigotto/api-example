# api-example

Um projeto que mostra exemplos de APIs construídas com maneiras, tecnologias e recursos diferentes. Atualmente contando com:

* [JavaScript](https://goo.gl/yUCHeG)
* [NodeJs](https://goo.gl/nZ9eqf)
* [TypeScript](https://goo.gl/U1TWdw)
* [Vue](https://goo.gl/rgKjAa)
* [GraphQL](https://goo.gl/zNKvVA)
* [Electron](https://goo.gl/7CMhnC)

APIs disponíveis até o momento:

* Branch [JavaScript + NodeJs](https://goo.gl/pxm1EU)
* Branch [TypeScript + NodeJs](https://goo.gl/5D9Bny)
* Branch [JavaScript + NodeJs + Vue](https://goo.gl/C8WJjo)
* Branch [JavaScript + NodeJs + GraphQL](https://goo.gl/aWqWQp)
* Branch [JavaScript + NodeJs + GraphQL + Vue e Electron](https://goo.gl/8hkB3B)

## Como realizar consultas nas APIs

Para cada padrão usado, seja _REST_ ou _GraphQL_, há maneiras de consumir os dados. Caso queira saber mais de como realiza-las:

* Para [_REST_](https://goo.gl/ecJLuW)
* Para [_GraphQL_](https://goo.gl/sbhx9j)

## Desenvolvimento

1. Clone o repositório.

    ```bash
    git clone https://github.com/LucasVmigotto/api-example.git
    ```

2. Entre no diretório do projeto

    ```bash
    cd api-example
    ```

3. Escolha a branch com a API desejada.

    ```bash
    git checkout <nome da branch>
    ```

### JavaScript + NodeJs

1. Instale os _node modules_

    ```bash
    npm install
    ```

2. Suba o serviço.

    ```bash
    npm start
    ```

    > Irá subir o serviço em localhost:8000

### TypeScript + NodeJs

1. Instale os _node modules_

    ```bash
    npm install
    ```

2. Suba o serviço.

    ```bash
    npm start
    ```

    > Irá subir o serviço em localhost:8000

### JavaScript + NodeJs + Vue

1. Instale os _node modules_

    ```bash
    npm install
    ```

2. Suba o serviço

    ```bash
    npm start
    ```

    > Simultaneamente irá executar o NodeJs em localhost:8000 e o Vue em localhost:8080 (este último em modo de desenvolvimento)

### JavaScript + NodeJs + GraphQL

1. Instale os _node modules_

    ```bash
    npm install
    ```

2. Suba o serviço

    * Sem interface de teste

    ```bash
    npm start
    ```

    > A API estará disponível em localhost: 8000

    * Com interface de teste

    ```bash
    npm run start:dev
    ```

    > A API estará disponível com a interface em localhost:8000/user

### JavaScript + NodeJs + GraphQL + Vue e Electron

1. Instale os _node_modules_

    ```bash
    npm install
    ```

2. Suba o serviço

    * _Server_ com _GraphiQL_, Vue e Electron

    ```bash
    npm start
    ```

    * _Server_ sem _GraphiQL_, Vue e Electron

    ```bash
    npm run start:dev
    ```