import { Document, model, Schema } from "mongoose";
import { UserInterface } from "../interfaces/user.interface";

interface UserModelInterface extends UserInterface, Document {}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  }
});

export default model<UserModelInterface>('Usuário', userSchema);