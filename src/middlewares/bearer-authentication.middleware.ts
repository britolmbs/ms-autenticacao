import { NextFunction, Request, Response } from 'express';
import ForbiddenError from '../models/errors/forbidden.error.model';
import JWT from 'jsonwebtoken';
import userRepository from '../repositories/user.repository';

async function bearerAuthenticationMidleware(req: Request, res: Response, next: NextFunction) {

    try {
        const authotizationHeader = req.headers['authorization'];

        if (!authotizationHeader) {
            throw new ForbiddenError('Credenciais não Informadas');
        }

        const [authorizationType, token] = authotizationHeader.split(' ');

        if (authorizationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de autorização inválida');
        }

        const tokenPayload = JWT.verify(token, 'my_secret_key');



        if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
            throw new ForbiddenError('Token Ivalido');
        }

        const uuid = tokenPayload.sub;

        const user = {
            uuid: tokenPayload.sub,
            username: tokenPayload.username
        };

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }


}

export default bearerAuthenticationMidleware;