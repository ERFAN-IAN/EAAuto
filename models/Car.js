import { Schema, model, models } from "mongoose";

const CarSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      default: 2000,
      required: true,
    },
    milage: {
      type: Number,
      default: 1000,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    seller_info: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    images: [
      {
        public_id: {
          type: String,
        },
        signature: { type: String },
        secure_url: { type: String },
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
    is_published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Car = models.Car || model("Car", CarSchema);
export default Car;
