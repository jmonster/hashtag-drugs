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
  // const products = server.createList('product', 10, { brand });

  const products = [
    server.create('product', {
      name: 'Sour Tangie',
      pictures: [server.create('picture', { url: '/assets/images/Pax_Era_Pod_Jetty_Sativa_Sour_Tangie_Menu_preview.jpg'})],
      brand
    }),

    server.create('product', {
      name: 'Blue Diesel',
      pictures: [server.create('picture', { url: '/assets/images/Pax_Era_Pod_Jetty_Sativa_Blue_Diesel_Menu_preview.jpg'})],
      brand
    }),

    server.create('product', {
      name: 'Sunset Sherbet',
      pictures: [server.create('picture', { url: '/assets/images/Pax_Era_Pod_Jetty_Indica_Sunset_Sherbet_Menu_preview.jpg'})],
      brand
    })
  ];

  server.create('cart-item', { product: products[0], cart });
  server.create('cart-item', { product: products[1], cart });
  server.create('cart-item', { product: products[2], cart });

  server.create('order', {
    purchaser: user,
    cart
  });
}
