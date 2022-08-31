import React from 'react';
import { motion } from 'framer-motion';

import AppHeader from './appHeader';
import OfferedApps from './appItems/offeredApps';
import PracticalApps from './appItems/practicalApps';
import SelectedApps from './appItems/selectedApps';
import PhotoVideoCombineApps from './appItems/photoVideoCombineApps';
import UpdatedApps from './appItems/updatedApps';
import BannerSlider from './appItems/bannerSlider';
import FashionApps from './appItems/fashionApps';
import SmallSizeApps from './appItems/smallSizeApps';
import BestApps from './appItems/bestApps';
import MostDownloadApps from './appItems/mostDownloadApps';
import CategoryItems from './categoryItems';

const appContainer = (props) => {

    return (
        <motion.div animate={{ y: [0 , 20] , opacity: [0 , 1] }} transition={{ ease: "easeOut", duration: 1 }} className="mx-24">
            <AppHeader />
            <br />
            <OfferedApps offered={props.data.offered}/>
            <br />
            <PracticalApps practical={props.data.practical}/>
            <br />
            <SelectedApps selected={props.data.selected}/>
            <br />
            <PhotoVideoCombineApps photovideo={props.data.photovideo}/>
            <br />
            <UpdatedApps updated={props.data.updated} />
            <br />
            <BannerSlider banners={props.data.banners} />
            <br />
            <FashionApps fashion={props.data.fashion} />
            <br />
            <SmallSizeApps smallsize={props.data.smallsize} />
            <br />
            <BestApps best={props.data.best} />
            <br />
            <MostDownloadApps mostdownload={props.data.mostdownload} />
            <br />
            <CategoryItems categories={props.data.categories} />
        </motion.div>
    );
}

export default appContainer;