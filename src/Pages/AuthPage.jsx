import { AuthLayout } from "../Components/AuthLayout";
import { useState } from "react";
import { RoleSelection } from "../Features/auth/RoleSelection";
import { OtpVerification } from "../Features/auth/OtpVerification";
import { OtpEntryScreen } from "../Features/auth/OtpEntryScreen";
import { NameForm } from "../Features/auth/NameForm";
import { PasswordForm } from "../Features/auth/PasswordForm";
import { SuccessModal } from "../Features/auth/SuccessModal";

const DEFAULT_COUNTRY_CODE = "+1";
const TOTAL_STEPS = 5;

export const AuthPage = () => {
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("personal");
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const mobileDisplay = mobileNumber ? `${countryCode} ${mobileNumber}` : "";
  const fullName = [firstName, lastName].filter(Boolean).join(" ") || "—";

  return (
    <AuthLayout
      currentStep={step <= TOTAL_STEPS ? step : TOTAL_STEPS}
      totalSteps={TOTAL_STEPS}
    >
      
      {step === 1 && (
        <RoleSelection
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          onContinue={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <OtpVerification
          onBack={() => setStep(1)}
          countryCode={countryCode}
          onCountryCodeChange={setCountryCode}
          mobileNumber={mobileNumber}
          onMobileNumberChange={setMobileNumber}
          onContinue={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <OtpEntryScreen
          onBack={() => setStep(2)}
          onContinue={(enteredOtp) => {
            // setOtp(enteredOtp);
            setStep(4);
          }}
          mobileDisplay={mobileDisplay}
        />
      )}

      {step === 4 && (
        <NameForm
          firstName={firstName}
          lastName={lastName}
          onFirstNameChange={setFirstName}
          onLastNameChange={setLastName}
          onBack={() => setStep(3)}
          onContinue={() => setStep(5)}
        />
      )}

      {step === 5 && (
        <PasswordForm
          password={password}
          confirmPassword={confirmPassword}
          onPasswordChange={setPassword}
          onConfirmPasswordChange={setConfirmPassword}
          onBack={() => setStep(4)}
          onContinue={() => setShowSuccessModal(true)}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          onGoToDashboard={() => setShowSuccessModal(false)}
          accountType={selectedRole}
          name={fullName}
          mobileDisplay={mobileDisplay}
          email="jo****@example.com"
        />
      )}
    </AuthLayout>
  );
};