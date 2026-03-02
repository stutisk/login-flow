export const ProgressBar = ({ currentStep, totalSteps = 3 }) => {
  const percent = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;
  return (
    <div className="w-full">
      <div className="h-1.5 w-full rounded-full bg-white border border1 border-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-secondary transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
