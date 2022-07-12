const isValid = ({ firstName, lastName, email, password }) => {
	const errors = [];
	if (!firstName) errors.push('O campo "firstname" é obrigatório.');
	if (!lastName) errors.push('O campo "lastName" é obrigatório.');
	if (!email) errors.push('O campo "email" é obrigatório.');
	if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		errors.push('O "email" deve estar no formato email@email.com.');
	}
	if (!password) errors.push('O campo "password" é obrigatório.');
	if (password && password.length < 6)
	errors.push('O "password" deve ter no mínimo 6 caracteres.');
	return { error: errors.length ? errors : null };
};

const addUser = async ({ firstName, lastName, email, password }) => {
	const [user] = await connection.execute(
		'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
		[firstName, lastName, email, password]
	);
	const { insertId } = user;
	return { id: insertId, firstName, lastName, email, password };
};

const getUsers = async () => {
	const [result] = await connection.execute('SELECT * FROM users');
	return result;
};

const getUserById = async (id) => {
	const [result] = await connection.execute(
		'SELECT id, first_name, last_name, email FROM users WHERE id = ?',
		[id],
		);
	if (!result.length) return null;
	return result;
};

const editUser = async (id, userData) => {
	const { firstName, lastName, email, password } = userData;
	const user = await getUserById(id);
	if (!user) return null;
	await connection.execute(
		'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
		[firstName, lastName, email, password, id],
	);
	return { id, ...userData };
};

module.exports = {
	addUser,
	editUser,
	isValid,
	getUsers,
	getUserById,
};
