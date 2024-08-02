import Button from 'react-bootstrap/Button';

interface ButtonsProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  isFirstStep: boolean;
  isFinalStep: boolean;
}

function Buttons({ goToNextStep, goToPreviousStep, isFirstStep, isFinalStep }: ButtonsProps) {
  return (
    <div className="buttons d-flex justify-content-between mt-auto">
      {!isFirstStep && (
        <Button
          variant="outline-primary"
          type="button"
          className="text-capitalize"
          onClick={goToPreviousStep}>
          Go back
        </Button>
      )}
      <Button
        variant="primary"
        type={isFinalStep ? 'submit' : 'button'}
        className="text-capitalize text-light ms-auto"
        onClick={isFinalStep ? undefined : goToNextStep}>
        {isFinalStep ? 'Submit' : 'Next step'}
      </Button>
    </div>
  );
}

export default Buttons;
