import React from 'react';
import FeedHeaderLayout from '../../components/Layouts/FeedHeaderLayout/FeedHeaderLayout';
import FeedTitleLayout from '../../components/Layouts/FeedTitleLayout/FeedTitleLayout';
import FeedITContent from '../../components/Containers/FeedContainer/FeedITContent/FeedITContent';
import FeedTravelingContent from '../../components/Containers/FeedContainer/FeedTravelingContent/FeedTravelingContent';
import { useSearchParams } from 'react-router-dom';

function Feed(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();

    const category = searchParams.get("category");

    return (
        <>
            <FeedHeaderLayout />
            <FeedTitleLayout />
            {!category && (<>
                <FeedITContent />
                <FeedTravelingContent />
            </>)}
            {category === "IT" && <FeedITContent />}
            {category === "여행" && <FeedTravelingContent />}
        </>
    );
}

export default Feed;