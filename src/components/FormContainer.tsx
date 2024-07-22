import { Form } from 'react-bootstrap';
import Stepper from './Stepper';
import Buttons from './Buttons';
import { useState } from 'react';

function FormContainer() {
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 4;
  const isFinalStep = currentStep === NUMBER_OF_STEPS - 1;

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () => setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <Form className="w-100 bg-body rounded-4 p-4">
      <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
      <Buttons
        goToNextStep={goToNextStep}
        goToPreviousStep={goToPreviousStep}
        currentStep={currentStep}
        isFinalStep={isFinalStep}
      />
    </Form>
  );
}

export default FormContainer;
