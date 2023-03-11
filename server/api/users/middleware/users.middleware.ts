import express from 'express';
import userService from '../services/user.services';
import debug from 'debug';

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