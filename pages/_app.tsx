import React from 'react';
import '../css/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from '../components/layout/Layout';
import '../css/loader.css';


const MyApp = ({ Component, pageProps }) => (
  <div className="min-h-screen bg-gray-700">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
)

export default MyApp;