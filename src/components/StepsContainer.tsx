import { ReactNode } from 'react';

interface StepsContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

function StepsContainer({ title, description, children }: StepsContainerProps) {
  return (
    <>
      <h2 className="h4 text-start">{title}</h2>
      <p className="text-start">
        <small className="text-muted">{description}</small>
      </p>
      <div className="row">{children}</div>
    </>
  );
}

export default StepsContainer;
