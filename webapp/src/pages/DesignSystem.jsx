import React from "react";
import { Form, SubmitButton, TextField } from "../components/forms";
import { useModal } from "../hooks/modalsHooks";
import { useGetMyProfileQuery } from "../services/userService";

export default function DesignSystem() {
  const { showModal } = useModal();
  useGetMyProfileQuery();
  return (
    <div className="container-fluid">
      <h1>h1 size</h1>
      <h2>h2 size</h2>
      <h3>h3 size</h3>
      <Form initialValues={{}}>
        <div className="row pt-2">
          <div className="col-3">
            <TextField name="first_name" label="First Name" />
          </div>
          <div className="col-3">
            <TextField name="last_name" label="Last Name" />
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-3">
            <SubmitButton />
          </div>
          <div className="col-3">
            <SubmitButton variant="outlined" />
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                showModal({
                  modalType: "ExampleModalOne",
                  modalProps: { title: "Test Modal One" },
                });
              }}
            >
              Show Modal
            </button>
          </div>
        </div>
      </Form>
      
    </div>
  );
}
