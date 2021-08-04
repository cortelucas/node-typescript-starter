import { Request, Response } from "express";
import UserModel from "../models/User.Model";

class UserController {

  public async register(req: Request, res: Response): Promise<Response>{
    const user = await UserModel.create(req.body);
    const response = {
      message: 'User successfully registered!',
      _id: user._id,
      name: user.name,
    };
    return res.json(response);
  }
}

export default new UserController();