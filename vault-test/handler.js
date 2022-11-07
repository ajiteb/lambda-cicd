'use strict';

const config = require("./config");
// console.log(config.DB_CONFIG);

module.exports.testVault = event => {
  fs.readFile("/tmp/secret.json", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
 });
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