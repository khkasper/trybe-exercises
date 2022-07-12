import bcrypt from 'bcrypt'; // Opcional

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
  // Ou `return password;` caso não queira usar bcrypt
};

export const comparePassword = async (password: string, hash: string) =>
  await bcrypt.compare(password, hash);  // Ou `password === hash;` caso não queira usar bcrypt
