import express from 'express'
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin'
import {CommonRoutesConfig} from '../common/common.routes.config'
import UsersController from './controller/users.controller'


export class UsersRoutes extends CommonRoutesConfig {
      constructor(app: express.Application){
         super(app, 'UsersRoutes')
      }

      configuresRoutes(){
       
        this.app.route('/users')
        .get(UsersController.getAllUser)

        this.app.route('/login')
        .post((req:express.Request, res:express.Response) => {
            res.status(200).send('user sucessfully login!')
        })
        
        this.app.route('/register')
        .post(UsersController.register)

        this.app.route('/user/:userId')
        .all((req:express.Request, res:express.Response, next:express.NextFunction) => {
            next()
        })
        .get((req:express.Request,res: express.Response) => {
            res.status(200).send(`Get user by ID ${req.params.userId}`)
        })
        .put((req:express.Request,res: express.Response) => {
            res.status(200).send(`Get user by ID ${req.params.userId}`)
        })
        .patch((req:express.Request,res: express.Response) => {
            res.status(200).send(`Get user by ID ${req.params.userId}`)
        })
        .delete((req:express.Request,res: express.Response) => {
            res.status(200).send(`Get user by ID ${req.params.userId}`)
        })

           return this.app
      }
}