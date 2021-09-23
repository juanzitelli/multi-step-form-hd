import React, { useContext, useState } from 'react';
import { Step } from 'components/steps/Step';
import { FormMultiStepLayout } from 'components/layouts/MultiStepFormLayout';
import { FormMultiStepStateContext } from 'contexts/MultiStepFormContext';
import { Mapper } from 'types';
import { CMSData } from 'data/cms-data';



const OnboardingStep = () => {
  const [stepValue, setStepValue] = useState('');

  const { steps } = useContext(FormMultiStepStateContext);

  return (
    <>
      <Step stepValue={stepValue} setStepValue={setStepValue} />
      {steps.length > 0 && <pre>{JSON.stringify(steps, null, 2)}</pre>}
    </>
  );
};

export default OnboardingStep;

OnboardingStep.getLayout = (page, pageProps) => {
  return <FormMultiStepLayout {...pageProps}>{page}</FormMultiStepLayout>;
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(CMSData).map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export function getStaticProps() {
  return {
    props: {},
  };
}
