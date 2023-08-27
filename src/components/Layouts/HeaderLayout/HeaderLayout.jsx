import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { SiNaver } from "react-icons/si"
import { BsTicket } from "react-icons/bs"
import { HiMenu } from "react-icons/hi"

function HeaderLayout(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SBrandLogo}>
                    <SiNaver css={S.SLogoIcon}/>
                    <span css={S.SLogoName}>MY플레이스</span>
                </div>
                <div css={S.RightMenus}>
                    <div css={S.SCoupon}>
                        <BsTicket css={S.SCouponIcon}/>
                        <span css={S.SCouponName}>쿠폰</span>
                    </div>
                    <HiMenu css={S.SMenuIcon}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderLayout;