import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Helmet } from 'react-helmet';

import Layout from '~/containers/Layout/Layout';

class OurApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Helmet
          htmlAttributes={{ lang: 'ru' }}
          title='Доступная среда'
          meta={[
            { name: 'viewport',
              content: `width=device-width, initial-scale=1,
                minimum-scale=1, maximum-scale=1, user-scalable=no, minimal-ui` }
        ]} />

        <Provider store={ store }>
          <PersistGate persistor={ store.__persistor } loading={ <div>Loading</div> }>
            <Layout>
              <Component { ...pageProps } />
            </Layout>
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(OurApp);