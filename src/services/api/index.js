import axios from "./config";

const products = {
  getProducts: () => axios.get("product"),
};

export default { products };
