import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//First name - required, minimum 2 characters
//Last name - required, minimum 2 characters
//Email - required, must be in a valid email format
//Message - required, minimum 10 characters.

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Minimum 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Minimum 2 characters"),
  email: yup
    .string()
    .email("Unvalid email address")
    .required("Email address is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must have at least 10 characters")
});

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    setValidated(true);
    console.log("data", data);
  }

  return (
    <div>
      {validated && (
        <Form.Label style={{ marginTop: "60px" }}>
          Your message has been sent. Thank you!
        </Form.Label>
      )}
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "50%", margin: "50px auto", textAlign: "left" }}
      >
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            name="firstName"
            size="md"
            placeholder="Enter your first name"
            ref={register}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            name="lastName"
            size="md"
            placeholder="Enter your last name"
            ref={register}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            size="md"
            placeholder="Enter your email address"
            ref={register}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            size="md"
            placeholder="Write your message here"
            ref={register}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
