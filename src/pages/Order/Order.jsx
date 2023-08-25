import React from 'react';
import HeaderLayout from '../../components/Layouts/HeaderLayout/HeaderLayout';
import ProfileLayout from '../../components/Layouts/ProfileLayout/ProfileLayout';
import PagesChangeLayout from '../../components/Layouts/PagesChangeLayout/PagesChangeLayout';
import MainContainer from '../../components/Containers/MainContainer/MainContainer';
import BottomLayout from '../../components/Layouts/BottomLayout/BottomLayout';

function Order(props) {
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

export default Order;