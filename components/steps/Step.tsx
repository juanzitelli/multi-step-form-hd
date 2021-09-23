import React, { useContext, useState } from 'react';
import { Input, Text } from '@geist-ui/react';
import { NextStepButton } from 'components/NextStepButton';
import { useRouter } from 'next/dist/client/router';
import { CMSData } from 'data/cms-data';
import { FormMultiStepStateContext } from 'contexts/MultiStepFormContext';

export const Step = ({ stepValue, setStepValue }) => {
  const { nextStep } = useContext(FormMultiStepStateContext);

  const onChangeStepHandler = ({ target: { value } }) => {
    setStepValue(value);
  };

  const {
    query: { slug },
  } = useRouter();

  const { title, name, label } = CMSData[slug as string];

  return (
    <>
      <Text h1>{title}</Text>
      {name && label && (
        <Input
          label={label}
          name={name}
          value={stepValue}
          onChange={onChangeStepHandler}
        />
      )}
      {nextStep != null && <NextStepButton inputValue={stepValue} />}
    </>
  );
};

export const StepTitle = ({ children }) => {
  return <Text h1>{children}</Text>;
};
