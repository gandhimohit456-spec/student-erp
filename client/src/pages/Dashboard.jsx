import Sidebar from "../components/Sidebar";

function Dashboard() {
    return (
        <div style={{ display: "flex",fontFamily: "Arial"}}>
            <Sidebar />

            <div style = {{ padding: "20px", width: "100%", background: "#f1f5f9", minHeight : "100vh"}}>
                <h1>Student Dashboard</h1>

                <div style={{ display:"flex", gap: "20px", marginTop: "20px", flexWrap: "wrap"}}>
                    <div style = {cardStyle}>
                        <h3>Attendace</h3>
                        <p>85%</p>
                    </div>

                    <div style = {cardStyle}>
                        <h3>Marks</h3>
                        <p>78%</p>
                    </div>

                    <div style={cardStyle}>
                        <h3>Assignment</h3>
                        <p>3 Pending</p>
                    </div>

                    <div style={cardStyle}>
                        <h3>Notices</h3>
                        <p> 2 New</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "180px",
    boxShadow: "0 2px 8px rgba(0, 0,0,0.1)"
};

export default Dashboard;