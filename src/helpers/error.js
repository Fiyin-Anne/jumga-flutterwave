class ApplicationError extends Error {

    constructor(message = 'an error occurred', status = "error", data = null) {
      super(message);
      this.message = message;
      this.status = status;
      this.data = data
    }
}

  
  module.exports = { ApplicationError };