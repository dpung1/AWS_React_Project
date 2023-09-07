import React from 'react';
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import * as S from "./Style"
import { useNavigate } from 'react-router-dom';

function SignupBottomLayout(props) {
    const navigate = useNavigate();

    const handleSignInfoPageMoveClick = () => {
        navigate('/signupinfo')
    }
    return (
        <div css={S.SBottomFixed}>
            <div css={S.SLayout}>
                <button css={S.SNextButton} onClick={handleSignInfoPageMoveClick}>다음</button>
            </div>
        </div>
    );
}

export default SignupBottomLayout;