import { Request, Response } from 'express';
import userService from './user.service';

class UsersController {

  async createUser(req: Request, res: Response) {
    try {
      const { name, mobileNo, email, password } = req.body;
      const user = await userService.createUser(name, mobileNo, email, password);
      res.status(201).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const updates = req.body;
      const user = await userService.updateUser(userId, updates);
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      await userService.deleteUser(userId);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async listUsers(req: Request, res: Response) {
    try {
      const users = await userService.listUsers();
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async searchUserByName(req: Request, res: Response) {
    try {
      const { name } = req.query;
      const users = await userService.searchUserByName(name as string);
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await userService.loginUser(email, password);
      res.send(token);
    } catch (err) {
      res.status(401).send('Invalid credentials');
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = await userService.getUser(userId);
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

export default new UsersController();
