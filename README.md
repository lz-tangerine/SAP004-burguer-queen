# C||K Burguer

## Prefácio

O objetivo do projeto é fazer um aplicativo responsivo para integrar o salão a cozinha, gerindo esses pedidos.

Os pedidos quando feitos no salão devem ser encaminhados para a cozinha e ao finalizar esses pedidos a cozinha deve setar que estão prontos para entrega.

Tendo então duas telas distintas, a de quem permanece no salão realizando e entregando os pedidos e a da cozinha que prepara. Cada usuário ao se registrar será designado a tela pertinente a sua função, não tendo interação com a outra.

![welcome](https://github.com/lz-tangerine/SAP004-burguer-queen/blob/master/src/imagens/welcome.png)
![login](https://github.com/lz-tangerine/SAP004-burguer-queen/blob/master/src/imagens/login.png)
![register](https://github.com/lz-tangerine/SAP004-burguer-queen/blob/master/src/imagens/register.png)

## Funcionamento

Após realizar o login, a página é automaticamente redirecionada conforme a função cadastrada.

O usuário do salão tem duas abas de utilização:

    Menu Pedidos: O usuário pode adicionar ou excluir itens ao pedido. Ao adicionar os hamburgueres, é necessário selecionar o tipo de Hamburguer (Bovino, Frango ou Vegetariano) e opcionalmente, colocar um adicional de queijo e/ou ovo por R$ 1,00 cada. Ao finalizar, é necessário colocar o numero da mesa. Pode-se também excluir todo o pedido no botão cancelar.

    Em Entrega: O usuário consegue visualizar em ordem de preparação, todo os pedidos disponíveis para serem entregues. Além disso, consegue visualizar os ultimos pedidos entregues e o tempo de atendimento total (da realização do pedido até ser entregue)

O usuário da cozinha tem apenas um ambiente de utilização:

    O usuário visualiza os pedidos em ordem. Ao finalizar a preparação, o usuário deve concluir o pedido, para que seja feita a entrega. Além disso, consegue visualizar os últimos pedidos e o tempo de preparo (ao ser pedido até a finalização do preparo)

## Considerações Técnicas

A aplicação foi desenvolvida para ser um Single Page App, sendo utilizado o React Hooks. Além disso, a sua interface foi desenvolvida para ser utilizada em Tablets.

Dependencias utilizadas:

    Firebase

    React Router

    Babel

## Protótipo e Teste de Usabilidade

Pensando no usuário, foi desenvolvido o protótipo no Figma. Buscou-se uma interface intuitiva de fácil acesso, com botões grandes para boa leitura e manuseio. As cores foram pensadas para diminuir a luminosidade, proporcionando mais conforto ao funcionario e serem sugestivas a interação do usuario.

## Futuras implamentações

Deixar a aplicação offline.

Uma página gerencial, que visualiza todos os pedidos em ordem de criação e seus respectivos estados.

Implantar testes que cubram 100% de statements, functions, lines e branches
