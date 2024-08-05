import StepsContainer from '../StepsContainer';
import CheckboxButton from '../CheckboxButton';

const challengePreference = [
  { id: 'basic', label: 'HTML/CSS/JS' },
  { id: 'react', label: 'react' },
  { id: 'angular', label: 'angular' },
  { id: 'vue', label: 'vue' },
];

const Step3 = () => {
  return (
    <StepsContainer
      title="Challenge Preference"
      description="Please tell us which frontend challenges you would like to participate in.">
      {challengePreference.map(({ id, label }) => (
        <CheckboxButton key={id} id={id} name="challengePreference" label={label} />
      ))}
    </StepsContainer>
  );
};

export default Step3;
