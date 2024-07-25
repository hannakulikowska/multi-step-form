import { Form } from 'react-bootstrap';
import StepsContainer from '../StepsContainer';

const Step1 = () => {
  return (
    <StepsContainer
      title="Personal Information"
      description="Please provide your personal details so we can get to know you better.">
      <Form.Group className="col-md-6 mb-3" controlId="formFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" />
      </Form.Group>
      <Form.Group className="col-md-6 mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@email.com" />
      </Form.Group>
      <Form.Group className="col-md-6 mb-3" controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="+91 1234567890" />
      </Form.Group>
      <Form.Group className="col-md-6 mb-3" controlId="formPortfolioLink">
        <Form.Label>Portfolio/GitHub Link</Form.Label>
        <Form.Control type="text" placeholder="github.com/johndoe" />
      </Form.Group>
    </StepsContainer>
  );
};

export default Step1;
