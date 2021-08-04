import { Document, model, Schema } from "mongoose";
import { UserInterface } from "../interfaces/user.interface";
import bcrypt from 'bcrypt';

interface UserModelInterface extends UserInterface, Document {}

const UserSchema = new Schema({
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

UserSchema.pre<UserModelInterface>('save', async function encryptPassword() {
  this.password = await bcrypt.hash(this.password, 8);
});



export default model<UserModelInterface>('Usuário', UserSchema);