import React from 'react';
import Head from 'next/head';

import axios from 'axios';

export const getStaticPaths = async () => {
    const MAIN_URL = "http://localhost:3001";
    const response = await axios.get(`${MAIN_URL}/fashion`);
    const data = response.data;

    const paths = data.map((app) => {
        return {
            params: { id: app.id.toString() }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const MAIN_URL = "http://localhost:3001";
    const id = context.params.id;
    const response = await axios.get(`${MAIN_URL}/fashion/` + id);
    const data = response.data;
    
    return {
        props: { application: data }
    }
}

const singleApp = ({application}) => {
    return (
        <>
            <Head>
                <title>برنامه {application.title} - دانلود | کافه بازار</title>
            </Head>
            <div>
                <h1>{application.title}</h1>
            </div>
        </>
    )
}

export default singleApp;