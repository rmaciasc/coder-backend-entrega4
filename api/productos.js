class ProductosApi {
  constructor() {
    this.productos = [];
    this.id = 0; // empieza en cero y luego sube.
  }

  async listar(id) {
    id = parseInt(id);
    const objectIndex = this.productos.findIndex((x) => x.id === id);
    const producto = this.productos[objectIndex];
    if (!producto) {
      return { error: 'producto no encontrado' };
    } else {
      return producto;
    }
  }

  async listarAll() {
    return this.productos;
  }

  async guardar(prod) {
    this.id++;
    prod.id = this.id;
    this.productos.push(prod);
    return prod;
  }

  async actualizar(prod, id) {
    id = parseInt(id);
    const objectIndex = this.productos.findIndex((x) => x.id === id);
    prod.id = id;
    this.productos[objectIndex] = prod;

    return this.productos[objectIndex];
  }

  async borrar(id) {
    id = parseInt(id);
    const objectIndex = this.productos.findIndex((x) => x.id === id);
    this.productos.splice(objectIndex, 1);
  }
}

module.exports = ProductosApi;
