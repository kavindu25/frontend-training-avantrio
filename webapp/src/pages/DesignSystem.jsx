import React from "react";
import { Form, SubmitButton, TextField } from "../components/forms";
import CreateIcon from "../components/CreateIcon";
import {
  ICON_TYPES_LIST,
  INNER_ICON_TYPES_LIST,
} from "../constants/iconTypeConsts";

export default function DesignSystem() {
  return (
    <div className="container">
      <div>
        <div className="text-dark bg-light py-4 my-3">
          <h1 className="display-6 ms-5">Typography </h1>
        </div>
        <div className="py-2 ms-5">
          <h1 className="py-2">h1 size: 64px</h1>
          <h2 className="py-2">h2 size: 24px </h2>
          <h3 className="py-2">h3 size: 20px</h3>
          <p className="para1">p1 size: 16px</p>
          <p className="para2">p2 size: 14px</p>
          <p className="para3">p3 size: 12px</p>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-4 my-3">
          <h1 className="display-6 ms-5">Fields</h1>
        </div>
        <div className="py-2 ms-5">
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
          </Form>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-4 my-3">
          <h1 className="display-6 ms-5">Buttons</h1>
        </div>
        <div className="py-2 ms-5">
          <Form initialValues={{}}>
            <div className="row py-2">
              <div className="col-3">
                <SubmitButton size="lg" />
              </div>
              <div className="col-3">
                <SubmitButton variant="outlined" size="lg" />
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-4 my-3">
          <h1 className="display-6 ms-5">Drop Shadows</h1>
        </div>
        <div className="py-2">
          <div className="row ms-5">
            <div
              className="card text-center my-2"
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
          <div className="row ms-5">
            <div
              className="card text-center my-4"
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
        <div className="text-dark bg-light py-4 my-3">
          <h1 className="display-6 ms-5">Colours</h1>
        </div>
        <div className="my-2 ">
          <h2 className="ms-5">Primary</h2>
          <div className="row ms-5">
            <div
              className="card text-center bg-primary my-2"
              style={{ width: "18rem", height: "5rem" }}
            ></div>
          </div>
        </div>
        <div>
          <h2 className="ms-5">Secondary</h2>
          <div className="row ms-5">
            <div
              className="card text-center bg-secondary my-2"
              style={{ width: "18rem", height: "5rem" }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-dark bg-light py-4 my-3">
          <h1 className="display-6 ms-5">Icons</h1>
        </div>
        <div>
          <div className="row py-4 ms-5">
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_1}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
                bgColour={"#FFB9D6"}
                innerIconBg={"/images/media.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_1}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
                bgColour={"#FFE3B9"}
                innerIconBg={"/images/music.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_1}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
                bgColour={"#C3FFB9"}
                innerIconBg={"/images/book.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_1}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
                bgColour={"#FFF8B9"}
                innerIconBg={"/images/doc.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_1}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
                bgColour={"#B9EAFF"}
                innerIconBg={"/images/savings.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_1}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_1}
                bgColour={"#B9BCFF"}
                innerIconBg={"/images/work.png"}
              />
            </div>
          </div>
          <div className="row py-4 ms-5">
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_2}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                innerIconBg={"/images/facebook.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_2}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                innerIconBg={"/images/google.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_2}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                innerIconBg={"/images/linkedin.png"}
              />
            </div>
            <div className="col-2">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_2}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_2}
                innerIconBg={"/images/apple.png"}
              />
            </div>
          </div>
          <div className="row py-4 ms-5">
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_3}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_3}
                innerIconBg={"/images/share.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_3}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_3}
                innerIconBg={"/images/copy.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_3}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_3}
                innerIconBg={"/images/trash.png"}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                iconVariant={ICON_TYPES_LIST.TYPE_3}
                innerIconVarient={INNER_ICON_TYPES_LIST.TYPE_3}
                innerIconBg={"/images/pencil.png"}
              />
            </div>
          </div>
          <div className="row py-4 ms-5">
            <div className="col-1">
              <CreateIcon
                bgColour={"#ffffff"}
                customStyles={{
                  width: "67px",
                  height: "67px",
                  borderRadius: "50%",
                  border: "2px solid #ffffff",
                }}
                innerIconBg={"/images/bell.png"}
                innerIconCustomStyles={{
                  width: "18px",
                  height: "22px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>

            <div className="col-1">
              <CreateIcon
                customStyles={{
                  width: "67px",
                  height: "67px",
                  borderRadius: "50%",
                }}
                bgColour={"#3FEA98"}
                innerIconBg={"/images/tick.png"}
                innerIconCustomStyles={{
                  width: "30px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="col-1">
              <CreateIcon
                bgColour={"#ffffff"}
                customStyles={{
                  width: "57px",
                  height: "57px",
                  borderRadius: "50%",
                  border: "2px solid #ffffff",
                }}
                innerIconBg={"/images/man-with-glasses.png"}
                innerIconCustomStyles={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundColor: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
