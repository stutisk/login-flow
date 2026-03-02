export const AuthActions = ({
    onBack,
    onContinue,
    backText = "Back",
    continueText = "Continue",
    isContinueDisabled = false,
  }) => {
    return (
      <div className="mt-auto pt-10 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 sm:justify-between w-full">
        
        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer w-full sm:w-[200px] lg:w-[250px] py-3 
                     rounded-full border-2 border-accent text-sm 
                     text-secondary font-medium 
                     hover:bg-gray-100 transition"
        >
          {backText}
        </button>
  
        <button
          type="button"
          onClick={onContinue}
          disabled={isContinueDisabled}
          className={`cursor-pointer w-full sm:w-[200px] lg:w-[250px] py-3 
                     rounded-full text-sm font-medium transition
                     ${
                       isContinueDisabled
                         ? "bg-gray-300 text-white cursor-not-allowed"
                         : "bg-secondary text-white hover:opacity-90"
                     }`}
        >
          {continueText}
        </button>
  
      </div>
    );
  };