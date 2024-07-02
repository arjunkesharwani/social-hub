import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./user.model";
import { JWT_SECRET } from "../common/constant";

class UsersService {
  async createUser(
    name: string,
    mobileNo: string,
    email: string,
    password: string
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      mobileNo,
      email,
      password: hashedPassword,
    });
    return user;
  }

  async updateUser(userId: string, updates: any) {
    updates.updatedAt = new Date();
    const user = await User.findByIdAndUpdate(userId, updates, { new: true });
    return user;
  }

  async deleteUser(userId: string) {
    await User.findByIdAndDelete(userId);
  }

  async listUsers() {
    const users = await User.find();
    return users;
  }

  async searchUserByName(name: string) {
    const users = await User.find({ name: new RegExp(name, "i") });
    return users;
  }

  async loginUser(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ userId: user.id, email }, JWT_SECRET, {
      expiresIn: "5d",
    });
    return { token };
  }

  async getUser(userId: string) {
    const user = await User.findById(userId);
    return user;
  }
}

export default new UsersService() as UsersService;
