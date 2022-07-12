import User from ".";

export const validateName = (name: string): string | never => {
  if (name.length < 3) {
    throw new Error('Name must be at least 3 characters');
  }
  return name;
};

export const validateEmail = (email: string, userList: User[]): string | never => {
  userList.forEach(user => {
    if (user.email === email) {
      throw new Error('Invalid email'); // Email already in use
    }
  });
  if (!email.includes('@')) {
    throw new Error('Invalid email');
  }
  if (!email.split('@')[1].includes('.')) {
    throw new Error('Invalid email');
  }
  return email;
};

export const validatePassword = (password: string): string | never => {
  if (password.length < 6 || password.length > 12) {
    throw new Error('Password must be between 6 and 12 characters');
  }
  return password;
};
