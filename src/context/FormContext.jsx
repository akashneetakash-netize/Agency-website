/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const FormContext = createContext(null);

export function FormProvider({ children }) {
  const [lastSubmission, setLastSubmission] = useState(null);
  const [isSubmittingGlobal, setIsSubmittingGlobal] = useState(false);

  return (
    <FormContext.Provider
      value={{
        lastSubmission,
        setLastSubmission,
        isSubmittingGlobal,
        setIsSubmittingGlobal
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContextState() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContextState must be used within a FormProvider');
  }
  return context;
}
