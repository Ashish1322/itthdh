import { createContext, useState } from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export const HisContext = createContext(null);

export default function HisProvider({ children }) {
  const BASE_URL = "http://localhost:3001";

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = (email, password) => {
    fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // 1. Store the data in the user state
          setUser(data.user);
          // 2. Navigate to the routes according to role
          const role = data.user.role;
          if (role == "DOCTOR") {
            navigate("/doctor/dashboard");
          } else if (role == "PATIENT") {
            navigate("/patient/dashboard");
          } else {
          }
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => alert(err.message));
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const signup = (email, password, phoneNumber, gender, name) => {
    fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, phoneNumber, gender }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(
            "Please activate your account by the link shared on your email !"
          );
          navigate("/");
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <HisContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </HisContext.Provider>
  );
}
