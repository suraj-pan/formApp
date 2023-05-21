import signupImg from "../assets/signup.png";
import Template from "../components/Template";

function Signup({setisLoggedIn}) {
  return (
    <div>
      <Template
        title="Join the millions learning to code with StudyNotion for free"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        formType="signup"
        image={signupImg}
        setisLoggedIn={setisLoggedIn}
      />
    </div>
  );
}

export default Signup;
