/* eslint-disable no-template-curly-in-string */
import { string, ref } from "yup";

const LOWER = /[a-z]/;
const UPPER = /[A-Z]/;
const NUMBER = /\d/;
const SYMBOL = /[^a-z0-9]/i;

function validCharacters(val = "") {
  // Minimum_length = "8"
  if (val.length < 8) {
    return false;
  }
  // Require_lowercase = "true"
  if (LOWER.test(val) === false) {
    return false;
  }
  // Require_numbers = "true"
  if (NUMBER.test(val) === false) {
    return false;
  }
  // Require_symbols = "true"
  if (SYMBOL.test(val) === false) {
    return false;
  }
  // Require_uppercase = "true"
  if (UPPER.test(val) === false) {
    return false;
  }
  // Checks passed
  return true;
}

const passwordSchema = string()
  .required("Required")
  .min(8, "Must be at least ${min} characters")
  .max(100, "Password cannot be more than ${max} characters")
  .test({
    name: "validCharacters",
    message: "Numbers, symbols, uppercase and lowercase characters required",
    test: validCharacters,
  })
  .when("emailAddress", {
    is: (val) => val,
    then: string().notOneOf(
      [ref("emailAddress")],
      "Password cannot be the same as email"
    ),
    otherwise: string(),
  });

export { passwordSchema };
