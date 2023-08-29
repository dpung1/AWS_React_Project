import React from 'react';
import FeedHeaderLayout from '../../../components/Layouts/FeedHeaderLayout/FeedHeaderLayout';
import FeedTitleLayout from '../../../components/Layouts/FeedTitleLayout/FeedTitleLayout';
import FeedITContent from '../../../components/Containers/FeedContainer/FeedITContent/FeedITContent';

function FeedIT(props) {

    return (
        <>
            <FeedHeaderLayout />
            <FeedTitleLayout />
            <FeedITContent />
        </>
    );
}

export default FeedIT;