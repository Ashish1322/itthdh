import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { HisContext } from "../HisContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(HisContext);

  console.log("Protected Route", user);

  return user == null ? <Navigate to="/" /> : children;
}
