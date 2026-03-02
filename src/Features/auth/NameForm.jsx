import { AuthActions } from "../../Components/AuthActions";

export const NameForm = ({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
  onBack,
  onContinue,
}) => {
  const canContinue = firstName?.trim() && lastName?.trim();

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-12">
          <h2 className="text-primary text-xl sm:text-2xl font-normal text-left">
            What is your name?
          </h2>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2">
              <label className=" ml-2 text-lg text-accent2 text-left font-normal">
                First Name
              </label>
              <input
                type="text"
                placeholder="Oliver"
                value={firstName ?? ""}
                onChange={(e) => onFirstNameChange?.(e.target.value)}
                className="text-sm px-10 py-6 w-full border text-primary placeholder:text-accent border-accent rounded-lg  focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className=" ml-2 text-lg text-accent2 text-left font-normal">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName ?? ""}
                onChange={(e) => onLastNameChange?.(e.target.value)}
                className=" text-sm w-full border border-accent text-primary placeholder:text-accent rounded-lg px-10 py-6 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
              />
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
