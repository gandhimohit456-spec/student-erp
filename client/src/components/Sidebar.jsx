import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div
            style={{
                width: "220px",
                height: "100vh",
                background: "#1e293b",
                color: "white",
                padding: "20px"
            }}
            >
                <h2>ERP</h2>

                <div style = {{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px"}}>
                    <Link to="/dashboard" style = {linkStyle}>Dashboard</Link>
                    <Link to="/attendance" style = {linkStyle}>Attendance</Link>
                    <Link to="/marks" style={linkStyle}>Marks</Link>
                    <Link to="/login" style = {linkStyle}>Login</Link>
                    <Link to="/assignments" style={linkStyle}>Assignments</Link>
                    <Link to="/notices" style={linkStyle}>Notices</Link>
                </div>
            </div>
    );
}

const linkStyle = {
    color: "white",
    textDecoration: "none"
};

export default Sidebar;