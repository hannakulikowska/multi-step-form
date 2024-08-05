import { createContext, ReactNode, useState } from 'react';

type FormData = Record<string, boolean | string>;

export interface FormContextProps {
  formData: FormData;
  updateFormData: (name: string, value: boolean | string) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (name: string, value: boolean | string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>{children}</FormContext.Provider>
  );
};
