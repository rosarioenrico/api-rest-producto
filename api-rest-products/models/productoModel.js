let productos = [
    { id: 1, nombre: 'Lapicera', precio: 100 },
    { id: 2, nombre: 'Cuaderno', precio: 300 }
  ];
  
  exports.getAll = () => productos;
  
  exports.create = (data) => {
    const nuevo = { id: Date.now(), ...data };
    productos.push(nuevo);
    return nuevo;
  };
  
  exports.getById = (id) => productos.find(p => p.id === id);
  
  exports.update = (id, data) => {
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) return null;
    productos[index] = { ...productos[index], ...data };
    return productos[index];
  };
  
  exports.remove = (id) => {
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) return null;
    return productos.splice(index, 1)[0];
  };
  