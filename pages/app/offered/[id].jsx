import React from 'react';
import Head from 'next/head';

import { motion } from 'framer-motion';

import axios from 'axios';

import SingleAppContainer from '../../../components/singleApp/singleAppContainer';

export const getStaticPaths = async () => {
    const MAIN_URL = "http://localhost:3001";
    const response = await axios.get(`${MAIN_URL}/offered`);
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
    const response = await axios.get(`${MAIN_URL}/offered/` + id);
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
            <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
                pageInitial: {
                    opacity: 0,
                    x: 100
                },
                pageAnimate: {
                    opacity: 1,
                    transition: {
                        duration: 1
                    },
                    x: 0
                },
                pageExit: {
                    opacity: 0,
                }
            }}>
                <SingleAppContainer application={application} />
            </motion.div>
        </>
    )
}

export default singleApp;