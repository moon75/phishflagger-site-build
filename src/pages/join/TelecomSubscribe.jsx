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
      <CloseButton to="/join/telecom" />
      <TelecomFormPage
        title="Subscribe"
        buttonLabel="Subscribe"
        thanksPath="/join/telecom/thanks-subscribe"
        form={form}
        setForm={setForm}
      />
    </>
  );
}
