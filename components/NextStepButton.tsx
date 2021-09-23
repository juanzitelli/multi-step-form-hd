import { Button } from '@geist-ui/react';
import {
  FormMultiStepDispatchContext,
  FormMultiStepStateContext,
} from 'contexts/MultiStepFormContext';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useContext } from 'react';

export const NextStepButton = ({ inputValue }) => {
  const dispatch = useContext(FormMultiStepDispatchContext);
  const { nextStep } = useContext(FormMultiStepStateContext);
  const {
    query: { slug },
  } = useRouter();
  const nextStepClickHandler = () => {
    dispatch({
      type: 'next',
      payload: {
        id: slug,
        value: inputValue,
      },
    });
  };
  return (
    <Link href={nextStep}>
      <Button onClick={nextStepClickHandler}>Next</Button>
    </Link>
  );
};
