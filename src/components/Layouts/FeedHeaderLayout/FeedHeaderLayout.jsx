import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { MdLocationSearching } from "react-icons/md"
import { HiPlus } from "react-icons/hi"

function FeedHeaderLayout(props) {
    const [ selectedPick, setSelectedPick ] = useState("전체");

    const handleButtonOnClick = (buttonName) => {
        setSelectedPick(buttonName);
    }

    return (
        <div css={S.SLayout}>
                <div css={S.SContainer}>
                    <div css={S.SButtonContent}>
                        <button css={selectedPick === "전체" ? S.SAllbuttonSelect : S.SAllbutton} 
                            onClick={() => handleButtonOnClick("전체")}>
                            전체
                        </button>
                        <button css={selectedPick === "팔로잉" ? S.SFollowingSelect : S.SFollowing} 
                            onClick={() => handleButtonOnClick("팔로잉")}>
                            팔로잉
                        </button>
                        <button css={selectedPick === "관심지역" ? S.SAreaSelect : S.SArea} 
                            onClick={() => handleButtonOnClick("관심지역")}>
                            <div css={S.SPlusIconBox}>
                                <HiPlus css={S.SPlusIcon}/>
                            </div>
                            관심지역
                        </button>
                    </div>
                    <div css={S.SLocation}>
                        <div css={S.SBoundary}></div>
                        <button css={S.SLocationButton}>
                            <div css={S.SLocationIconBox}>
                            <MdLocationSearching css={S.SLocationIcon}/>
                            </div>
                        현위치
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default FeedHeaderLayout;