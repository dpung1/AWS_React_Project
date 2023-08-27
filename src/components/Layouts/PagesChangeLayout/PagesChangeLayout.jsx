import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { Link, useLocation } from 'react-router-dom';

function PagesChangeLayout(props) {
    const location = useLocation();
    
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <Link css={S.SFeed(location.pathname)} to="/feed">피드</Link>
                <Link css={S.STimeLine(location.pathname)} to="/timeline" >타임라인</Link>
                <Link css={S.SReview(location.pathname)} to="/review" >리뷰</Link>
                <Link css={S.SOrder(location.pathname)} to="/order" >예약・주문</Link>
                <Link css={S.SSave(location.pathname)} to="/save" >저장</Link>
            </div>
        </div>
    );
}

export default PagesChangeLayout;