import { Form, Formik } from "formik";
import React, { useState } from "react";
import { BlueInputField } from '../../../../Common/BlueInputField'
import { BlueButton } from '../../../../Common/Buttons/BlueButton'
import { ToastContainer } from "react-toastify";

const RegisterFormStep2 = () => {
  return (
    <div className="">
      <ToastContainer rtl />
      <h1 className="text-[30px] text-center text-bluePrimary">ثبت نام</h1>

      <Formik
        initialValues={{
          verifyCode: "",
        }}

      >
        <Form className="mt-6">
          {/* verifyCode */}
          <BlueInputField
            name="verifyCode"
            type="text"
            placeholder="کد تایید"
            iconClass="fi fi-rr-password"
          />

          <BlueButton type="submit" buttonText="ثبت"  />
        </Form>
      </Formik>
    </div>
  )
}

export  {RegisterFormStep2}