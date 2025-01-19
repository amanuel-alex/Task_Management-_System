import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

// Interface for the user
interface IRegistration extends Document {
  name: string;
  email: string;
  password: string;
}

// Define the schema
const RegistrationSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash the password before saving it to the database
RegistrationSchema.pre<IRegistration>("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Create the model
const RegistrationModel = mongoose.model<IRegistration>(
  "Registration",
  RegistrationSchema
);

export default RegistrationModel;
