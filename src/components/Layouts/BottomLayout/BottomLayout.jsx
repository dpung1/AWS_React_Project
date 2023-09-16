import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { useLocation, useNavigate } from 'react-router-dom';

function BottomLayout(props) {
    const location = useLocation("");
    const navigate = useNavigate();

    const loginPageMoveClick = () => {
        navigate("/signin")
    }
    

    return (
        <div css={S.SLayout(location.pathname)}>
            <div css={S.SContainer}>
                <div css={S.SFirstContainer}>
                    <span css={S.SSpan} onClick={loginPageMoveClick}>로그인</span>
                    <span css={S.STextBoundary}>|</span>
                    <span css={S.SSpan}>전체서비스</span>
                </div>
                <div css={S.SSecondContainer}>
                    <span css={S.SSpan}>이용정책</span>
                    <span css={S.STextBoundary}>|</span>
                    <span css={S.SSpan}>MY플레이스 고객센터</span>
                    <span css={S.STextBoundary}>|</span>
                    <span css={S.SSpan}>신고센터</span>
                    <span css={S.STextBoundary}>|</span>
                    <span css={S.SSpan}>공지사항</span>
                </div>
                <div css={S.SThirdContainer}>
                    <span css={S.SSpan}>© NAVER Corp.</span>
                </div>
            </div>
        </div>
    );
}

export default BottomLayout;