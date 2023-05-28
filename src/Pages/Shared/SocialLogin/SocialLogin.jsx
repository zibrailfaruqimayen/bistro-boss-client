import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    console.log("btn click");
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider">or</div>
      <div className="text-center my-6 space-x-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline text-2xl"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline text-2xl"
        >
          <FaFacebook></FaFacebook>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
