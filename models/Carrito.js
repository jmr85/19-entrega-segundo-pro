const { Schema, model } = require("mongoose");
const carritoSchema = new Schema({
  timestamp: {
    type: Number, // si lo pongo como date no se respeta el timestamp
    required: true,
  },
  productos: {
    type: String,
  },
});

module.exports = model("Cart", carritoSchema);
