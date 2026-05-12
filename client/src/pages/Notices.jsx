function Notices() {
  const notices = [
    { title: "Exam starts from 20 May" },
    { title: "Fee submission last date 25 May" },
    { title: "Project viva next week" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notices</h1>

      {notices.map((item, index) => (
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
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Notices;