import React, { ReactNode } from 'react';

import { FormMultiStepContextProvider } from './../../contexts/MultiStepFormContext';

export const FormMultiStepLayout = ({ children }: { children: ReactNode }) => (
  <FormMultiStepContextProvider>{children}</FormMultiStepContextProvider>
);
