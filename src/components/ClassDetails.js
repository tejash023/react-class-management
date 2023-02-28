import { useState } from "react";
import data from "../data/class.json";
import ClassInformation from "./ClassInformation";

// const data = {
//   "id": "1",
//   "school-id": "1",
//   "students": [
//     {
//       "student-id": "B102",
//       "assignment": ""
//     }
//   ],
//   "status": "ACTIVE"
// }

function ClassDetails() {
  const [addingClass, setAddingClass] = useState(false);
  const [ID, setID] = useState();
  const [schoolID, setSchoolID] = useState();
  const [status, setStatus] = useState();

  let classInfo;
  const handleSubmit = () => {
    setAddingClass(false);
    classInfo = {
      id: ID,
      school_id: schoolID,
      status: status,
    };
    console.log("classInfo", classInfo);
    data.push(classInfo);
  };

  return (
    <>
      <div className="add-class">
        <button>Add Class</button>

        <div className="add-class">
          <input
            placeholder="Enter ID"
            onChange={(e) => setID(e.target.value)}
          />
          <input
            placeholder="Enter School ID"
            onChange={(e) => setSchoolID(e.target.value)}
          />
          <input
            placeholder="Enter Status"
            onChange={(e) => setStatus(e.target.value)}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>

      <div className="class-details">
        {data.map((data) => (
          <ClassInformation data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default ClassDetails;
