import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { PiArrowLeftLight } from "react-icons/pi"
import { GrLanguage } from "react-icons/gr"

function SigninHeaderLayout(props) {
    const [showLanguageList, setShowLanguageList] = useState(false);

    const toggleLanguageList = () => {
        setShowLanguageList(!showLanguageList);
    };

    const navigateToFeed = () => {
        window.location.href = '/feed';
    };

    return (
        <header css={S.SHeader}>
            <PiArrowLeftLight css={S.SBackButton} onClick={navigateToFeed}/>
            <div css={S.SLanguageBox}>
                <GrLanguage />
                <button onClick={toggleLanguageList}>한국어 ▾</button>
                {showLanguageList && (
                    <ul css={S.SLanguageList}>
                        <li>한국어</li>
                        <li css={S.SLanguageListLi}>English</li>
                        <li css={S.SLanguageListLi}>中文(简体)</li>
                        <li css={S.SLanguageListLi}>中文(台灣)</li>
                    </ul>
                )}
            </div>
        </header>
    );
}

export default SigninHeaderLayout;