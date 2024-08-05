import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import StepsContainer from '../StepsContainer';
import { useFormContext } from '../hooks/useFormContext';

const Step1 = () => {
  const { formData, updateFormData } = useFormContext();

  const [fullName, setFullName] = useState<string>(
    typeof formData.fullName === 'string' ? formData.fullName : '',
  );
  const [email, setEmail] = useState<string>(
    typeof formData.email === 'string' ? formData.email : '',
  );
  const [phone, setPhone] = useState<string>(
    typeof formData.phone === 'string' ? formData.phone : '',
  );
  const [portfolioLink, setPortfolioLink] = useState<string>(
    typeof formData.portfolioLink === 'string' ? formData.portfolioLink : '',
  );

  useEffect(() => {
    updateFormData('fullName', fullName);
  }, [fullName, updateFormData]);

  useEffect(() => {
    updateFormData('email', email);
  }, [email, updateFormData]);

  useEffect(() => {
    updateFormData('phone', phone);
  }, [phone, updateFormData]);

  useEffect(() => {
    updateFormData('portfolioLink', portfolioLink);
  }, [portfolioLink, updateFormData]);

  return (
    <StepsContainer
      title="Personal Information"
      description="Please provide your personal details so we can get to know you better.">
      <Form.Group className="col-md-6 mb-3" controlId="formFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="John Doe"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="col-md-6 mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="col-md-6 mb-3" controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="+91 1234567890"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="col-md-6 mb-3" controlId="formPortfolioLink">
        <Form.Label>Portfolio/GitHub Link</Form.Label>
        <Form.Control
          type="text"
          placeholder="github.com/johndoe"
          required
          value={portfolioLink}
          onChange={(e) => setPortfolioLink(e.target.value)}
        />
      </Form.Group>
    </StepsContainer>
  );
};

export default Step1;
