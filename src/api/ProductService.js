const BASE_URL = "https://ranekapi.origamid.dev/json/api/produto";

export const ProductService = {
  async getProductByName(produt) {
    return fetch(`${BASE_URL}/${produt}`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  },
};
