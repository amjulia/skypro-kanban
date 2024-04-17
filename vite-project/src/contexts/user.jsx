import { createContext, useContext, useState } from "react";
import { routeObj } from "../lib/const";
import { useNavigate } from "react-router-dom";

function checkLS() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (error) {
    localStorage.removeItem("user");
    return null;
  }
}

export const UserContext = createContext(null);


export function userProvider({children}) {
  
  const [user, setUser] = useState(checkLS());
  const navigate = useNavigate();

function userLogin(newUser) {
  console.log(newUser);
  localStorage.setItem("user", JSON.stringify(newUser));
  setUser(newUser);
  navigate(routeObj.MAIN);
}

function logout() {
  localStorage.removeItem("user");
  setUser(null);
  navigate(routeObj.LOGIN);
}
return(
  <UserContext.Provider value={{user, userLogin, logout}}>
      {children}
  </UserContext.Provider> 
)

}



export function useUserContext() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("Данные пользователя не были найдены");
  }
  return user;
}
