import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("username", username);

    navigate("/welcome");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-[#FCF9E9] backdrop-blur-md p-10 rounded-2xl w-full max-w-md border border-[#610049] shadow-lg">
          <h2 className="text-3xl font-semibold text-[#610049] text-center mb-6">
            Masuk ke Akun
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
