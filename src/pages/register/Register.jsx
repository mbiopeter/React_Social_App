import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
        <div className="card">
          <div className="left">
            <h1>Vibe Verse</h1>
            <p>Our platform is dedicated to fostering a vibrant community where individuals from all walks of life come together to share their passions, experiences, and aspirations. </p>
            <span>Have an account?</span>
            <Link to='/Login'>
              <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="text" placeholder="Name" />            
              <button>Register</button>
              <Link to='/Login' style={{textDecoration:'none'}}>
                <span>Have an Account? Login</span>
              </Link>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Register
