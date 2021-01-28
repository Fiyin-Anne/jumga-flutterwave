# Rule Validation API

This is an API for validating given data against specified set of rules. Check it out here: [Rule Validation API](https://flutterwave-rule-validation.herokuapp.com/)

### Documentation

A detailed documentation of the api can be found here: [API Documentation](https://documenter.getpostman.com/view/11752155/TW6xmnUG)

### Dependencies

- [NodeJS (`>=12.0.0`)](https://nodejs.org/en/download/)
- [ExpressJS](https://expressjs.com/)

### Run Project Locally

- Clone the project
- cd into the project's folder and run `npm install` to install dependencies
- Create a `.env` file and add `PORT` value to it
- Run `npm run dev` to start the server

#### HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods:

- `POST` Create a resource
- `GET` Get a resource or list of resources

For `POST`, the body of your request must be a JSON payload.

#### HTTP Response Codes
Each response will be returned with one of the following HTTP status codes:

- `200` `OK` Successful request
- `400` `Bad Request` There was a problem with the request
- `500` `Server Error` Server error

