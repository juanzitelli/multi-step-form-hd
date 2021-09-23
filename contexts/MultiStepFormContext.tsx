import { SSL_OP_TLS_D5_BUG } from 'constants';
import { CMSData } from 'data/cms-data';
import { useRouter } from 'next/dist/client/router';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { FormMultiStepState, FormStep, FormStepAction, Mapper } from 'types';

const initialState: FormMultiStepState = {
  steps: [],
  allSteps: CMSData,
  nextStep: null,
};

export const FormMultiStepStateContext =
  createContext<FormMultiStepState>(initialState);

export const FormMultiStepDispatchContext = createContext<
  Dispatch<FormStepAction>
>(() => {});

export const useFormFormMultiStepStateContext = () =>
  useContext(FormMultiStepStateContext);

export const useFormMultiStepDispatchContext = () =>
  useContext(FormMultiStepDispatchContext);

const reducer = (state: FormMultiStepState, action: FormStepAction) => {
  switch (action.type) {
    case 'next': {
      return {
        ...state,
        steps: [...state.steps, action.payload],
      };
    }

    case 'set-next-step': {
      return {
        ...state,
        nextStep: action.payload,
      };
    }
  }
};

const steps: Mapper = {};

export const FormMultiStepContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    query: { slug },
  } = useRouter();

  const nextStep = state.allSteps[slug as string].next;

  React.useEffect(() => {
    dispatch({
      type: 'set-next-step',
      payload: nextStep,
    });
  }, [slug]);

  return (
    <FormMultiStepDispatchContext.Provider value={dispatch}>
      <FormMultiStepStateContext.Provider value={state}>
        {children}
      </FormMultiStepStateContext.Provider>
    </FormMultiStepDispatchContext.Provider>
  );
};
