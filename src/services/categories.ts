import axios from "axios";

const BASE = process.env.NEXT_PUBLIC_API_URL

const getCategories = () =>axios.get(`${BASE}/allcategories`)
const CategoryOperations = {
getCategories
}
export default CategoryOperations