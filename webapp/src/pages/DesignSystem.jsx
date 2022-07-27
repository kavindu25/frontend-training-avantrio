import React from "react";
import { Form, SubmitButton, TextField } from "../components/forms";
import CreateIcon from "../components/CreateIcon";
import { useModal } from "../hooks/modalsHooks";
import { useGetMyProfileQuery } from "../services/userService";

export default function DesignSystem() {
  const { showModal } = useModal();
  useGetMyProfileQuery();
  return (
    <div className="container">
      <div>
        <div className="text-dark bg-light py-2 my-3">
          <h1 className="display-6">Typography </h1>
        </div>
        <div className="py-2">
          <h1 className="py-2">h1 size</h1>
          <h2 className="py-2">h2 size</h2>
          <h3 className="">h3 size</h3>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-2 my-3">
          <h1 className="display-6">Fields</h1>
        </div>
        <div className="py-2">
          <Form initialValues={{}}>
            <div className="row pt-2">
              <div className="col-3">
                <TextField
                  name="first_name"
                  label="First Name"
                  inputClass="form-control-lg"
                />
              </div>
              <div className="col-3">
                <TextField
                  name="last_name"
                  label="Last Name"
                  inputClass="form-control-lg"
                />
              </div>
            </div>
            {/* <div className="row pt-2">
              <div className="col-3">
                <TextField name="first_name" label="First Name" />
              </div>
              <div className="col-3">
                <TextField name="last_name" label="Last Name" />
              </div>
            </div> */}
          </Form>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-2 my-3">
          <h1 className="display-6">Buttons</h1>
        </div>
        <div className="py-2">
          <Form initialValues={{}}>
            <div className="row pt-2">
              <div className="col-3">
                <SubmitButton size="lg" />
              </div>
              <div className="col-3">
                <SubmitButton variant="outlined" size="lg" />
              </div>
            </div>
            {/* <div className="row pt-2">
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
            </div> */}
          </Form>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-2 my-3">
          <h1 className="display-6">Drop Shadows</h1>
        </div>
        <div>
          <div className="row">
            <div
              className="card text-center mx-5 my-2"
              style={{ width: "8rem", height: "5rem" }}
            >
              <div className="card-body">
                <h3>Box 1</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div
              className="card text-center my-4"
              style={{ width: "38rem", height: "48rem" }}
            >
              <div className="card-body">
                <h3>Box 2</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="card text-center mx-5 my-4"
              style={{ width: "18rem", height: "6rem" }}
            >
              <div className="card-body">
                <h3>Box 3</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-2 my-3">
          <h1 className="display-6">Colours</h1>
        </div>
        <div className="my-2">
          <h2 className="mx-5">Primary</h2>
          <div className="row">
            <div
              className="card text-center bg-primary mx-5 my-2"
              style={{ width: "18rem", height: "5rem" }}
            ></div>
          </div>
        </div>
        <div>
          <h2 className="mx-5">Secondary</h2>
          <div className="row">
            <div
              className="card text-center bg-secondary mx-5 my-"
              style={{ width: "18rem", height: "5rem" }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-2 my-3">
          <h1 className="display-6">Icons</h1>
        </div>
        <div>
          <div className="row pt-2">
            <div className="col-2">
              <CreateIcon
                iconVariant={"type1"}
                bgColour={"#FFB9D6"}
                bgIcon={"/images/media.png"}
              />
            </div>
            <div className="col-2">
              <CreateIcon
                iconVariant={"type1"}
                bgColour={"#FFE3B9"}
                bgIcon={"/images/music.png"}
              />
            </div>
            <div className="col-2">
              <CreateIcon
                iconVariant={"type1"}
                bgColour={"#C3FFB9"}
                bgIcon={"/images/book.png"}
              />
            </div>
            <div className="col-2">
              <CreateIcon
                iconVariant={"type1"}
                bgColour={"#FFF8B9"}
                bgIcon={"/images/doc.png"}
              />
            </div>
            <div className="col-2">
              <CreateIcon
                iconVariant={"type1"}
                bgColour={"#B9EAFF"}
                bgIcon={"/images/savings.png"}
              />
            </div>
            <div className="col-2">
              <CreateIcon
                iconVariant={"type1"}
                bgColour={"#B9BCFF"}
                bgIcon={"/images/work.png"}
              />
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-2">
              <CreateIcon iconVariant={"type2"} bgIcon={"/images/bgfb.png"} />
            </div>
            <div className="col-2">
              <CreateIcon iconVariant={"type2"} bgIcon={"google"} />
            </div>
            <div className="col-2">
              <CreateIcon
                iconVariant={"type2"}
                bgIcon={"/images/linkedin.png"}
              />
            </div>
            <div className="col-2">
              <CreateIcon iconVariant={"type2"} bgIcon={"/images/apple.png"} />
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-2">
              <CreateIcon iconVariant={"type3"} bgIcon={"/images/bgfb.png"} />
            </div>
            <div className="col-2">
              <CreateIcon iconVariant={"type3"} bgIcon={"google"} />
            </div>
            <div className="col-2">
              <CreateIcon
                iconVariant={"type3"}
                bgIcon={"/images/linkedin.png"}
              />
            </div>
            <div className="col-2">
              <CreateIcon iconVariant={"type3"} bgIcon={"/images/pencil.png"} />
            </div>
            <div className="row pt-4">
              <div className="col-2">
                <CreateIcon
                  customStyles={{
                    width: "67px",
                    height: "67px",
                    borderRadius: "50%",
                  }}
                  bgColour={"#3FEA98"}
                  bgIcon={"/images/tick.png"}
                  bgIconCustomStyles={{
                    width: "30px",
                    height: "20px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <div className="col-2">
                <CreateIcon
                  customStyles={{
                    width: "57px",
                    height: "57px",
                    borderRadius: "17.74px",
                  }}
                  // bgColour={"#30387D"}
                  bgIcon={"/images/man-with-glasses.png"}
                  bgIconCustomStyles={{
                    width: "57.36px",
                    height: "57.36px",
                    borderRadius: "17.74px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
