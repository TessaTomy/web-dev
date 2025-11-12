import { useState } from 'react';

function DynamicStudentList() {
  const [newStudentName, setNewStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [delIndex, setDelIndex] = useState(0);

  const handleNameChange = (event) => {
    setNewStudentName(event.target.value);
  };

  const addStudent = () => {
    if (newStudentName.trim() === '') return;

    const newStudent = {
      id: students.length + 1,
      name: newStudentName
    };

    setStudents([...students, newStudent]);
    setNewStudentName('');
  };

  const updateIndex = (event) => {
    setDelIndex(Number(event.target.value));
  };

  const removeStudent = () => {
    setStudents(students.filter((x) => x.id !== delIndex));
  };

  return (
    <div align="left">
      <h1 style={{ textDecoration: 'underline', color: 'yellow', fontFamily: 'monospace' }}>
        # Dynamic Student List
      </h1>
      <br />
      Enter name of student:
      <input
        type="text"
        value={newStudentName}
        onChange={handleNameChange}
      />
      <button onClick={addStudent}>Add Student</button>

      <div>
        {students.map((x) => (
          <p key={x.id}>
            {x.id} - {x.name}
          </p>
        ))}
      </div>

      <br />
      Enter ID to remove:
      <input
        type="number"
        onChange={updateIndex}
      />
      <button onClick={removeStudent}>Remove Student</button>
    </div>
  );
}

export default DynamicStudentList;
