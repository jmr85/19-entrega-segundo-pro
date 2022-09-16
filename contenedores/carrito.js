const mongoose = require("mongoose");
const Cart = require("../models/Carrito");
const config = require("../config");
const { v4: uuid4 } = require("uuid");

const db = require("../config/index");

mongoose.connect(config.mongodb.cnxStr);

const carritos = db.collection("carritos");

class Carrito {
  async createProduct(op) {
    if (op === "firebase") {
      let doc = carritos.doc(`${uuid4()}`);
      await doc.create({
        timestamp: +Date.now(),
        productos: "", // aca seria [{}]
      });
      return "Carrito creado en Firebase!";
    } else {
      const cart = await Cart.create({ timestamp: +Date.now(), productos: "" });
      return cart;
    }
  }

  async findOne(id, op) {
    if (op === "firebase") {
      const request = carritos.doc(id);
      const item = (await request.get()).data();
      if (!item) {
        return "Carrito no encontrado";
      }
      const items = item.productos;
      return items;
    } else {
      const carrito = await Cart.findById(id);
      if (!carrito) {
        return "Carrito no encontrado";
      }
      return carrito.productos;
    }
  }
  async deleteById(id, op) {
    if (op === "firebase") {
      const request = await carritos.doc(id).delete();
      if (!request) {
        return "Carrito no encontrado";
      }
      return "el carrito fue eliminado!";
    } else {
      const carrito = await Cart.findById(id);
      if (!carrito) {
        return "Carrito no encontrado";
      }
      await carrito.remove();
      return "Carrito eliminado con exito!";
    }
  }
  async deleteProd(id, op) {
    if (op === "firebase") {
      const request = await carritos.doc(id).update({ productos: "" });
      if (!request) {
        return "Carrito no encontrado";
      }
      return "el producto fue eliminado!";
    } else {
      const carrito = await Cart.findById(id);
      if (!carrito) {
        return "Carrito no encontrado";
      }
      await carrito.update({ productos: "" });
      await carrito.save();
      return "El producto del carrito fue eliminado ";
    }
  }
  async addById(id, data, op) {
    if (op === "firebase") {
      if (!data.productos) {
        return "Solo se puede agregar productos en el req";
      }
      await carritos.doc(id).update(data);

      return "Su carrito fue actualizado con exito!";
    } else {
      const carrito = await Cart.findById(id);
      if (!carrito) {
        return "carrito no encontrado";
      }
      if (!data.productos) {
        return "Solo se puede agregar productos en el req";
      }
      await carrito.update({ productos: data.productos });
      await carrito.save();
      return "El producto fue agregado a su carrito ";
    }
  }
}
module.exports = Carrito;
