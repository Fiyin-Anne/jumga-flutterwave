class ApplicationError extends Error {

    constructor(statusCode, message = 'an error occurred', data = null) {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
    }
}

  
  module.exports = { ApplicationError };