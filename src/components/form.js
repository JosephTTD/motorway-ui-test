import { useState } from "react";
import Input from "./input";
import { useModal } from "../ModalContext";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    color: "",
    salary: 0,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearForm = () => {
    setForm({
      name: "",
      email: "",
      dob: "",
      color: "",
      salary: 0,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let tempErrors = {};

    if (form.name.trim() === "") {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(form.email)) {
      tempErrors.email = "Invalid email address.";
      isValid = false;
    }

    if (form.dob === "") {
      tempErrors.dob = "Date of birth is required.";
      isValid = false;
    }

    if (form.color === "") {
      tempErrors.color = "Favourite color is required.";
      isValid = false;
    }

    setErrors(tempErrors);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", form);
      setSuccess(true);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {success ? (
        <div style={{color: 'green', textAlign: 'center', padding: '0 20px'}}>
          <h2>Thanks {form.name}, you're on your way to selling your car</h2>
        </div>
      ) : (
        <>
          <Input
            name="email"
            label="Email"
            value={form.email}
            error={errors.email}
            handleChange={handleChange}
          />
          <Input
            name="name"
            label="Name"
            value={form.name}
            error={errors.name}
            handleChange={handleChange}
          />
          <Input
            name="dob"
            label="Date of birth"
            altType={"date"}
            value={form.dob}
            error={errors.dob}
            handleChange={handleChange}
          />
          <Input
            name="color"
            label="Color"
            value={form.color}
            error={errors.color}
            handleChange={handleChange}
          />
          <Input
            name="salary"
            label="Salary"
            value={form.salary}
            salary={true}
            handleChange={handleChange}
          />
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default Form;
