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
    isBuffet: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: [
        'APPETIZER',
        'URAMAKI',
        'HOT',
        'HOSOMAKI',
        'GULKAN',
        'NIGUIRI',
        'PREMIUM',
      ],
    },
    imagePath: {
      type: String,
      default:
        'https://res.cloudinary.com/norisushi/image/upload/v1690469570/production/noImage_fhqe51.jpg',
    },
  }),
)
