import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

import { getAllCountries } from "../common/api";

const PhoneInput = () => {
  const [phoneCode, setPhoneCode] = useState("");

  const initialValues = {
    phoneNumber: "",
    // data?.response[0].phone,
  };

  const onSubmit = (values, action) => {
    values.phoneNumber = `${phoneCode}${values.phoneNumber}`;
    console.log(values);
    action.resetForm();
  };
  const {
    values,

    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues,
    onSubmit,
  });
  useEffect(() => {
    getAllCountries().then(({ response }) => {
      console.log("response =>", response[0].phone);
      setPhoneCode(response[0].phone);
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="position:relative">
          <input
            className="border w-full focus:outline-none  text-sm    pl-12  hover:border-black "
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          <span className="position: absolute top-0.5 left-0  text-sm">
            {`+${phoneCode}`}
          </span>
        </div>
        {/* <div className="position: relative;">
            <input className="border w-full  focus:outline-none  text-sm    pl-12  hover:border-black" />
            <span className="position: absolute top-0 left-0">
              Your Span Text
            </span>
          </div> */}
        <button>on click</button>
      </form>
    </>
  );
};

export default PhoneInput;
