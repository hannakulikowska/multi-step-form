import Button from 'react-bootstrap/Button';

interface ButtonsProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  currentStep: number;
  isFinalStep: boolean;
}

function Buttons({ goToNextStep, goToPreviousStep, currentStep, isFinalStep }: ButtonsProps) {
  const isFirstStep = currentStep === 0;

  return (
    <div className="d-flex justify-content-between">
      <Button
        variant="outline-primary"
        className={`text-capitalize ${isFirstStep ? 'visually-hidden' : 'visible'}`}
        onClick={goToPreviousStep}>
        Go back
      </Button>
      <Button
        variant="primary"
        className={`text-capitalize text-light ms-auto ${isFinalStep ? 'd-none' : ''}`}
        onClick={goToNextStep}>
        Next step
      </Button>
      <Button
        variant="primary"
        type="submit"
        className={`text-capitalize text-light ms-auto ${isFinalStep ? '' : 'd-none'}`}
        onClick={goToNextStep}>
        Submit
      </Button>
    </div>
  );
}

export default Buttons;
