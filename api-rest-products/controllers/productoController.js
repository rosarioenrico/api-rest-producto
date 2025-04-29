const productoModel = require('../models/productoModel');

exports.getAllProductos = (req, res) => {
  const productos = productoModel.getAll();
  res.json(productos);
};

exports.createProducto = (req, res) => {
  const nuevoProducto = productoModel.create(req.body);
  res.status(201).json(nuevoProducto);
};

// Opcionales:
exports.getProductoById = (req, res) => {
  const producto = productoModel.getById(parseInt(req.params.id));
  if (!producto) return res.status(404).json({ error: 'No encontrado' });
  res.json(producto);
};

exports.updateProducto = (req, res) => {
  const actualizado = productoModel.update(parseInt(req.params.id), req.body);
  if (!actualizado) return res.status(404).json({ error: 'No encontrado' });
  res.json(actualizado);
};

exports.deleteProducto = (req, res) => {
  const eliminado = productoModel.remove(parseInt(req.params.id));
  if (!eliminado) return res.status(404).json({ error: 'No encontrado' });
  res.json({ mensaje: 'Producto eliminado' });
};
