const express = require('express');
const ProductosApi = require('./api/productos.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = 8080;
const routerProductos = express.Router();
const productosApi = new ProductosApi();

routerProductos.get('/', (req, res) => {
  productosApi.listarAll().then((result) => {
    res.json(result);
  });
});

routerProductos.get('/:id', async (req, res) => {
  const producto = await productosApi.listar(req.params.id);
  res.json(producto);
  console.log(producto);
});

routerProductos.post('/', async (req, res) => {
  const produto = await productosApi.guardar(req.body);
  res.json(produto);
  console.log(`Producto guardado: `);
  console.log(produto);
});

routerProductos.put('/:id', async (req, res) => {
  const prodActualizado = await productosApi.actualizar(
    req.body,
    req.params.id
  );
  console.log(`Producto actualizado: `);
  console.log(prodActualizado);
  res.json(prodActualizado);
});

routerProductos.delete('/:id', (req, res) => {
  productosApi
    .borrar(req.params.id)
    .then(res.send(`Elemento ${req.params.id} ha sido eliminado.`));
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
server.on('error', (err) => {
  console.log('hubo un error:', err);
});

app.use('/api/productos', routerProductos);
