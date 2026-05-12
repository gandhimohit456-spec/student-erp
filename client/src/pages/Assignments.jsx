function Assignments() {
  const data = [
    { title: "DBMS Project", due: "15 May" },
    { title: "Java Lab", due: "18 May" },
    { title: "Mini Project", due: "22 May" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Assignments</h1>

      {data.map((item, index) => (
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
          <p>Due: {item.due}</p>
        </div>
      ))}
    </div>
  );
}

export default Assignments;