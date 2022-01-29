import "./LoginPage.scss";
import { NavbarComponent } from "../NavbarComponent/NavbarComponent";
import { Form, Button } from "react-bootstrap";
import ptennavlogo from "../../Assets/ptenlogo_white.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchLogin } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { HomePage } from "../HomePage/HomePage";


export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedIn = useSelector((state: any) => state.loginData.data);


  const { handleSubmit, setFieldValue, values, errors, resetForm } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .required("Please enter a valid email account"),
      password: Yup.string().required("Please enter your password"),
    }),
    onSubmit: (values) => {
      // dispatch(fetchLogin(values.username, values.password))

      // const headers = {
      //   "Content-Type": "application/json",
      // };

      // axios
      //   .post(
      //     "http://localhost:5000/users/authenticate",
      //     {
      //       username: values.username,
      //       password: values.password,
      //     },
      //     { headers }
      //   )
      //   .then((res: any) => {
      //     //   const responseInfo = response.data;
      //     if (res.status === 200) {
      //       // this.props.history.push('/');
      //       navigate("/home");
      //     } else {
      //       const error = new Error(res.error);
      //       throw error;
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error.response.data);
      //   });

      const backendURL = process.env.REACT_APP_BACKEND_URL;

      fetch(`${backendURL}/users/authenticate`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res: any) => {
        if (res.status === 200) {
          navigate("/home");
          } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });

    },
  });

  const [passwordtype, setPasswordtype] = useState("text");

  function switchPasswordType() {
    if (passwordtype === "text") {
      setPasswordtype("password");
    } else {
      setPasswordtype("text");
    }
  }

  return (
    <>
         <div className="top-div sticky">
          <NavbarComponent />
        </div>

      <div className="login-container mb-5">
        <div className="text-center">
          <img src={ptennavlogo} alt="logo" />
        </div>

        <Form className="mx-auto" onSubmit={handleSubmit}>
          <h2 className="header">Login as a Member</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 password-group"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={passwordtype}
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={(e) => setFieldValue("password", e.target.value)}
            />
            <span onClick={switchPasswordType} className="cursor">
              {passwordtype === "password" ? (
                <i className="fas fa-eye-slash show"></i>
              ) : (
                <i className="fas fa-eye show"></i>
              )}
            </span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassReset">
            <Form.Text className="password-reset">
              Forgot your password?
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <div className="text-center mt-3">
          Don't have a PTEN account?{" "}
          <span className="password-reset">
            <a href="/signup">Sign up</a>
          </span>
        </div>
      </div>
    </>
  );
};
