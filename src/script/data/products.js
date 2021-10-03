const client = contentful.createClient({
  space: 'xck9g4xbpdr4',
  accessToken: 'rmogsL9AUMdeoxs7wJnIriMwOb7nw3luGVrT9CuGUJU',
});

class Products {
  async getProducts() {
    try {
      const response = await client.getEntries({
        content_type: 'kayuProducts',
      });

      // let result = await fetch('./src/products.json');
      // let data = await result.json();

      let products = response.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Products;
