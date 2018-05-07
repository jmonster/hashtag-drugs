export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  const cart = server.create('cart');
  const user = server.create('user', {
    id: "currentUser",
    name: "Cookie Monster",
    cart,
    email: "monster@cook.ies"
  });
  const brand = server.create('brand');
  const products = server.createList('product', 10, { brand });

  server.create('cart-item', { product: products[0], cart });
  server.create('cart-item', { product: products[1], cart });
  server.create('cart-item', { product: products[2], cart });
}
