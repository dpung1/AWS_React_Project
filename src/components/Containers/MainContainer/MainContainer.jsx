import React from 'react';
import { css } from "@emotion/react";
import * as S from "./Style"
import { GiGolfFlag } from "react-icons/gi"

function MainContainer({ children }) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                {children}
            </div>
        </div>
    );
}

export default MainContainer;