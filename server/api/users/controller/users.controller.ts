import express from 'express';
import userService from '../services/user.services';
import debug from 'debug';
import argon2 from 'argon2';


const log: debug.IDebugger = debug('app:users-controller');
class UsersController {
     async getAllUser(req:express.Request,res:express.Response){
          const users = await userService.list(50,0);
          res.status(200).send(users);
     }

     async getUserById(req:express.Request,res:express.Response){
        const users = await userService.readById(req.body.id)
        res.status(200).send(users)
     }

    async register(req:express.Request, res:express.Response){
        req.body.password = await argon2.hash(req.body.password);
        const users = await userService.register(req.body)
        res.status(200).send(users)
    }
}

export default new UsersController();