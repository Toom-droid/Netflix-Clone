import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";
import Profiles from "./pages/Profiles";
import { AuthProvider } from "./context/AuthContext";
import { MoviesProvider } from "./context/MoviesContext";
import { ProfilesProvider } from "./context/ProfilesContext";
function App() {
  return (
    <AuthProvider>
      <ProfilesProvider>
        <MoviesProvider>
          <BrowserRouter>
            <main>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route element={<ProtectedRoutes />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/profiles" element={<Profiles />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </MoviesProvider>
      </ProfilesProvider>
    </AuthProvider>
  );
}

export default App;
