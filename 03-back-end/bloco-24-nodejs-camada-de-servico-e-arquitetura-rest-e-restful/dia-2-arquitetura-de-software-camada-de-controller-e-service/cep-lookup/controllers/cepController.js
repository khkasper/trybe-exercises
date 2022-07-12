const CepService = require('../services/cepService');

const getCep = async (req, res, next) => {
  const { cep } = req.params;
  const result = await CepService.getCep(cep);
  if (result.error) return next(result);
  res.json(result);
};

const create = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const result = await CepService.create({
    cep: cep.replace('-',''),
    logradouro,
    bairro,
    localidade,
    uf
  });
  if (result.error) return next(result);
  res.status(201).json(result);
};

const getAll = async (req, res, next) => {
  const result = await CepService.getAll();
  res.json(result);
};

module.exports = {
  getCep,
  create,
  getAll
};