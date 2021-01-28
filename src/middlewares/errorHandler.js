module.exports = (error, request, response, next) => {

  if (response.headersSent) return next(error);

  return response.status(error.statusCode || 500).json({
    message: error.message,
    status: 'error',
    data: error.data,
  });
};