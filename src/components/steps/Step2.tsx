import StepsContainer from '../StepsContainer';
import BeginnerIcon from '../../assets/images/beginner.svg';
import IntermediateIcon from '../../assets/images/intermediate.svg';
import AdvancedIcon from '../../assets/images/advanced.svg';
import ExpertIcon from '../../assets/images/expert.svg';
import RadioButtonWithIcon from '../RadioButtonWithIcon';

const skillLevelsData = [
  { id: 'beginner', imgSrc: BeginnerIcon },
  { id: 'intermediate', imgSrc: IntermediateIcon },
  { id: 'advanced', imgSrc: AdvancedIcon },
  { id: 'expert', imgSrc: ExpertIcon },
];

const skillLevels = skillLevelsData.map((level) => ({
  ...level,
  label: level.id,
}));

const Step2 = () => {
  return (
    <StepsContainer
      title="Skill Level"
      description="Please tell us about your skill level in frontend development.">
      {skillLevels.map(({ id, label, imgSrc }) => (
        <RadioButtonWithIcon key={id} id={id} name="skillLevel" imgSrc={imgSrc} label={label} />
      ))}
    </StepsContainer>
  );
};

export default Step2;
