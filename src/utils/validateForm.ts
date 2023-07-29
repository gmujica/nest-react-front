import * as yup from "yup";

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("username required"),
    password: yup.string().trim().required("password required")
});