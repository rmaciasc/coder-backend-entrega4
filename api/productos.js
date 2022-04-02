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
  }

  async actualizar(prod, id) {
    const objectIndex = this.productos.findIndex((x) => x.id === id);
    this.productos[objectIndex] = prod;
  }

  async borrar(id) {
    id = parseInt(id);
    const objectIndex = this.productos.findIndex((x) => x.id === id);
    this.productos.splice(objectIndex, 1);
  }
}

module.exports = ProductosApi;

// testProd = {
//   name: 'raul',
//   raza: 'humano',
// };

// const humans = new ProductosApi();

// humans.guardar(testProd).then(() => {
//   console.log(humans.productos);
//   humans.borrar(1).then(console.log(humans.productos));
// });
// console.log(humans.productos);

// const hola = await humans.guardar(testProd);

// console.log(humans.productos);
// await humans.borrar(1);
// console.log(humans.productos);
