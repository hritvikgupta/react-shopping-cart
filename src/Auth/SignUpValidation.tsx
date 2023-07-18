type ValidationProp = {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
};

type ErrorProp = {
  email?: string;
  password?: string;
  name?: string;
  repeatPassword?: string;
};
const SignUpvalidation = (values: ValidationProp) => {
  let error: ErrorProp = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (values.name === "") {
    error.name = "Name should not be empty";
  }
  if (values.password != values.repeatPassword) {
    error.repeatPassword = "Password Not Match";
  }
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  }
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password =
      "Password must contain at least one digit, one lower case letter, one upper case letter and must be at least eight characters long.";
  }

  return error;
};

export default SignUpvalidation;
