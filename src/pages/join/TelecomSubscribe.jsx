import { useState } from "react";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { TelecomFormPage } from "./TelecomFormPage.jsx";

export default function TelecomSubscribe() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "Please subscribe my email for updates.",
  });

  return (
    <>
      <CloseButton to="/telecom" />
      <TelecomFormPage
        title="Subscribe for PhishFlagger Telecom Updates"
        buttonLabel="Subscribe"
        thanksPath="/telecom/thanks-subscribe"
        formsparkEndpoint="https://submit-form.com/j82Iv58GQ"
        form={form}
        setForm={setForm}
      />
    </>
  );
}
