import { Link } from "react-router-dom";
import "./Login.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Login = () => {

  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
        <div className="card">
          <div className="left">
            <h1>Vibe Verse</h1>
            <p>Our platform is dedicated to fostering a vibrant community where individuals from all walks of life come together to share their passions, experiences, and aspirations. </p>
            <span>Do'nt have an account?</span>
            <Link to='/Register'>
              <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login
