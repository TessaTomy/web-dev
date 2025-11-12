function StaticStudentList() {
  const students = [
    { id: 1, name: "X" },
    { id: 2, name: "Y" },
    { id: 3, name: "Z" }
  ];

  return (
    <div align="left">
      <h1 style={{ textDecoration: 'underline', color: 'yellow', fontFamily: 'monospace' }}>
        # Student List (static)
      </h1>
      {students.map((x) => (
        <p key={x.id}>
          {x.id} - {x.name}
        </p>
      ))}
    </div>
  );
}

export default StaticStudentList;
