import http from "./HttpUserService";


const getPublicContent = () => {
  return http.get("/all");
};

const getUserBoard = () => {
  return http.get("/user");
};

const getModeratorBoard = () => {
  return http.get("/mod");
};

const getAdminBoard = () => {
  return http.get("/admin");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}

export default UserService;
