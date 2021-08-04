import { Request, Response } from "express";
import UserModel from "../models/User.Model";

class UserController {

  public async register(req: Request, res: Response): Promise<Response>{
    const user = await UserModel.create(req.body);
    return res.json(user);
  }
}

export default new UserController();