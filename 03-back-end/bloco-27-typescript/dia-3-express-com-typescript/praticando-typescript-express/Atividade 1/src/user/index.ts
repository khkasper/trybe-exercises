import uuid4 from 'uuid4';
import { validateEmail, validateName, validatePassword } from './validators';
import { hashPassword } from './utils';

export const userList: User[] = [];

export interface SafeUser {
  id: string,
  name: string,
  email: string,
}

export interface User extends SafeUser {
  password: string;
}

export const safeUser = (user: User): SafeUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export const createUser = async (
  name: string,
  email: string,
  password: string
): Promise<User | never> => {
  const id = uuid4();
  return {
    id,
    name: validateName(name),
    email: validateEmail(email, userList),
    password: await hashPassword(validatePassword(password)),
  };
};

export default User;
