import React from 'react';
import MainContainer from '../../components/Containers/MainContainer/MainContainer';
import HeaderLayout from '../../components/Layouts/HeaderLayout/HeaderLayout';
import ProfileLayout from '../../components/Layouts/ProfileLayout/ProfileLayout';
import PagesChangeLayout from '../../components/Layouts/PagesChangeLayout/PagesChangeLayout';
import BottomLayout from '../../components/Layouts/BottomLayout/BottomLayout';


function Review(props) {
    return (
        <div>
            <HeaderLayout />
            <ProfileLayout />
            <PagesChangeLayout />
            <MainContainer />
            <BottomLayout />
        </div>
    );
}

export default Review;