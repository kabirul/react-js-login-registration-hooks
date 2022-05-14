import http from "./HttpAuthService";

const register = (username, email, password) => {	
   return http.post("/signup", {username,email,password,}); 
};

const login = (username, password) => {	
  return http.post("/signin", {username,password,});    
};

const logout = () => {
   localStorage.removeItem("user");
   return http.post("/signout"); 
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
