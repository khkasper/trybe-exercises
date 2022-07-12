const connection = require('./connection');

const getCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const [[result]] = await connection.execute(query, [ cep ]);
  return result || null;
};

const getAll = async () => {
  const query = 'SELECT * FROM ceps';
  const [result] = await connection.execute(query);
  return result;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) '
   + 'VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [
    cep, logradouro, bairro, localidade, uf
  ]);
  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  getCep,
  create,
  getAll,
};