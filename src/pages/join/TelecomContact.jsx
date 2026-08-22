import { useState } from "react";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { TelecomFormPage } from "./TelecomFormPage.jsx";

export default function TelecomContact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <>
      <CloseButton to="/telecom" />
      <TelecomFormPage
        title="Contact Us (For Telecom)"
        buttonLabel="Send"
        thanksPath="/telecom/thanks-contact"
        formsparkEndpoint="https://submit-form.com/ZlULesKxU"
        form={form}
        setForm={setForm}
      />
    </>
  );
}
