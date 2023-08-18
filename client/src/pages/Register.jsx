import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavBar from "../components/NavBar";
function Register() {
  const { signup, signin, isAuth, errors: registerErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/profiles");
  }, [isAuth]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bgNetflix">
      <NavBar />
      <div className="backdrop flex justify-center items-center">
        <form className="formFilter" onSubmit={onSubmit}>
          <main>
            <div className="darkBg h-[calc(70vh)] w-[calc(25vw)]  mb-16 p-16 rounded-lg flex flex-col">
              <h1 className="text-white text-3xl font-bold mb-5">Register</h1>
              {registerErrors.length > 0 &&
                registerErrors.map((err, i) => (
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
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Username"
                  />
                  {errors.username && (
                    <p className="text-red-500 mt-2"> Username is required</p>
                  )}
                </div>

                <div>
                  <input
                    className="focus:outline-none px-3 py-2 rounded-md w-full"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2"> Email is required</p>
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

                <button
                  type="submit"
                  className="bg-red-600 font-semibold text-white py-3 px-2 my-3 rounded-md"
                >
                  Register
                </button>
                <p className="text-zinc-400 flex justify-between items-center my-5">
                  Already have an account?{" "}
                  <Link to="/login">
                    <strong className="text-white">Login</strong>
                  </Link>
                </p>
                <p className="text-zinc-400">
                  This page is protected by Google reCAPTCHA to verify that you
                  are not a robot
                </p>
              </div>
            </div>
          </main>
        </form>
      </div>
    </div>
  );
}

export default Register;
