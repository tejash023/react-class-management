import React from "react";

function ClassInformation({ data }) {
  //localStorage.setItem("classdata", data.toString());
  localStorage.setItem("classdata", data.Stringify);
  return (
    <div className="class-info">
      <p>ID: {data.id}</p>
      <p> School ID: {data.school_id} </p>
      <p>Status: {data.status}</p>
      <div>
        Students Enrolled:
        {data.students.map((student) => (
          <div className="enrolled-students" key={student.student_id}>
            <li>Student ID: {student.student_id}</li>
            <li>Assignment: {student.assignment}</li>
          </div>
        ))}
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ClassInformation;
