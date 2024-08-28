import axios from "axios";

const UserLogin = (data) => axios.post(`${BASE}/login`, data);

const userOperations = {
  UserLogin,
};
export default userOperations;
