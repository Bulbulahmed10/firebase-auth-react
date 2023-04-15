import Form from "../../Components/Form/Form";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ExtraLoginComponent = () => {
  return (
    <>
      <div className="text-center mt-4">
        <span className="text-gray-500 text-sm">or login with</span>
      </div>
      <div className="flex justify-center mt-2">
        <button className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
          <span className="sr-only">Login with Google</span>
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button className="w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center mr-2">
          <span className="sr-only">Login with GitHub</span>
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center mr-2">
          <span className="sr-only">Login with Facebook</span>
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center mr-2">
          <span className="sr-only">Login with Microsoft</span>
          <FontAwesomeIcon icon={faMicrosoft} />
        </button>
      </div>
      <div className="text-center mt-4">
        <Link
          to="/register"
          className="text-blue-500 hover:text-blue-600 text-sm">
          Don't have an account? Register here
        </Link>
      </div>
      <div className="text-center mt-2">
        <a href="#" className="text-gray-500 hover:text-gray-600 text-sm">
          Forgot password?
        </a>
      </div>
    </>
  );
};

const Login = () => {
  return (
    <Form
      title="Login"
      authSystemName="Login"
      ExtraLoginComponent={<ExtraLoginComponent />}
    />
  );
};
export default Login;
