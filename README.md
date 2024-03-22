<h1 align="center">Backend FoodExplorer</h1>

<p >
Foi desenvolvida uma API Rest completa em Node.js e Express para o restaurante fictício FoodExplorer. Por meio dela, é possível gerenciar o menu, incluindo a criação, edição e exclusão de pratos, além de realizar upload de imagens e atualizar status de pedidos. Para os clientes, a API permite visualizar o menu, adicionar pratos ao carrinho, finalizar pedidos com método de pagamento especificado e criar uma lista de pratos favoritos.
</p> 

<p align="center">
  <a href="#estrutura-do-banco-de-dados">Banco de dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#foi-utilizado">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/gabrielbeli/foodexplorer-frontend">Front-end</a>&nbsp;&nbsp;&nbsp;
</p>

## Estrutura do banco de dados:

![Screenshot_3](https://user-images.githubusercontent.com/87456011/231765135-ea6c6ac0-a52e-4b8b-aa6f-1f60dda84e79.png)

## Como rodar

```
npm i
```

```
npm run migrate
```

```
npm run dev
```

```bash
# Admin login
$ email: gabriel@email.com
$ password: 123456
```

## Endpoints

### Users

`POST`:
```bash 
/users/
```
para criar um usurário administrador, basta fazer uma requisição em /users/, informando o nome, email, senha e isAdmin = 1; (int).

### Authenticate (login)

`POST`: 
```bash 
/sessions/
```

### Favorites (pratos favoritos do usuário)

`POST`: 
```bash 
/favorites/
```

`GET`: 
```bash 
/favorites/
```

`DELETE`: 
```bash 
/favorites/:id
```

### Dishes

`POST`: 
```bash 
/dishes/
```

`PUT`: 
```bash 
/dishes/:id
```

`DELETE`: 
```bash 
/dishes/:id
```

`GET`: 
```bash 
/dishes/
```

`GET`: 
```bash 
/dishes/:id
```

`PATCH`: 
```bash 
/dishes/photo/:id
```

### Requests (produtos adicionados no carrinho)

`POST`: 
```bash 
/requests/
```

`GET`: 
```bash 
/requests/
```

`DELETE`: 
```bash 
/requests/:id
```

### Purchases (compras finalizadas)

`POST`: 
```bash 
/purchases/
```

`GET`: 
```bash 
/purchases/
```

`PATCH`: 
```bash 
/purchases/:id
```


## Foi utilizado:
- `Node.js`
- `Express`
- `SQLite`
- `Knex.js`
- `Autenticação`
- `JWT`
- `Middlewares`
- `Upload de imagens`
- `API Restful`
- `Cors`
- `PM2`
- `Deploy e utilização do render`
- `Variáveis de ambiente`
- `Testes automatizados`
- `Jest`

---
## 🎨 Veja o [Front-end](https://github.com/gabrielbeli/foodexplorer-frontend) 

## Autor: [@gabrielbeli](https://www.linkedin.com/in/gabrielbeli)