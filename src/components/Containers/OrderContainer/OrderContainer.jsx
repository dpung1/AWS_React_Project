import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { SiNaver } from "react-icons/si"
import { useNavigate } from 'react-router-dom';

function OrderContainer(props) {
    const navigate = useNavigate();

    const handleSigninPageMoveClick = () => {
        navigate('/signin');
    };

    return (
        <>
            <div css={S.STopLayout}>
                <div css={S.STopContainer}>
                    <div css={S.STopTextContainer}>
                        <strong css={S.SStrongText}>로그인</strong>
                        하고 예약,
                        <br/>
                        <div css={S.SText}>
                            주문 내역을 확인해보세요.
                        </div>
                    </div>
                    <button css={S.SLoginButton} onClick={handleSigninPageMoveClick}><SiNaver css={S.SNeverIcon}/>  네이버 로그인</button>
                </div>
            </div>
            <div css={S.SBottomLayout}>
                <div css={S.SBottomContainer}>
                    <div css={S.SBottomTextContainer}>
                        <strong css={S.SStrongText}>비회원</strong>
                        &nbsp;예약확인
                    </div>
                    <input type="text" placeholder='예약번호 입력' css={S.SInputNumber}/>
                    <input type="text" placeholder='예약자명 입력' css={S.SInputName}/>
                    <button css={S.SCheckButton}>내 예약 확인</button>
                </div>
            </div>
        </>
    );
}

export default OrderContainer;