const TOKEN_KEY = 'token';

const isLogin = () => {
  // !! 是一个双重否定操作符。它将值转换为布尔值（true 或 false）。
  // 如果 localStorage.getItem(TOKEN_KEY) 返回一个非空字符串（即 token 存在），!! 将其转换为 true。
  // 如果返回 null 或 undefined（即 token 不存在），!! 将其转换为 false。
  return !!localStorage.getItem(TOKEN_KEY);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken };
