import React from 'react'

const RegisterFormStep3 = () => {
  return (
    <div className="">
    <ToastContainer rtl />
    <h1 className="text-[30px] text-center text-bluePrimary">ثبت نام</h1>

    <Formik
      initialValues={{
        password: "",
        gmail: "",
      }}
      validationSchema={RegisterStep3Schema}
      onSubmit={onSubmit}
    >
      <Form className="mt-6">
        {/* password */}
        <BlueInputField
          name="password"
          type="text"
          placeholder="رمز عبور"
          iconClass="fi fi-rr-lock"
        />

        {/* gmail */}
        <BlueInputField
          name="gmail"
          type="text"
          placeholder="ایمیل"
          iconClass="fi fi-rr-at"
        />

        <BlueButton type="submit" buttonText="ثبت" isDisabled={isDisabled} />
      </Form>
    </Formik>
  </div>
  )
}

export  {RegisterFormStep3}