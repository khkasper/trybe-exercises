const CepSchema = require('../schema/cepSchema');

module.exports = (req, _res, next) => {
  const { error } = CepSchema.validate(req.body);

  if (error) return next(error);

  next();
};