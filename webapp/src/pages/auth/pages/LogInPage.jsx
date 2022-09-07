import React from "react";
import { Form, SubmitButton, TextField } from "../../../components/forms";
import CreateIcon from "../../../components/CreateIcon";
import "./styles.scss";
import SignUpSignInFormCard from "../../../components/cards/SignUpSignInFormCard";

export default function LogInPage() {
  return (
    <div className="login-page position-relative">
      <div className="page-heading" style={{ height: "192px", width: "612px" }}>
        <h1>Manage your Links Collection</h1>
      </div>
      <div className="form-container">
        <SignUpSignInFormCard isLogin={true} />
      </div>
    </div>
  );
}
