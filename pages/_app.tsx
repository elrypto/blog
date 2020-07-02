import React from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import MDXProvider from '../components/mdx/MDXProvider';
import '../css/tailwind.css';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <MDXProvider>
        <div className="min-h-screen bg-gray-700">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </MDXProvider>
    </>
  );

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
