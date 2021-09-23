export type FormStep = {
  id: string;
  value: string;
};

export type FormStepActionList = 'next' | 'set-next-step';

export type FormStepAction = {
  payload?: any;
  type: FormStepActionList;
};

export type FormMultiStepState = {
  allSteps: Mapper;
  steps: FormStep[];
  nextStep: null | string;
};

export type Mapper = {
  [url: string]: {
    id: string;
    next: string;
    title: string;
    label?: string;
    name?: string;
  };
};
