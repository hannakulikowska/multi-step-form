import { Form } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Stepper from './Stepper';
import Buttons from './Buttons';
import { FormEvent, useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';

function FormContainer() {
  const NUMBER_OF_STEPS = 4;
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const goToNextStep = () => {
    if (currentStep < NUMBER_OF_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
      navigate(`/step${currentStep + 2}`);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      navigate(`/step${currentStep}`);
    }
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Form className="d-flex flex-column gap-2 w-100 bg-body rounded-4 p-4" onSubmit={handleSubmit}>
      <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
      <div className="steps my-5">
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
        </Routes>
      </div>
      <Buttons
        goToNextStep={goToNextStep}
        goToPreviousStep={goToPreviousStep}
        isFirstStep={currentStep === 0}
        isFinalStep={currentStep === NUMBER_OF_STEPS - 1}
      />
    </Form>
  );
}

export default FormContainer;
