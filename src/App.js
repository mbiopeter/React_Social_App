import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Login from '../src/pages/login/Login.jsx';
import Home from '../src/pages/home/Home.jsx';
import Profile from '../src/pages/profile/Profile.jsx';
import Register from '../src/pages/register/Register.jsx';
import NavBar from "./components/navBar/NavBar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext.js";
import { AuthContext } from "./context/AuthContext.js";
function App() {

  const { currentUser } = useContext(AuthContext)

  const { darkMode } = useContext(DarkModeContext);


  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>

      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;