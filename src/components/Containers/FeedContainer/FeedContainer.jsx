import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import profile from "../../../assets/profile.png"

function FeedContainer(props) {
    return (
        <ul css={S.SLayout}>
            <li css={S.SListContainer}>
                <div css={S.SContainer}>
                    <div css={S.SHeaderContainer}>
                        <div>
                            <img src="" css={S.SImgsBox}/>
                            세렌디피티23
                            사진리뷰1 팔로워0
                        </div>
                        <div css={S.SFollowBox}>
                            <button css={S.SFolloewButton}>팔로우</button>
                            <span>⋮</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default FeedContainer;