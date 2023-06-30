import {model, Schema} from 'mongoose'

export const Product = model(
  'Product',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  }),
)
