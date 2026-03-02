import { ProgressBar } from "./ProgressBar";

export const AuthLayout = ({ children, currentStep, totalSteps = 3 }) => {
  return (
    <div className="relative h-screen bg-[#F6F7F9] bg-[url('/assets/Group.png')] bg-repeat">

    
      <div className="hidden lg:flex absolute left-0 top-0 h-full w-[50%] px-20 py-16 flex-col justify-between">
        <div className="text-left max-w-[520px]">
          <p className="text-primary mb-3 text-2xl font-light">
            Let's get started
          </p>
          <h1 className="text-[48px] leading-[54px] font-bold text-primary">
            Create your account
          </h1>
          <p className="text-primary mt-4 text-base">
            Follow the steps to create your account
          </p>
        </div>
        <img
          src="/assets/Artboard11.png"
          alt="illustration"
          className=""
        />
      </div>

     
      <div className="absolute inset-0 lg:left-1/2 flex flex-col py-6 sm:py-8 px-4 sm:px-6 lg:px-10 z-10">
        {currentStep != null && totalSteps > 0 && currentStep > 1 && (
          <div className="w-full max-w-[500px] shrink-0 mb-1 mx-auto">
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        )}
        <div className="flex-1 min-h-0 flex justify-center">
          <div className="w-full max-w-[708px] h-full flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-left overflow-hidden">
            <div className="flex-1 min-h-0 flex flex-col w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
