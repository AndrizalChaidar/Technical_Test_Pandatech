function errorHandler(err, req, res, next) {
  let code = 500;
  let message = "Internal Server Error";
  if (err.cause === 400) {
    code = err.cause;
    message = err.message;
  }
  res.status(code).json({ message });
}

module.exports = errorHandler;
