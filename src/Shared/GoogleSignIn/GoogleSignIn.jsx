import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignIn = () => {

const {googleSingIn}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


const handleGoogleSignIn = () =>{
    googleSingIn()
    .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });

    })
}

    return (
        <div>
        <div className="divider">OR</div>
        <div className="text-center">

        <div className="social-button-container w-72 mb-3 ml-10 rounded-md">
    <img onClick={handleGoogleSignIn}
      className=" social-button"
      src="https://i.ibb.co/gSTHXZJ/google-btn.png"
      alt=""
    />
  </div> 
        </div>
    </div>
    );
};

export default GoogleSignIn;