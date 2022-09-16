const express = require("express");
const router = express.Router();
const Producto = require("../../contenedores/product");

router.get("/", async (req, res) => {
  const temp = new Producto();
  const data = await temp.getAll("firebase");
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const temp = new Producto();
  const product = await temp.findOne(req.params.id, "firebase");
  res.send(product);
});

router.post("/", async (req, res) => {
  const temp = new Producto();
  const producto = await temp.createProduct(req.body, "firebase11");
  res.send(producto);
});

router.put("/:id", async (req, res) => {
  const temp = new Producto();
  const producto = await temp.updateById(req.params.id, req.body, "firebase");
  res.send(producto);
});

router.delete("/:id", async (req, res) => {
  const temp = new Producto();
  const product = await temp.deleteById(req.params.id, "firebase");
  res.send(product);
});
module.exports = router;
