'use strict';

const config = require("./config");
console.log(config.DB_CONFIG);

module.exports.testVault = event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello From Create Post!',
        input: event,
      },
      null,
      2
    ),
  };
};