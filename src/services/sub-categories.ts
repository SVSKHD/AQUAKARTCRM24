import axios from "axios";

const BASE = NEXT_PUBLIC_API_URL

const getSubCategories = () =>axios.get(`${BASE}/v1/all-subcategories`)
const SubCategoryOperations = {
getSubCategories
}
export default SubCategoryOperations