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
import img from "../../assets/savepage.png"

function Save(props) {
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
                    가고싶은 맛집, 카페 저장하고
                    <br/>
                    <div css={S.SFirstTextContant}>
                        나의
                        <strong css={S.SStrongText}> 리스트</strong>
                        를 만들어 보세요
                    </div>
                </div>
                <div css={S.SSecondTextContainer}>
                    여행 코스도 계획하기도 굳~
                </div>
                <div css={S.SImgBox}>    
                    <img src={img} css={S.SImg}/>
                </div>
            </div>
            </MainContainer>
            <BottomLayout />    
        </div>
    );
}

export default Save;