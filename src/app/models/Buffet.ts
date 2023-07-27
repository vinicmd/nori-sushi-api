import {model, Schema} from 'mongoose'

export const Buffet = model(
  'Buffet',
  new Schema({
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    status: {
      type: String,
      enum: ['OPEN', 'CLOSED'],
      default: 'OPEN',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      required: false,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
          },
          quantity: {
            type: Number,
            default: 1,
          },
          status: {
            type: String,
            enum: ['ORDERED', 'DELIVERED'],
            default: 'ORDERED',
          },
        },
      ],
    },
  }),
)
