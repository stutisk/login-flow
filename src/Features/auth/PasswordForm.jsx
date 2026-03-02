import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthActions } from "../../Components/AuthActions";

export const PasswordForm = ({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  onBack,
  onContinue,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const minLength = 8;
  const passwordValid = password?.length >= minLength;
  const match = password && confirmPassword && password === confirmPassword;

  const canContinue = passwordValid && match;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-8">
        <h2 className="text-primary text-xl sm:text-2xl font-normal text-left">
          Create Password for your account
        </h2>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <label className=" ml-2 text-lg text-accent2 text-left font-normal">
                Enter new password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password ?? ""}
                  onChange={(e) => onPasswordChange?.(e.target.value)}
                  className="text-sm px-10 py-6 w-full border text-primary placeholder:text-accent border-accent rounded-lg  focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="text-secondary" size={20} />
                  ) : (
                    <Eye className="text-secondary" size={20} />
                  )}
                </button>
              </div>
              <p className=" ml-2 text-lg text-accent2 text-left font-normal">
                Must be at least 8 characters
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className=" ml-2 text-lg text-accent2 text-left font-normal">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword ?? ""}
                  onChange={(e) => onConfirmPasswordChange?.(e.target.value)}
                  className="text-sm px-10 py-6 w-full border text-primary placeholder:text-accent border-accent rounded-lg  focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? (
                    <EyeOff className="text-secondary" size={20} />
                  ) : (
                    <Eye className="text-secondary" size={20} />
                  )}
                </button>
              </div>
              <p className=" ml-2 text-lg text-accent2 text-left font-normal">
                Both passwords must match
              </p>
            </div>
          </div>
        </div>
      </div>

      <AuthActions
        onBack={onBack}
        onContinue={onContinue}
        isContinueDisabled={!canContinue}
      />
    </div>
  );
};
