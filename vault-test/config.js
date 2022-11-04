const fs = require("fs");
var vaultSecret = JSON.parse(fs.readFileSync("/tmp/secret.json"));
module.exports = {
  DB_CONFIG: {
    user: vaultSecret.data.username,
    password: vaultSecret.data.password,
  },
};
