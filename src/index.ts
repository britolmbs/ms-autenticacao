import express from "express";
import bearerAuthenticationMidleware from "./middlewares/bearer-authentication.middleware";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.routes";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.routes";

const app = express();

// Configuração da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de Rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(bearerAuthenticationMidleware);
app.use(usersRoute);


//Configuração dos Handlers de Erro
app.use(errorHandler);


//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});
