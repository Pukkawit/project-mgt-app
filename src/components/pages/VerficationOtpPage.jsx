import { useState } from "react";

import Button from "../resuables/Button";

const VerficationOtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array to manage OTP input

  // Handle OTP input
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  // Autofocus to next box
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      e.target.previousSibling?.focus();
    } else if (index < 5 && e.target.value) {
      e.target.nextSibling?.focus();
    }
  };

  return (
    <div className="max-container section h-[100vh] w-full flex flex-col items-center justify-center relative">
      <div className="max-w-[500px] flex items-center justify-center flex-col">
        <div className="mb-[54px] text-center">
          <h1 className="heading1 text-darkColors-grey mb-5">
            Enter confirmation code
          </h1>
          <p className="bigBodyTextM text-darkColors-grey mb-20">
            A 6-digit code was sent to your email.
          </p>
        </div>
        <form className="flex gap-[6.89px] mb-16">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="h-[48.26px] w-[48.26px] text-center rounded-[3.45px] border border-darkColors-grey focus:border-primary focus:outline-none "
            />
          ))}
        </form>
        <Button
          width="full"
          bg="primary"
          text="Verify"
          color="white"
          fontFamily="urbanist"
          hoverBg="primaryShade2"
        />
        <p className="mediumBodyTextM text-darkColors-grey mt-1">
          Don’t Receive Code? Get a New One
        </p>
      </div>
    </div>
  );
};

export default VerficationOtpPage;
