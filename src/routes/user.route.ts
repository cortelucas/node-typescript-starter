import { Router } from "express";
import UserController from "../controllers/User.Controller";

const userRoute = Router();

userRoute.post('/register', UserController.register);

export default userRoute;