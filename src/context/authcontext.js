import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();
let value=false;
export const AuthContextProvider = ({ children }) => {
  
  const navigate = useNavigate();
  const [isuserAuthenticated,authenticated]=useState(value)

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // check if the user is logged in.
  const checkUserLoggedIn = async () => {
    try {

        if(localStorage.getItem("token"))
        {
      const res = await fetch(`https://api-staging-v2.sploot.space/api/v2/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res.json();
      
      if (result.data.data) {

        console.log(result.data.data);
        setUser(result.data.data);

        navigate("/blogs/?category=weekend-reads", { replace: true });
        
        
      } else {
        setUser(null);
        navigate("/", { replace: true });
      }
    }
    else{
        navigate("/");
    }
    } catch (err) {
        // navigate("/");
      console.log(err);
    }


  }

return (
    <AuthContext.Provider value={{  user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;