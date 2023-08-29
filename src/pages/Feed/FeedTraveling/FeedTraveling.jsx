import React from 'react';
import FeedHeaderLayout from '../../../components/Layouts/FeedHeaderLayout/FeedHeaderLayout';
import FeedTitleLayout from '../../../components/Layouts/FeedTitleLayout/FeedTitleLayout';
import FeedTravelingContent from '../../../components/Containers/FeedContainer/FeedTravelingContent/FeedTravelingContent';

function FeedTraveling(props) {

    return (
        <>
            <FeedHeaderLayout />
            <FeedTitleLayout />
            <FeedTravelingContent />
        </>
    );
}

export default FeedTraveling;