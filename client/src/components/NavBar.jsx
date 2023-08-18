import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import netLogo from "../assets/netflix.svg";
import profileIcon from "../assets/profile.svg";
import { useState } from "react";
import { useMovies } from "../context/MoviesContext";

function NavBar() {
  const { user, logout } = useAuth();
  const { searchMovie, getMovies } = useMovies();
  const navigate = useNavigate();
  const location = useLocation()
  const isMovies = location.pathname === "/movies"
  const [search, setSearch] = useState();

  const onSubmit = async () => {
    if (search) {
      await searchMovie(search);
    } else {
      await getMovies();
    }
  };

  return (
    <div className="flex justify-between items-center px-10  z-50 absolute w-full ">
      {user && isMovies ? (
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 text-md font-medium text-sm">
            <ul>
              <img className="flex h-24 w-40" src={netLogo} alt="logo" />
            </ul>
            <ul
              className="hover:cursor-pointer text-white hover:text-zinc-400 transition-colors"
              onClick={() => navigate("/movies")}
            >
              Home
            </ul>
            <ul
              className="hover:cursor-pointer text-white hover:text-zinc-400 transition-colors"
              onClick={() => navigate("/movies")}
            >
              Series
            </ul>
            <ul
              className="hover:cursor-pointer text-white hover:text-zinc-400 transition-colors"
              onClick={() => navigate("/movies")}
            >
              Movies
            </ul>
            <ul
              className="hover:cursor-pointer text-white hover:text-zinc-400 transition-colors"
              onClick={() => navigate("/movies")}
            >
              Popular News
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <ul>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                <input
                  type="search"
                  className="bg-zinc-800 rounded-md text-white focus:outline-none px-3 py-1"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </form>
            </ul>
            <ul>
              <img
                className="w-12 invert hover:cursor-pointer"
                onClick={() => navigate("/profile")}
                src={profileIcon}
                alt="Profile icon"
              />
            </ul>
          </div>
        </nav>
      ) : (
        <img className="flex w-40" src={netLogo} alt="logo" />
      )}

      {user && (
        <button
          className="h-8 ml-4 py-5 px-3 flex items-center bg-orange-500 text-white rounded-md font-semibold"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default NavBar;
