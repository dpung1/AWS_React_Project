import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { BsFlagFill } from "react-icons/bs"
import MainContainer from '../../components/Containers/MainContainer/MainContainer';
import img from "../../assets/page/reviewpage.png"

function Review(props) {
    return (
        <>
            <MainContainer>
            <div css={S.SContainer}>
                <div css={S.SFlagIconBox}>
                    <BsFlagFill css={S.SFlagIcon}/>
                </div>
                <div css={S.SFirstTextContainer}>
                    정성스레 작성한
                    <strong css={S.SStrongText}> 리뷰</strong>
                    <br/>
                    <div css={S.SFirstTextContant}>
                        내 리뷰를 모아 만든
                        <strong css={S.SStrongText}> 테마리스트</strong>
                    </div>
                </div>
                <div css={S.SSecondTextContainer}>
                    나의 발자취를 소중한 기록으로 남겨보세요.
                </div>
                <div css={S.SImgBox}>    
                    <img src={img} css={S.SImg}/>
                </div>
                <button css={S.SButton}>리뷰 참여하기</button>
            </div>
            </MainContainer>
        </>
    );
}

export default Review;