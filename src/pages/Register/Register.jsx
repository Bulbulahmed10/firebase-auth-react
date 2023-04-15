import { Link } from "react-router-dom";
import Form from "../../Components/Form/Form";

const ExtraRegisterComponent = () => {
  return (
    <div className="text-center mt-4">
      <Link to="/login" className="text-blue-500 hover:text-blue-600 text-sm">
        Have an account? Login here
      </Link>
    </div>
  );
};

const Register = () => {
  return (
    <div>
      <Form
        title="Register"
        authSystemName="Register"
        ExtraRegisterComponent={<ExtraRegisterComponent />}
      />
    </div>
  );
};
export default Register;
