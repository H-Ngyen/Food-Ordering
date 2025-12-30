import type { Request, Response } from "express";
import User from "../models/user";

async function CreateCurrentUser(req: Request, res: Response) {
  const { auth0Id } = req.body;
  const existingUser = await User.findOne({ auth0Id });

  if (existingUser) {
    return res.status(200).send();
  }

  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser.toObject());
}

export default {
  CreateCurrentUser,
};
