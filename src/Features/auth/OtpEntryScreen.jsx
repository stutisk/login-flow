import { useState, useRef } from "react";
import { AuthActions } from "../../Components/AuthActions";

const OTP_LENGTH = 4;

export const OtpEntryScreen = ({ onBack, onContinue, mobileDisplay }) => {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef([]);

  const otpString = otp.join("");
  const isComplete = otpString.length === OTP_LENGTH;

  const focusInput = (index) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < OTP_LENGTH - 1) focusInput(index + 1);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      focusInput(index - 1);
      const next = [...otp];
      next[index - 1] = "";
      setOtp(next);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = [...otp];
    pasted.split("").forEach((char, i) => (next[i] = char));
    setOtp(next);
    focusInput(Math.min(pasted.length, OTP_LENGTH - 1));
  };

  const handleResend = () => {
    if (resendCooldown > 0) return;
    setResendCooldown(30);
    const id = setInterval(() => {
      setResendCooldown((c) => {
        if (c <= 1) clearInterval(id);
        return c - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div>
        <div className="flex flex-col gap-12">
          <h2 className="text-primary text-xl sm:text-2xl font-normal text-left">
            OTP Verification
          </h2>
          <p className="text-sm ml-2 mb-2 text-accent2 text-left font-normal">
            An OTP has been sent to your mobile number
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-x-16  " onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-16 h-16   text-center text-sm font-normal border border-accent rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent text-primary"
              />
            ))}
          </div>

          <p className="text-primary text-sm mt-2 ml-10 text-center">
            Did not receive OTP?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={resendCooldown > 0}
              className="text-secondary font-normal hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendCooldown > 0
                ? `Resend OTP (${resendCooldown}s)`
                : "Resend OTP"}
            </button>
          </p>
        </div>
      </div>

      <AuthActions
        onBack={onBack}
        onContinue={onContinue}
        isContinueDisabled={!isComplete}
      />
    </div>
  );
};
