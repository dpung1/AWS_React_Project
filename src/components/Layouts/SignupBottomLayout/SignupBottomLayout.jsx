import React from 'react';
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import * as S from "./Style"

function SignupBottomLayout(props) {
    return (
        <div css={S.SBottomFixed}>
            <div css={S.SLayout}>
                <button css={S.SNextButton}>다음</button>
            </div>
        </div>
    );
}

export default SignupBottomLayout;