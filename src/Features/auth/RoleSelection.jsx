import { User, Briefcase, Check } from "lucide-react";
import { AuthActions } from "../../Components/AuthActions";
export const RoleSelection = ({
  selectedRole,
  setSelectedRole,
  onContinue,
}) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-12">
          <div className="text-primary text-2xl sm:text-2xl font-normal text-left">
            {" "}
            To join us tell us{" "}
            <span className="font-medium">what type of account</span> you are
            opening
          </div>

          <div className="space-y-6">
            <div
              onClick={() => setSelectedRole("personal")}
              className={`flex items-center justify-between px-8 py-6 rounded-2xl cursor-pointer transition-all duration-200
  ${
    selectedRole === "personal"
      ? "border-1 border-secondary bg-white shadow-sm"
      : "border border-accent bg-white shadow-md hover:shadow-lg"
  }`}
            >
              <div className="flex items-center gap-4">
                <User
                  size={20}
                  className={`${
                    selectedRole === "personal"
                      ? "text-secondary"
                      : "text-primary"
                  }`}
                />
                <span
                  className={`font-medium text-base ${
                    selectedRole === "personal"
                      ? "text-secondary "
                      : "text-primary"
                  }`}
                >
                  Personal
                </span>
              </div>

              {selectedRole === "personal" && (
                <div className="w-7 h-7 flex items-center justify-center bg-secondary rounded-full">
                  <Check size={16} className="text-white" />
                </div>
              )}
            </div>

            <div
              onClick={() => setSelectedRole("business")}
              className={`flex items-center justify-between px-8 py-6 rounded-2xl cursor-pointer transition-all duration-200
          ${
            selectedRole === "business"
              ? "border-1 border-secondary bg-white shadow-sm"
              : "border-1 border-accent bg-white shadow-md hover:shadow-lg"
          }`}
            >
              <div className="flex items-center gap-4">
                <Briefcase
                  size={20}
                  className={`${
                    selectedRole === "business"
                      ? "text-secondary "
                      : "text-primary"
                  }`}
                />
                <span
                  className={`font-medium text-base ${
                    selectedRole === "business"
                      ? "text-secondary "
                      : "text-primary"
                  }`}
                >
                  Business
                </span>
              </div>

              {selectedRole === "business" && (
                <div className="w-7 h-7 flex items-center justify-center bg-secondary rounded-full">
                  <Check size={16} className="text-white" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AuthActions onContinue={onContinue} />
    </div>
  );
};
