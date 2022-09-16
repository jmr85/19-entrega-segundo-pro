const express = require("express");
const carrito = require("./carrito.route");
const productos = require("./productos.route");

const router = express.Router();

router.use("/carrito", carrito);
router.use("/productos", productos);

module.exports = router;
