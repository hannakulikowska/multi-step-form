import { Fragment } from 'react';

interface StepperProps {
  currentStep: number;
  numberOfSteps: number;
}

function Stepper({ currentStep, numberOfSteps }: StepperProps) {
  const activeCircleColor = (index: number) =>
    currentStep >= index ? 'bg-primary text-light' : 'bg-gray';
  const activeLineColor = (index: number) => (currentStep > index ? 'bg-primary' : 'bg-gray');
  const isFinalStep = (index: number) => index === numberOfSteps - 1;

  return (
    <div className="d-flex justify-content-center align-items-center">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <Fragment key={index}>
          <div
            className={`stepper-circle d-flex justify-content-center align-items-center lh-1 rounded-circle ${activeCircleColor(index)}`}>
            {index + 1}
          </div>
          {!isFinalStep(index) && (
            <span className={`stepper-line rounded mx-2 mx-md-3 ${activeLineColor(index)}`}></span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Stepper;
