import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
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