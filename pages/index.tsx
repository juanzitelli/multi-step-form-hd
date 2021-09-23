import Head from 'next/head';
import Link from 'next/link';
import { Text, Button } from '@geist-ui/react';
export default function Home() {
  return (
    <>
      <Head>
        <title>Training | Multi step form</title>
      </Head>
      <Text h1>Hello world!</Text>
      <Link href="/onboarding/intro">
        <Button>Start</Button>
      </Link>
    </>
  );
}
