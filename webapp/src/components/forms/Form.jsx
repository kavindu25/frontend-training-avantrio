import React from "react";
import { Formik, Form as FormikForm } from "formik";

export default function Form({
  children,
  initialValues,
  validationSchema,
  enableReinitialize,
  className,
  onSubmit,
  ...rest
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={enableReinitialize}
      {...rest}
    >
      <FormikForm className="needs-validation w-100" noValidate="">
        {children}
      </FormikForm>
    </Formik>
  );
}
