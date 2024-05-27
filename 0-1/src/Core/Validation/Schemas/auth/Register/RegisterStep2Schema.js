import * as yup from "yup";

const RegisterStep2Schema = yup.object().shape({
  verifyCode: yup
    .string()
    .min(4, "کد تایید شما باید 4 رقم باشد")
    .max(4, "کد تایید شما باید 4 رقم باشد")
    .required("لطفا کد تایید خود را وارد کنید"),
});

export { RegisterStep2Schema };
