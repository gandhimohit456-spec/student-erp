function Marks() {
  const marks = [
    { subject: "Math", score: 78 },
    { subject: "Java", score: 84 },
    { subject: "DBMS", score: 74 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Marks</h1>

      {marks.map((item, index) => (
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
          <p>{item.score}</p>
        </div>
      ))}
    </div>
  );
}

export default Marks;