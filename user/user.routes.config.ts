import { CommonRoutesConfig } from '../common';
import express from 'express';

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
  }

  configureRoutes() {
    this.app.route('/users')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('Users');
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send('Users');
      });

    this.app.route('/user/:userId')
      .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
        next();
      })
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`Got user with ID: ${req.params.userId}`);
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send(`Added user with ID: ${req.params.userId}`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`Deleted user with ID: ${req.params.userId}`);
      })

    return this.app;
  }
}
