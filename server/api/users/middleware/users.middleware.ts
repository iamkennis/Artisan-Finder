import express from 'express';
import UserServices from '../services/user.services';
import debug from 'debug';
import * as argon2 from 'argon2';

const log: debug.IDebugger = debug('app:users-controller');
class UsersMiddleware {

    async validateRequiredUserBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body && req.body.email && req.body.password) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required fields email and password`,
            });
        }
    }

    async verifyUserPassword( req: express.Request,
        res: express.Response,
        next: express.NextFunction) {
            const user: any = await UserServices.getUserByEmailWithPassword(req.body.email)
            if(user){
                const passwordHash = user.password
                if(await argon2.verify(passwordHash, req.body.password)){
                    req.body = {
                         userId: user._id,
                         email: user.email
                    }
                    return next();
                }
            }
            res.status(400).send('Incorrect email or password')
        }

    // async validateSameEmailDosentExist(req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction){
    //         const users = await userService.
    //         if(req.body && req.body.email && req.body.password){
    //             next()
    //         }else{
    //             res.status(400).send({
    //                 error: `Missing required fields email and password`
    //             });
    //         }
    //     }
}

export default new UsersMiddleware();