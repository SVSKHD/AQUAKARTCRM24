import axios from "axios";

const BASE = process.env.NEXT_PUBLIC_API_URL

const getSubCategories = () =>axios.get(`${BASE}/all-subcategories`)
const SubCategoryOperations = {
getSubCategories
}
export default SubCategoryOperations