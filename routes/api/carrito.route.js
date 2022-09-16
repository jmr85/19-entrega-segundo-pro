const express = require("express");
const fs = require("fs");
const Carrito = require("../../contenedores/carrito");
const router = express.Router();

router.post("/", async (req, res) => {
  const temp = new Carrito();
  const carrito = await temp.createProduct("firebase");
  res.json(carrito);
});

router.delete("/:id", async (req, res) => {
  const temp = new Carrito();
  const carrito = await temp.deleteById(req.params.id, "firebase");
  res.send(carrito);
});

router.get("/:id/productos", async (req, res) => {
  const temp = new Carrito();
  const carrito = await temp.findOne(req.params.id, "firebase");
  res.send(carrito);
});

router.post("/:id/productos", async (req, res) => {
  const temp = new Carrito();
  const carrito = await temp.addById(req.params.id, req.body, "firebase");
  res.send(carrito);
});

router.delete("/:id/productos/", async (req, res) => {
  const temp = new Carrito();
  const carrito = await temp.deleteProd(req.params.id, "11firebase");
  res.send(carrito);
});

module.exports = router;
