function Login() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
