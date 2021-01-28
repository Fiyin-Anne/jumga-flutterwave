const { matchedData, validationResult } = require('express-validator');
const { ApplicationError } = require('../helpers/error');

module.exports = (schemas) => {
  const validationCheck = async (request, _, next) => {
    const errors = validationResult(request);
    request = { ...request, ...matchedData(request) };

    if (!errors.isEmpty()) {
      const mappedErrors = errors.array({ onlyFirstError: true });

      const validationErrors = new ApplicationError(
        mappedErrors
      );
      return next(validationErrors);
    }

    return next();
  };

  return [...(schemas.length && [schemas]), validationCheck];
};