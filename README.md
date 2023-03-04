# Builder-Party
API CRUD Conectado ao mongoDB. Usando o express.js como servidor.

##Iniciando o projeto
Se você clonar o repositório, assim que lo abri, digite no console do editor `npm i --save ou npm install`, para que as dependências externas citadas abaixo,
seja instalada na sua aplicação também.

Abra o arquivo **request.rest**, para encontrar os endpoints.

A pasta models, está com a estrutura das tabelas a serem montadas no banco de dados.

Pasta db, guarda o service para iniciar a conexão com o banco de dados, e pode ser usada para guardar futuras logicas envolvendo banco de dados.

Pasta controllers, responsável pelas lógicas das rotas.

Pasta service, logicas externas relacionadas a verificações de parâmetros, tais como função de verificação do custo do orçamento.

## Linguagem utilizada.
Javascript

Implementado método de criar serviços e também criar festas com verificação nas festas para que a mesma não seja criada com o valor maior que o orçamento.
Futura implementação, implementarei verificação de tarefas para que elas não se repitam durante a criação.

Método de atualizar, item único por hora, futura implementação tentarei fazer atualizações em massa, de acordo com alguma situação.

Método de busca tanto individual quanto busca única. Por hora esse método e isso.

Método de deletar, deleta itens por ID, futuro posso buscar implementar a exclusão em massa de acordo com algumas condições.

## Tecnologias usadas
MongoDB, usei o mongoDB como banco de dados NoSQL, que facilita a programação, por oferecer uma facilidade na hora de criar as tabelas, além uma flexibilidade de uso.

mongoose, instalado pelo **npm**, usado para facilitar ainda mais na criação da tabela definindo tipo de dados e sua obrigatoriedade.

express.js, instalado pelo **npm**, usado como servidor para deixar a aplicação ligada para receber requisições.

nodemon, instalado pelo **npm**, usado para refletir mudanças no código.

cors.js, instalado pelo **npm**, usado para permitir requisições externas na aplicação.
