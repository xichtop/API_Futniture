var sql = require("mssql");
// config for your database
config = {
  user: "sa",
  password: "260699",
  server: "localhost",
  database: "FurnitureAPI",
  post: 1433,
  options: {
    encrypt: false,
  },
};

executeQuery = function (res, query) {
  sql.connect(config, function (err) {
    if (err) {
      console.log("there is a database connection error -> " + err);
      res.send(err);
    } else {
      var request = new sql.Request();
      request.query(query, function (err, result) {
        if (err) {
          console.log("error while querying database -> " + err);
          res.send(err);
        } else {
          res.send(JSON.stringify(result.recordset));
          sql.close();
        }
      });
    }
  });
};

module.exports = executeQuery;
