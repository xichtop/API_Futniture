var executeQuery = require("../data/connectSQL");

const router = (app) => {
  app.get("/", (req, res) => {
    res.send({ message: "Node.js and Express REST API" });
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
      "', price= '" +
      req.body.price +
      "', oldPrice= '" +
      req.body.oldPrice +
      "', photo= '" +
      req.body.photo +
      "', amount= '" +
      req.body.amount +
      "', roomId= '" +
      req.body.roomId +
      "', producerId= '" +
      req.body.producerId +
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

  app.post("/users", (req, res) => {
    var query =
      "INSERT INTO [Users] (username,password,fullname,photo,email,phone,address,admin) VALUES ('" +
      req.body.username +
      "','" +
      req.body.password +
      "',N'" +
      req.body.fullname +
      "',N'" +
      req.body.photo +
      "','" +
      req.body.email +
      "','" +
      req.body.phone +
      "',N'" +
      req.body.address +
      "','" +
      req.body.admin +
      "')";
    executeQuery(res, query);
  });

  app.put("/users/:id", (req, res) => {
    var query =
    "UPDATE Users SET password= '" +
    req.body.password +
    "', fullname= N'" +
    req.body.fullname +
    "', photo= N'" +
    req.body.photo +
    "', email= '" +
    req.body.email +
    "', address= N'" +
    req.body.address +
    "', admin= '" +
    req.body.admin +
    "'   WHERE username= '" +
    req.params.username +
    "'";
    executeQuery(res, query);
  });

  app.delete("/users/:id", (req, res) => {
    var query = "DELETE FROM Users WHERE Id= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  // Orders
  app.get("/orders", (req, res) => {
    var query = "SELECT * FROM Orders";
    executeQuery(res, query);
  });

  app.get("/orders/users/:id", (req, res) => {
    var query = "SELECT * FROM Orders WHERE userId = '" + req.params.id + "'";
    executeQuery(res, query);
  });

  app.get("/order/:id", (req, res) => {
    var query = "SELECT * FROM Orders WHERE id= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  app.post("/orders", (req, res) => {
    var query =
      "INSERT INTO [Orders] (id,userId,bought,date,status) VALUES (" +
      req.body.id +
      ",'" +
      req.body.userId +
      "'," +
      1 +
      ",'" +
      req.body.date +
      "','" +
      req.body.status +
      "')";

    console.log(query);
    executeQuery(res, query);
  });

  app.put("/orders/:id", (req, res) => {
    var query = "UPDATE Orders SET bought = 1 WHERE Id= " + req.params.id;
    executeQuery(res, query);
  });

  // Orders_detail
  app.get("/OrderDetails", (req, res) => {
    var query = "SELECT * FROM Order_Details";
    executeQuery(res, query);
  });

  app.get("/OrderDetails/:id", (req, res) => {
    var query = "SELECT * FROM Order_Details WHERE orderId= '" + req.params.id + "'";
    executeQuery(res, query);
  });

  app.post("/OrderDetails", (req, res) => {
    var query =
      "INSERT INTO [Order_Details] (orderId,productId,quantity) VALUES (" +
      req.body.orderId +
      ",'" +
      req.body.productId +
      "'," +
      req.body.quantity +
      ")";
    executeQuery(res, query);
  });
};

module.exports = router;
