import React , { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

const index = () => {
  
  useEffect(() => {
    const { pathname } = Router;
    if ( pathname == "/" ) {
      Router.push("/app");
    }
  });
  
  return (
    <Head>
      <title>دانلود برنامه و بازی برای اندروید | کافه بازار</title>
    </Head>
  )
}

export default index;
