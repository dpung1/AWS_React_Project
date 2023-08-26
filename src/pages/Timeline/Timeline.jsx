import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { BsFlagFill } from "react-icons/bs"
import HeaderLayout from '../../components/Layouts/HeaderLayout/HeaderLayout';
import ProfileLayout from '../../components/Layouts/ProfileLayout/ProfileLayout';
import PagesChangeLayout from '../../components/Layouts/PagesChangeLayout/PagesChangeLayout';
import MainContainer from '../../components/Containers/MainContainer/MainContainer';
import BottomLayout from '../../components/Layouts/BottomLayout/BottomLayout';
import img from "../../assets/timeline.png"

function Timeline(props) {
    return (
        <div>
            <HeaderLayout />
            <ProfileLayout />
            <PagesChangeLayout />
            <MainContainer>
            <div css={S.SContainer}>
                <div css={S.SFlagIconBox}>
                    <BsFlagFill css={S.SFlagIcon}/>
                </div>
                <div css={S.SFirstTextContainer}>
                    <strong css={S.SStrongText}> 영수증/카드내역 인증, 예약, 주문</strong>
                    한
                    <br/>
                    <div css={S.SFirstTextContant}>
                        장소가 나의 기록이 됩니다.
                    </div>
                </div>
                <div css={S.SSecondTextContainer}>
                    방문했던 곳을 한 눈에 모아보세요.
                </div>
                <div css={S.SImgBox}>    
                    <img src={img} css={S.SImg}/>
                </div>
                <button css={S.SButton}>리뷰 참여하기</button>
            </div>
            </MainContainer>
            <BottomLayout />
        </div>
    );
}

export default Timeline;