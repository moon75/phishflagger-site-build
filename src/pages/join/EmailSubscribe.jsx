import { useState } from "react";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { TelecomFormPage } from "./TelecomFormPage.jsx";

export default function EmailSubscribe() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "Please subscribe my email for updates.",
  });

  return (
    <>
      <CloseButton to="/email" />
      <TelecomFormPage
        title="Subscribe for PhishFlagger Email Updates"
        buttonLabel="Subscribe"
        thanksPath="/join/email-subscribe/thanks"
        formsparkEndpoint="https://submit-form.com/j82Iv58GQ"
        form={form}
        setForm={setForm}
      />
    </>
  );
}
