import loginImg from "../assets/login.png";
import Template from "../components/Template";

function Login({ setisLoggedIn }) {
  return (
    <div>
      <Template
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        formType="login"
        image={loginImg}
        setisLoggedIn={setisLoggedIn}
      />
    </div>
  );
}

export default Login;
