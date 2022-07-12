import { Request, Response } from "express";
import User, { createUser, safeUser, userList } from "./user";
import { hashPassword, comparePassword } from "./user/utils";
import { validateEmail, validateName, validatePassword } from "./user/validators";

export const getUsersController = async (req: Request, res: Response) => {
  res.send(userList.map(user => safeUser(user)));
};

export const getUserController = async (req: Request, res: Response) => {
  const user = userList.find((user) => user.id === req.params.id);
  if (user) {
    res.send(safeUser(user));
  } else {
    res.status(404).send({ error: "User not found" });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body as User;
  try {
    const user = await createUser(name, email, password);
    userList.push(user);
    res.send(safeUser(user));
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  const user = userList.find((user) => user.id === req.params.id);
  if (user) {
    const { name, email, password } = req.body as User;
    user.name = name ? validateName(name) : user.name;
    user.email = email ? validateEmail(email, userList) : user.email;
    user.password = password ?
      await hashPassword(validatePassword(password)) : user.password;
    res.send(safeUser(user));
  } else {
    res.status(404).send({ error: "User not found" });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const user = userList.find((user) => user.id === req.params.id);
  if (user) {
    userList.splice(userList.indexOf(user), 1);
    res.send(safeUser(user));
  } else {
    res.status(404).send({ error: "User not found" });
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body as User;
  if (!email || !password) {
    return res.status(400).send({ error: "Email and password are required" });
  }
  const user = userList.find((user) => user.email === email);
  if (user) {
    const isValid = await comparePassword(password, user.password);
    if (isValid) {
      return res.send({ user: safeUser(user), token: "fake token" });
    }
  }
  res.status(404).send({ error: "Invalid user or password." });
};
