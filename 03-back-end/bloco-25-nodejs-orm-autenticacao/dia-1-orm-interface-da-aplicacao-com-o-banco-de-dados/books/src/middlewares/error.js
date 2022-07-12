module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    const [details] = err.details
    return res.status(400).json({ message: details.message });
  }
  return res.status(500).json({ message: 'Algo deu errado' });
};