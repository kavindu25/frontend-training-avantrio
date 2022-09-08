import React from "react";
import { Form, SubmitButton, TextField } from "../forms";
import CreateIcon from "../CreateIcon";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../../constants/iconTypeConsts";

export default function SignUpSignInFormCard({ isLogin }) {
  return (
    <>
      {isLogin ? (
        <div className="card px-5 py-4 signin-form-card">
          <div className="heading px-5 pt-5">
            <p>Login</p>
          </div>
          <div className="px-5 pt-4">
            <Form initialValues={{ userName: "", pwd: "" }}>
              <div className="py-2">
                <TextField
                  name="email"
                  label="Email"
                  placeholder={"Email address name here"}
                  inputClass="form-control-lg"
                />
              </div>
              <div className="py-2">
                <TextField
                  name="pwd"
                  label="Password"
                  type="password"
                  placeholder={"***********"}
                  inputClass="form-control-lg"
                />
              </div>
              <div className="py-4">
                <a href="#" className="para1">
                  Forgot password?
                </a>
              </div>
              <div className="py-2">
                <SubmitButton size={"lg"} name={"Login"} />
              </div>
            </Form>
          </div>
          <div className="px-5 pt-2">
            <p className="para2 text-center">Or login with</p>
            <div className="row">
              <div className="col-3">
                <CreateIcon
                  iconVariant={ICON_TYPES_LIST.TYPE_2}
                  innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                  innerIconBg={"/images/facebook.png"}
                />
              </div>
              <div className="col-3">
                <CreateIcon
                  iconVariant={ICON_TYPES_LIST.TYPE_2}
                  innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                  innerIconBg={"/images/google.png"}
                />
              </div>
              <div className="col-3">
                <CreateIcon
                  iconVariant={ICON_TYPES_LIST.TYPE_2}
                  innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                  innerIconBg={"/images/linkedin.png"}
                />
              </div>
              <div className="col-3">
                <CreateIcon
                  iconVariant={ICON_TYPES_LIST.TYPE_2}
                  innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                  innerIconBg={"/images/apple.png"}
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-4">
            <p className="para1"> Don't have an account?</p>
            <a href="#" className="para1">
              Sign up
            </a>
          </div>
        </div>
      ) : (
        <div className="card px-5 py-3 signup-form-card">
          <div className="heading px-5 pt-5">
            <p>Sign Up</p>
          </div>
          <div className="px-5 pt-4">
            <Form initialValues={{ userName: "", email: "", pwd: "" }}>
            <div className="py-2">
                <TextField
                  name="userName"
                  label=" Name"
                  placeholder={"Your name here"}
                  inputClass="form-control-lg"
                />
              </div>
              <div className="py-2">
                <TextField
                  name="email"
                  label="Email"
                  placeholder={"Email address name here"}
                  inputClass="form-control-lg"
                />
              </div>
              <div className="py-2">
                <TextField
                  name="pwd"
                  label="Password"
                  type="password"
                  placeholder={"***********"}
                  inputClass="form-control-lg"
                />
              </div>
              <div className="pt-4">
                <SubmitButton size={"lg"} name={"Login"} />
              </div>
            </Form>
          </div>
          <div className="px-5 pt-4">
            <p className="para2 text-center">Or Sign Up With</p>
            <div className="row">
              <div className="col-3">
                <CreateIcon
                  iconVariant={ICON_TYPES_LIST.TYPE_2}
                  innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                  innerIconBg={"/images/facebook.png"}
                />
              </div>
              <div className="col-3">
                <CreateIcon
                  iconVariant={ICON_TYPES_LIST.TYPE_2}
                  innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                  innerIconBg={"/images/google.png"}
                />
              </div>
              <div className="col-3">
                <CreateIcon
                  iconVariant={ICON_TYPES_LIST.TYPE_2}
                  innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                  innerIconBg={"/images/linkedin.png"}
                />
              </div>
              <div className="col-3">
                <CreateIcon
                  iconVariant={ICON_TYPES_LIST.TYPE_2}
                  innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                  innerIconBg={"/images/apple.png"}
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-4">
            <p className="para1"> Don't have an account?</p>
            <a href="#" className="para1">
              Sign up
            </a>
          </div>
        </div>
      )}
    </>
  );
}
