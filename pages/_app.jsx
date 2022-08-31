import '../styles/globals.css'
import Head from 'next/head';
import Layout from '../components/layouts/layout';

import { motion } from 'framer-motion';
 
function MyApp({ Component, pageProps , router }) {
  return (
    <>
      <Head>
        <link rel="icon" type="icon/image-x" href="./assets/favicon.ico" />
      </Head>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0,
          x: 0
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 1
          },
        },
        pageExit: {
          opacity: 0,
        }
      }}>
        <Layout><Component {...pageProps} /></Layout>
      </motion.div>
    </>
  )
}

export default MyApp;