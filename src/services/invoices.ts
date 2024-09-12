import axios from "axios";

const BASE = process.env.NEXT_PUBLIC_API_URL;

const getInvoices = () => axios.get(`${BASE}/all-products`);
const InvoiceOperations = {
  getInvoices,
};
export default InvoiceOperations;
