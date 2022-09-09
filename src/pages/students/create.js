import React from "react";

import { useEffect, useState } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import studentApi from "../../api/student-api";
import { Link, useNavigate } from "react-router-dom";

CreateStudents.propTypes = {};

function CreateStudents(props) {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    description: "",
    action: "",
  });

  const handleSubmit = async (values) => {
    await studentApi.add(values);

    navigate("/");
  };

  return (
    <div className="container">
      <h1>Create Product</h1>
      <Formik
        initialValues={student}
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
                Create
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
  );
}

export default CreateStudents;
