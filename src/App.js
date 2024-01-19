import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '../src/pages/login/Login.jsx';
import Register from '../src/pages/register/Register.jsx';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
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