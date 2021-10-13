# Crud de favorecidos
API feita baseada no mockup de um crud de favorecidos ([link](https://www.figma.com/proto/7806OKvCtZp10tgZwwaqnp/Teste-DEV?page-id=0%3A1&node-id=0%3A86&viewport=241%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=0%3A86)).

## 🚀 Instalando o projeto

Para instalar o projeto, siga estas etapas:

Crie dois bancos de dados com os seguintes nomes: **transfeera** e **transfeera_test**
O primeiro é onde a aplicação armanezará seus dados, a segunda é onde rodarão os testes de integração.
Em seguida, rode os seguintes comandos:
```
npm i
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
Tais comandos irão, respectivamente:
Instalar as dependências da aplicação,
Rodar as migrações para criar as tabelas necessárias,
Rodar as seeds para a popular a tabela Banks com alguns registros para a apresentação do projeto

## ☕ Usando o projeto

Para usar o projeto, apenas digite o seguinte comando:
```
npm start
```
_Documentação da api ainda em desenvolvimento..._ 

## 🧪 Testando o projeto

Para rodar os testes do projeto, você deve primeiro rodar as migrações no seu banco de testes (transfeera_test):
```
npx sequelize-cli db:migrate --env test
```

Então estará apto a rodar os testes unitários:
```
npm run test:unit
```

E também os testes de integração
```
npm run test:integration
```

