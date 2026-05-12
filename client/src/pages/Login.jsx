function Login() {
    return (
        <div style ={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#e2e8f0"
            }}
        >
        <div
            style={{
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                width: "300px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}   
            >
                <h2>Login</h2>

                <input
                    type = "email"
                    placeholder = "Enter Email"
                    style ={{ width: "100%", padding: "10px", marginBottom: "10px"}}
                    />

                    <input 
                        type = "password"
                        placeholder="Enter Password"
                        style = {{ width :"100%", padding: "10px", marginBottom: "10px"}}
                        />

                        <button style = {{ width: "100%", padding: "10px"}}>
                            Login
                        </button>
            </div>
            </div>      
    );
}

export default Login;