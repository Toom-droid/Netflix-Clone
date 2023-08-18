import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/NavBar";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuth } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuth) navigate("/profiles");
  }, [isAuth]);

  return (
    <div className="bgNetflix ">
      <NavBar />

      <div className="backdrop flex justify-center items-center">
        <form onSubmit={onSubmit}>
          <main>
            <div className="darkBg h-[calc(70vh)] w-[calc(25vw)] p-16 rounded-lg flex mb-16 flex-col">
              <h1 className="text-white text-3xl font-bold mb-5">Login</h1>
              {signinErrors &&
                signinErrors.map((err, i) => (
                  <div
                    className="bg-red-500 text-white px-3 py-2 rounded-md my-2"
                    key={i}
                  >
                    {err}
                  </div>
                ))}

              <div className="flex flex-col gap-5 mt-5">
                <div>
                  <input
                    className="focus:outline-none px-3 py-2 rounded-md w-full"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2">Email is required</p>
                  )}
                </div>

                <div>
                  <input
                    className="focus:outline-none px-3 py-2 rounded-md w-full"
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 mt-2">Password is required</p>
                  )}
                </div>
              </div>
              <button className="bg-red-600 font-semibold text-white py-3 px-2 my-3 rounded-md">
                Login
              </button>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
                <p className="text-zinc-400 ">Remember me</p>
              </div>
              <p className="text-zinc-400 flex justify-between items-center my-10">
                Dont have an account?{" "}
                <Link to="/register">
                  <strong className="text-white">Register</strong>
                </Link>
              </p>
              <p className="text-zinc-400 mt-10">
                This page is protected by Google reCAPTCHA to verify that you
                are not a robot
              </p>
            </div>
          </main>
        </form>
      </div>
    </div>
  );
}

export default Login;
