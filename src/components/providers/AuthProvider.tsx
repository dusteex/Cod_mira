import { useEffect, useRef } from "react";
import { useAuthProvider } from "./useAuthProvider"
import { useNavigate } from "react-router-dom";
import { useUserRole } from "./useUserRole";

export const AuthProvider = ({children}) => {

  const {userToken} = useAuthProvider()

  const navigate = useNavigate()

  return <>{children}</>
}
