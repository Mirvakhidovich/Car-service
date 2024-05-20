import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { apiCheckAuth } from "../services/apiAuth";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await apiCheckAuth();

        if (response.status === "success") {
          localStorage.setItem("user", JSON.stringify(response.data));
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return children;
};

export default ProtectedRoute;
