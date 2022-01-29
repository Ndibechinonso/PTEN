import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavbarComponent } from "../NavbarComponent/NavbarComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchSignUpData } from "../../redux";
import "./Signup.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import ptennavlogo from "../../Assets/ptenlogo_white.svg";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { idText } from "typescript";

export const Signup = (props: any) => {



  const signupSuccess = useSelector((state: any) => state.signupData.data.msg);
  const signupError = useSelector((state: any) => state.signupData.error.msg);

  const hideAlert = (value: any) => {
    value(false);
  };

  const resetSuccessState = () => {
    setShowFormSuccess(false);
  };

  const resetErrorState = () => {
    setshowFormError(false);
    setFormError("");
  };

  const dispatch = useDispatch();
  const [showFormError, setshowFormError] = useState(false);
  const [formError, setFormError] = useState("");
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  useEffect(() => {
    if (signupSuccess) {
      setShowFormSuccess(true);
    } else if (signupError) {
      setshowFormError(true);
      setFormError(signupError);
      setTimeout(() => {
        resetErrorState();
      }, 5000);
    } else {
      resetSuccessState();
    }
  }, [signupSuccess, signupError]);

  const { handleSubmit, setFieldValue, values, errors, resetForm } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter your first name"),
      lastName: Yup.string(),
      email: Yup.string()
        .email()
        .required("Please enter a valid email account"),
      password: Yup.string().required("Please enter your password"),
    }),
    onSubmit: (values) => {
      dispatch(
        fetchSignUpData(
          values.firstName,
          values.lastName,
          values.email.toLowerCase(),
          values.password,
          resetForm
        )
      );

      // axios
      //   .post("http://localhost:5000/users/register", {
      //     firstName: values.firstName,
      //     lastName: values.lastName,
      //     email: values.email,
      //     password: values.password,
      //   })
      //   .then((response) => {
      //     //   const responseInfo = response.data;
      //     console.log(response, "gggg");
      //     setIsSubmitted(true);
      //     resetForm({});
      //     setShowFormSuccess(true);
      //     // setFormSuccess(response.data.msg);
      //   })
      //   .catch((error) => {
      //     setshowFormError(true);
      //     // setFormError(error.response.data.msg);
      //     setTimeout(hideAlert, 5000, setFormError);

      //     console.log(error.response.data);
      //   });
    },
  });

  return (
    <>
     <div className="top-div sticky">
          <NavbarComponent />
        </div>
        
    <div className="signup-container">
      <div className="text-center">
        <img src={ptennavlogo} alt="logo" />
      </div>
      <h2 className="header mx-auto mb-5">
        Kindly fill out the form below to be a part of PTEN for free or{" "}
        <span className="login">
          <a href="/login">click here</a>
        </span>{" "}
        to login if you already have an account.
      </h2>

      <Form className="mx-auto" onSubmit={handleSubmit}>
        {showFormError && (
          <div className="alert alert-danger text-center" role="alert">
            {formError}
          </div>
        )}
        {showFormSuccess && (
          <div
            className="alert alert-success alert-dismissible fade show text-center"
            role="alert"
          >
            <strong>
              {" "}
              Account successfully created. Click to <a href="/login">Login</a>
            </strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={resetSuccessState}
            ></button>
          </div>
        )}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={(e) => setFieldValue("firstName", e.target.value)}
            />
            {errors.firstName ? (
              <div className="error">{errors.firstName}</div>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={(e) => setFieldValue("lastName", e.target.value)}
            />
            {errors.firstName ? (
              <div className="error">{errors.lastName}</div>
            ) : null}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            {errors.firstName ? (
              <div className="error">{errors.email}</div>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={(e) => setFieldValue("password", e.target.value)}
            />
            {errors.firstName ? (
              <div className="error">{errors.password}</div>
            ) : null}
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
};
