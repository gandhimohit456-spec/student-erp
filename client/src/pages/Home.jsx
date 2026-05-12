import { Link } from "react-router-dom";

function Home() {
    return (
        <div 
            style = {{
                textAlign: "center",
                marginTop: "100px",
                fontFamily: "Arial"
            }}
            >
                <h1>Student ERP System</h1>
                <p>Manage attendance, marks and assignments</p>

                <div style ={{ marginTop: "20px"}}>
                    <Link to ="/login">
                    <button style = {{ padding: "10px 20px", marginRight: "10px"}}>
                        Login
                    </button>
                    </Link>

                    <Link to ="/dashboard">
                    <button style = {{ padding: "10px 20px"}}>
                        Dashboard
                    </button>
                    </Link>
                </div>
            </div>
    );
}

export default Home;