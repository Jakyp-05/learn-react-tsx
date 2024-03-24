import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const auth = false;
  return auth ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRouter;
