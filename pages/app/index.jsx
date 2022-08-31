import React from 'react';
import Head from 'next/head';
import dynamic  from 'next/dynamic';
import axios from 'axios';

// import AppContainer from '../../components/appPage/appContainer';
const AppContainer = dynamic(() => import("../../components/appPage/appContainer"))

export const getStaticProps = async () => {
    const MAIN_URL = "http://localhost:3001";
    const response1 = await axios.get(`${MAIN_URL}/offered`);
    const response2 = await axios.get(`${MAIN_URL}/practical`);
    const response3 = await axios.get(`${MAIN_URL}/selected`);
    const response4 = await axios.get(`${MAIN_URL}/photovideo`);
    const response5 = await axios.get(`${MAIN_URL}/updated`);
    const response6 = await axios.get(`${MAIN_URL}/banners`);
    const response7 = await axios.get(`${MAIN_URL}/fashion`);
    const response8 = await axios.get(`${MAIN_URL}/smallsize`);
    const response9 = await axios.get(`${MAIN_URL}/best`);
    const response10 = await axios.get(`${MAIN_URL}/mostdownload`);
    const response11 = await axios.get(`${MAIN_URL}/category`);
    const offered = response1.data;
    const practical = response2.data;
    const selected = response3.data;
    const photovideo = response4.data;
    const updated = response5.data;
    const banners = response6.data;
    const fashion = response7.data;
    const smallsize = response8.data;
    const best = response9.data;
    const mostdownload = response10.data;
    const categories = response11.data;
    return {
        props: { 
            offered: offered,
            practical: practical,
            selected: selected,
            photovideo: photovideo,
            updated: updated,
            banners: banners,
            fashion: fashion,
            smallsize: smallsize,
            best: best,
            mostdownload: mostdownload,
            categories: categories
        }
    }
}

const index = (props) => {
    return (
        <>
            <Head>
                <title>دانلود برنامه و بازی اندروید | کافه بازار</title>
            </Head>
            <div className="container">
                <AppContainer data={props}/>
            </div>
        </>
    )
}

export default index;
