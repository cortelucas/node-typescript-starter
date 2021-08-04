import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export class App {
  private express: express.Application;
  private port = 8181;

  constructor() {
    this.express = express();
    this.listen();
    this.middleware();
    this.database();
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
    mongoose.connect(`mongodb+srv://corte:280194@cluster0.dl8ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser:true
    });
  }
}