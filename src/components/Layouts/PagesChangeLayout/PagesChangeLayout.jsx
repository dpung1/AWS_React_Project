import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { Link, useLocation } from 'react-router-dom';

function PagesChangeLayout(props) {
    const { pathname } = useLocation();

    
    return (
        <div css={S.SHeaderFixed}>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                    {/* StartsWith = 포함하고있는 텍스트 전체 인식*/}
                    <Link css={S.SPageName(pathname === "/" || pathname.startsWith("/feed"))} to="/feed">피드</Link>
                    <Link css={S.SPageName(pathname.startsWith("/timeline"))} to="/timeline" >타임라인</Link>
                    <Link css={S.SPageName(pathname.startsWith("/review"))} to="/review" >리뷰</Link>
                    <Link css={S.SPageName(pathname.startsWith("/order"))} to="/order" >예약・주문</Link>
                    <Link css={S.SPageName(pathname.startsWith("/save"))} to="/save" >저장</Link>
                </div>
            </div>
        </div>
    );
}

export default PagesChangeLayout;