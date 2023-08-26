import React from 'react';
import HeaderLayout from '../../components/Layouts/HeaderLayout/HeaderLayout';
import ProfileLayout from '../../components/Layouts/ProfileLayout/ProfileLayout';
import PagesChangeLayout from '../../components/Layouts/PagesChangeLayout/PagesChangeLayout';
import BottomLayout from '../../components/Layouts/BottomLayout/BottomLayout';
import OrderContainer from '../../components/Containers/OrderContainer/OrderContainer';

function Order(props) {
    return (
        <div>
            <HeaderLayout />
            <ProfileLayout />
            <PagesChangeLayout />
            <OrderContainer />
        </div>
    );
}

export default Order;