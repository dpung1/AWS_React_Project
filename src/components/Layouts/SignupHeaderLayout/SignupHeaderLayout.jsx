import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import * as S from "./Style"
import naver from "../../../assets/signup/naver.svg"
import { MdLanguage } from "react-icons/md"

function SignupHeaderLayout(props) {
    const [showLanguageList, setShowLanguageList] = useState(false);

    const toggleLanguageList = () => {
        setShowLanguageList(!showLanguageList);
    };

    return (
        <div>
            <Global 
                styles={css`
                body {
                background-color: #39393c; /* 원하는 배경색을 지정 */
                color: #f0f0f2;
                }
            `}
            />
            <div css={S.SLayout}>
                <div css={S.HeaderContainer}>
                    <img css={S.SNaverLogo} src={naver}/>
                    <div css={S.SLanguageBox}>
                        <MdLanguage css={S.SLanIcon}/>
                        <button css={S.SLanguage} onClick={toggleLanguageList}>한국어</button>
                        <button css={S.SButton} onClick={toggleLanguageList}>▾</button>
                        {showLanguageList && (
                            <ul css={S.SLanguageList}>
                                <li>한국어</li>
                                <li css={S.SLanguageListLi}>English</li>
                                <li css={S.SLanguageListLi}>中文(简体)</li>
                                <li css={S.SLanguageListLi}>中文(台灣)</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupHeaderLayout;