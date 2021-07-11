var executeQuery = require("../data/connectSQL");

const router = (app) => {
  app.get("/", (req, res) => {
    res.send({ message: "Node.js and Express REST API" });
  });

  // Room5
  app.get("/rooms", function (req, res) {
    var query = `select * from Rooms`;
    executeQuery(res, query);
  });

  // Room
  app.get("/rooms", function (req, res) {
    var query = `select * from Rooms`;
    executeQuery(res, query);
  });

  app.get("/rooms/:id", (req, res) => {
    var query = "SELECT * FROM Rooms WHERE Id= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  // Producer
  app.get("/producers", function (req, res) {
    var query = `select * from Producers`;
    executeQuery(res, query);
  });

  app.get("/producers/:id", (req, res) => {
    var query = "SELECT * FROM Producers WHERE Id= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  // Product

  app.get("/products", function (req, res) {
    var query = `select * from Products`;
    executeQuery(res, query);
  });

  app.get("/products/:id", (req, res) => {
    var query = "SELECT * FROM Products WHERE Id= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  app.get("/products/rooms/:id", (req, res) => {
    var query = "SELECT * FROM Products WHERE roomId= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  app.post("/products", (req, res) => {
    //var query = "INSERT INTO [Products] (id,name,price,oldPrice,photo,amount,roomId,producerId) VALUES ('"+req.body.id+"','"+req.body.name+"','"+req.body.price+"','"+req.body.oldPrice+"','"+req.body.photo+"','"+req.body.amount+"','"+req.body.roomId+"','"+req.body.producerId+"')";
    var query =
      "INSERT INTO [Products] (id,name,price,oldPrice,photo,amount,roomId,producerId) VALUES ('" +
      req.body.id +
      "','" +
      req.body.name +
      "'," +
      req.body.price +
      "," +
      req.body.oldPrice +
      ",'" +
      req.body.photo +
      "'," +
      req.body.amount +
      ",'" +
      req.body.roomId +
      "','" +
      req.body.producerId +
      "')";
    executeQuery(res, query);
  });

  app.put("/products/:id", function (req, res) {
    var query =
      "UPDATE Products SET name= '" +
      req.body.name +
      "', email= '" +
      req.body.email +
      "'   WHERE Id= '" +
      req.params.id +
      "'";
    executeQuery(res, query);
  });

  app.delete("/products/:id", (req, res) => {
    var query = "DELETE FROM Products WHERE Id= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  ///// USER
  app.get("/users", (req, res) => {
    var query = "SELECT * FROM Users";
    executeQuery(res, query);
  });

  app.get("/users/:id", (req, res) => {
    var query = "SELECT * FROM Users WHERE username= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  // Orders
  app.get("/orders", (req, res) => {
    var query = "SELECT * FROM Orders";
    executeQuery(res, query);
  });

  // Check delete
  app.get("/products/checkDelete/:id", (req, res) => {
    var query = "SELECT * FROM Orders WHERE productId= '" + req.params.id + "'";
    executeQuery(res, query);
  });
};

module.exports = router;
