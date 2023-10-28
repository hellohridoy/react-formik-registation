import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "./schemas";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
export default function Registation() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" for="fname">
            Name
          </label>
          <input
            autoComplete="off"
            type="name"
            id="name"
            name="name"
            placeholder="Your name.."
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" for="fname">
            Email
          </label>
          <input
            autoComplete="off"
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="password" for="fname">
            Password
          </label>
          <input
            autoComplete="off"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="confirm_password" for="fname">
            Confirm Password
          </label>
          <input
            autoComplete="off"
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Pasword"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.confirm_password && touched.confirm_password ? (
            <p>{errors.confirm_password}</p>
          ) : null}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
