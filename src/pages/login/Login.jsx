import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
        <div className="card">
          <div className="left">
            <h1>Vibe Verse</h1>
            <p>Our platform is dedicated to fostering a vibrant community where individuals from all walks of life come together to share their passions, experiences, and aspirations. </p>
            <span>Do'nt have an account?</span>
            <button>Register</button>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login
