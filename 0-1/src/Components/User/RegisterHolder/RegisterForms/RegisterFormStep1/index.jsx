import { useNavigate } from "react-router-dom";
import { Form, Field, Formik } from "formik";
import React, { useState } from "react";
import { BlueInputField } from "../../../../Common/BlueInputField";
import { ToastContainer } from "react-toastify";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import { RegisterStep1Schema } from "../../../../../Core/Validation/Schemas/auth/Register/RegisterStep1Schema";
import { useDispatch, useSelector } from "react-redux";
import { onSetPhoneNumber } from "../../../../../Redux/Auth/register";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { RegisterSendVerifyMessage } from "../../../../../Core/Services/Api/Auth/Register/RegisterVerifyMessage";

const RegisterFormStep1 = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const Navigate = useNavigate()

  const register = useSelector((reducer) => reducer.register);
  const dispatch = useDispatch();

  const onSubmit = async (value) => {
    setIsDisabled(true);
//  Navigate("/User/Register/Step2");
    try {
      const result = await RegisterSendVerifyMessage(value);
      if (result.success === true) {
        dispatch(onSetPhoneNumber(value.phoneNumber));
      console.log("result" , result.success )
         Navigate("/User/Register/Step2");
        SuccessToastify(result.message);
      } else if (result.success === false) {
        return ErrorToastify(result.message);
      }
    } catch (error) {
      return false;
    }

    setIsDisabled(false);
  };

  return (
    <>
      <div className="">
        <ToastContainer rtl />
        <h1 className="text-[30px] text-center text-bluePrimary">ثبت نام</h1>

        <Formik
          initialValues={{
            phoneNumber: "",
          }}
          validationSchema={RegisterStep1Schema}
          onSubmit={onSubmit}
        >
          <Form className="mt-6">
        
            <BlueInputField
              name="phoneNumber"
              type="text"
              placeholder="شماره موبایل"
            />
            <BlueButton type="submit" buttonText="ثبت"  isDisabled={isDisabled} />
          </Form>
        </Formik>
      </div>
    </>
  );
};

export { RegisterFormStep1 };
