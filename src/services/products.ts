import axios from "axios";

const BASE = process.env.NEXT_PUBLIC_API_URL;

const getProducts = () => axios.get(`${BASE}/all-products`);
const ProductOperations = {
  getProducts,
};
export default ProductOperations;
