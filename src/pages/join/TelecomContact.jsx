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
      <CloseButton to="/join/telecom" />
      <TelecomFormPage
        title="Contact Us"
        buttonLabel="Send"
        thanksPath="/join/telecom/thanks-contact"
        form={form}
        setForm={setForm}
      />
    </>
  );
}
