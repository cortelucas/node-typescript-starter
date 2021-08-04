import { model, Schema } from "mongoose";

const messageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  remetente: {
    type: Schema.Types.ObjectId,
    ref: 'Usuário',
    required: false,
  },
  addressee: {
    type: Schema.Types.ObjectId,
    ref: 'Usuário',
    required: false,
  }
});

export default model('Mensagem', messageSchema);