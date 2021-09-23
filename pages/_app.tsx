import '../styles/globals.css';
import { NextPage } from 'next';
import { Page } from '@geist-ui/react/';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: NextPage) => page);

  return getLayout(
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default App;
