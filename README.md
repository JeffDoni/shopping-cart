# Shopping-cart

Este projeto consiste em uma aplicação web de carrinho de compras, onde é possível adicionar produtos e retirá-los, obter o total da compra e buscar seu endereço por CEP. A aplicação utiliza localstorage e é desenvolvida com Vite.

## Como executar o projeto

### Clonar o repositório
git clone https://github.com/seu_usuario/shoppingCart.git

### Acessar a pasta do projeto
cd shopping-cart

### Instalar as dependências
npm install

### Executar a aplicação
npm run dev

Após executar esses comandos, a aplicação estará rodando em http://localhost:3000 e você poderá acessá-la pelo seu navegador.

## Funcionalidades

A aplicação conta com as seguintes funcionalidades:

- Adicionar produtos ao carrinho: na página de listagem de produtos, é possível adicionar produtos ao carrinho de compras clicando no botão "Adicionar ao carrinho". Ao fazer isso, o produto será adicionado ao carrinho e o total da compra será atualizado.

- Retirar produtos do carrinho: na página do carrinho de compras, é possível retirar produtos clicando no botão "Retirar do carrinho". Ao fazer isso, o produto será removido do carrinho e o total da compra será atualizado.

- Obter total da compra: na página do carrinho de compras, é possível ver o total da compra atualizado de acordo com os produtos adicionados e retirados.

- Buscar endereço por CEP: na página de finalização da compra, é possível buscar seu endereço preenchendo o campo "CEP" e clicando no botão "Buscar". Ao fazer isso, o endereço será preenchido automaticamente nos campos "Rua", "Bairro", "Cidade" e "Estado". Essa funcionalidade utiliza a API ViaCEP.

- Utilizar localstorage: a aplicação utiliza localstorage para armazenar os dados do carrinho de compras, permitindo que os produtos adicionados e retirados persistam mesmo após o usuário fechar o navegador.

## Tecnologias utilizadas

As seguintes tecnologias foram utilizadas para desenvolver a aplicação:

- Vite
- JavaScript
- HTML
- CSS

## Considerações finais

Esse projeto foi desenvolvido como parte do curso de desenvolvimento web da Trybe. Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato. Obrigado pela sua atenção!



