import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (token) {
    return <Outlet />;
  } else {
    return null;
  }
};

export default PrivateRoutes;
