import { useContext } from "react";
import { AppContext } from "../context/UserContext";
import refreshAccessToken from "../utils/refreshAccess";

const useRefresh = () => {
  const { setToken } = useContext(AppContext);

  const refresh = async () => {
    return await refreshAccessToken(setToken);
  };

  return refresh;
};

export default useRefresh;
