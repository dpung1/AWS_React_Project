import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import profile from "../../../assets/profile/profile.png"
import { FiChevronRight } from "react-icons/fi"
import { LiaCheckCircle } from "react-icons/lia"
import { PiPencilSimpleLineBold } from "react-icons/pi"
import { useNavigate } from 'react-router-dom';

function ProfileLayout(props) {
    const navigate = useNavigate();

    const loginPageMoveClick = () => {
        navigate("/signin")
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css ={S.SProfile}>
                    <img src={profile} css={S.SProfileBox}/>
                    <span css={S.SLogin} onClick={loginPageMoveClick}>로그인하기 <FiChevronRight css={S.SLoginLink}/></span>
                </div>
                <div css={S.SButtons}>
                    <button css={S.SReviewButton}><PiPencilSimpleLineBold css={S.SReviewIcon}/>리뷰 쓰기</button>
                    <button css={S.SMissionButton}><LiaCheckCircle css={S.SMissionIcon}/>미션</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;