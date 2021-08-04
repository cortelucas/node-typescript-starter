import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './routes/user.route';

export class App {
  private express: express.Application;
  private port = 8181;

  constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Server listening in http://127.0.0.1:${this.port}`);
;    });
  }

  private database(): void {
    mongoose.connect(`mongodb+srv://corte:mh1EdQcQwjY5CoKn@cluster0.dl8ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser:true
    });
  }
  private routes(): void {
    this.express.use('/users', userRoute);
  }
}