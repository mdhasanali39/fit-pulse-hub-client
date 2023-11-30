import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {  ThreeDots } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // const location = useLocation()
  if (loading) {
    return (
      <div className="min-h-[86vh] flex justify-center items-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
