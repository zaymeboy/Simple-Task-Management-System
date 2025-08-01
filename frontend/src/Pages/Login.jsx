import '../Style/Form.css';
function Login(){
    return (
        <div className="container">
            <h2>Login</h2>
            <div className="form">
                <p>Email</p>
                <input type="text" />
                <p>Password</p>
                <input type="text"/>
                <button type="submit">Login</button>
            </div>
        </div>
    )
}
export default Login;