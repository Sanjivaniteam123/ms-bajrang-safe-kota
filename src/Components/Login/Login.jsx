import { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../Firebase/Firebase";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  let auth = getAuth(app);
  let navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      toast.success("Logged in Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error in Loggin in");
    }
    setLoading(false);
  }

  return (
    <div className=" pt-24 md:mb-32">
      {isLoading && (
        <div className="flex justify-center  items-center">
          <Circles
            height="60"
            width="60"
            color="#f4cc75"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      )}
      <form
        onSubmit={handleLogin}
        className="py-3 px-4 md:px-6 md:py-10  max-w-md mx-auto bg-black bg-opacity-75  rounded-xl mt-4 md:mt-8"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
          />
        </div>

        <div className="flex justify-around ">
          <button
            type="submit"
            className="w-[100px] py-2 px-2 border border-transparent rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
          >
            Login
          </button>
          <Link to="/signup">
            <button
              type="submit"
              className="w-[100px] py-2 px-2 border border-transparent rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
