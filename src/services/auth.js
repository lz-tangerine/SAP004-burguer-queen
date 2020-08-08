export const USER_KEY = "@user-Token";
export const isAuthenticated = () => localStorage.getItem(USER_KEY) !== null;
export const getToken = () => localStorage.getItem(USER_KEY);
export const login = token => {
  localStorage.setItem(USER_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(USER_KEY);
};