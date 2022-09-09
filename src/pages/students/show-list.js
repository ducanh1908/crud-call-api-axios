import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import studentApi from "../../api/student-api";

ListStudent.propTypes = {};

function ListStudent(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const student = await studentApi.getAll();
      setData(student);
    };
    fetchProducts();
  }, [data]);

  const handleDeleteStudent = async (id) => {
    await studentApi.remove(id).then(async () => {
      const student = await studentApi.getAll();
      setData(student);
    });
  };
  return (
    <div>
      <div className="container">
        <h1>List Student</h1>
        <Link to="students" className="btn btn-primary">
          Add Student
        </Link>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.description}</td>

                  <td>{student.action}</td>
                  <td>
                    <Link
                      to={`/students/${student.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteStudent(`${student.id}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default ListStudent;
