import React from 'react';
import HeaderLayout from '../../components/Layouts/HeaderLayout/HeaderLayout';
import ProfileLayout from '../../components/Layouts/ProfileLayout/ProfileLayout';
import PagesChangeLayout from '../../components/Layouts/PagesChangeLayout/PagesChangeLayout';
import BottomLayout from '../../components/Layouts/BottomLayout/BottomLayout';
import FeedHeaderLayout from '../../components/Layouts/FeedHeaderLayout/FeedHeaderLayout';
import FeedTitleLayout from '../../components/Layouts/FeedTitleLayout/FeedTitleLayout';
import FeedContainer from '../../components/Containers/FeedContainer/FeedContainer';

function Feed(props) {
    return (
        <div>
            <HeaderLayout />
            <ProfileLayout />
            <PagesChangeLayout />
            <FeedHeaderLayout />
            <FeedTitleLayout />
            <FeedContainer />
            <BottomLayout/>
        </div>
    );
}

export default Feed;