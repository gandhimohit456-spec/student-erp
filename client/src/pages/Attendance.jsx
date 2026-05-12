function Attendance() {
  const records = [
    { subject: "Math", status: "Present" },
    { subject: "Java", status: "Absent" },
    { subject: "DBMS", status: "Present" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Attendance</h1>

      {records.map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <p>{item.subject}</p>
          <p>{item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Attendance;