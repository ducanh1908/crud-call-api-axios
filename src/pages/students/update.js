import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studentApi from "../../api/student-api";
import { Link } from "react-router-dom";

UpdateStudent.propTypes = {};

function UpdateStudent(props) {
  const { id } = useParams();
  const [students, setStudent] = useState([]);

  useEffect(() => {
    if (id) {
      const getStudent = async () => {
        studentApi
          .get(id)
          .then((student) => {
            setStudent(student);
          })
          .catch((error) => {
            throw new ErrorMessage();
          });
      };
      getStudent();
    }
  }, [id]);

  const handleSubmit = async (values) => {
    await studentApi
      .update(values)
      .then((student) => {
        setStudent(student);
      })
      .catch((error) => {
        throw new ErrorMessage();
      });
  };
  return (
    <div>
      <div className="container">
        <h1>Update Product</h1>
        <Formik
          initialValues={students}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <Field className="name" type="text" name="name" />
              <ErrorMessage
                name="name"
                className="alert  alert-danger alert-dismissible"
                component={"span"}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description
              </label>
              <Field className="description" type="text" name="description" />
              <ErrorMessage
                name="description"
                className="alert  alert-danger alert-dismissible"
                component={"span"}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="action" className="col-sm-2 col-form-label">
                Action
              </label>
              <Field className="action" type="text" name="action" />
              <ErrorMessage
                name="action"
                className="alert  alert-danger alert-dismissible"
                component={"span"}
              />
            </div>

            {/*   */}
            <div className="mb-3">
              <div className="mb-3">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
              </div>
              <div className="mb-3">
                <Link to="/" className="btn btn-primary">
                  Back to list
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default UpdateStudent;
