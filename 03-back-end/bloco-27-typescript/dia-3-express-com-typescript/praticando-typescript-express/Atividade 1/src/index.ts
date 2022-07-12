import express from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  getUsersController,
  loginUserController,
  updateUserController
} from "./controllers";

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.get("/users", getUsersController);

app.get("/users/:id", getUserController);

app.delete("/users/:id", deleteUserController);

app.patch("/users/:id", updateUserController);

app.post("/user", createUserController);

app.post("/login", loginUserController);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
