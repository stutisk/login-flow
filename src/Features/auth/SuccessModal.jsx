import { Check, ShieldCheck } from "lucide-react";

export const SuccessModal = ({
  onGoToDashboard,
  accountType,
  name,
  mobileDisplay,
  email,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 sm:p-8 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full border-3 border-blue flex items-center justify-center mb-4">
          <Check size={30} className="text-blue stroke-[3]" />
        </div>

        <h3 className="text-primary text-2xl font-semibold mb-2">
          You're all set!
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          Here's a quick summary of your account details
        </p>

        <div className="w-full text-left space-y-4 mb-6 bg-[#F5F5F5] px-6 py-6 rounded-3xl">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#717680]">Account Type</span>
            <span className="text-primary font-medium capitalize">
              {accountType}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#717680]">Email</span>
            <span className="text-primary font-medium">{email || "—"}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#717680]">Name</span>
            <span className="text-primary font-medium">{name || "—"}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-[#717680]">Mobile Number</span>
            <span className="text-primary font-medium">
              {mobileDisplay || "—"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck size={18} className="text-green-700" />
          <p className="text-[#565656] text-xs">
            Your account is secured with bank-grade security
          </p>
        </div>

        <button
          type="button"
          onClick={onGoToDashboard}
          className="w-full py-4 rounded-full bg-secondary text-white text-sm font-medium hover:opacity-90 transition"
        >
          Go To Dashboard
        </button>
      </div>
    </div>
  );
};
