import * as Yap from "yup";

export const signUpSchema = Yap.object({
  name: Yap.string().min(2).max(25).required("Please enter your name"),
  email: Yap.string().email().required("Please enter your Email"),
  password: Yap.string().min(6).required("Enter your password"),
  confirm_password: Yap.string()
    .required()
    .oneOf([Yap.ref("password"), null], "Password must match"),
});
