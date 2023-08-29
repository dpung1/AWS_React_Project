import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import profile from "../../../../assets/profile/ra.jpeg"
import Img from "../../../../assets/Feed/big.jpeg"
import Img2 from "../../../../assets/Feed/mu.jpeg"
import Img3 from "../../../../assets/Feed/sky.jpeg"
import { GoSmiley } from "react-icons/go"
import { BsChevronRight } from "react-icons/bs"
import { PiStarThin } from "react-icons/pi"
import { HiLocationMarker } from "react-icons/hi"

function FeedTravelingContent(props) {
    return (
        <ul css={S.SLayout}>
            <li css={S.SListContainer}>
                <div css={S.SContainer}>
                    <div css={S.SHeaderContainer}>
                        <div css={S.SInfoContainer}>
                            <img src={profile} css={S.SImgsBox}/>
                            <div css={S.STextBox}>
                                <span css={S.SName}>DP</span>
                                <span css={S.SReviewAndFollower}>사진리뷰 ∞ ∙ 팔로워 ∞</span>
                            </div>
                        </div>
                        <div css={S.SFollowBox}>
                            <button css={S.SFolloewButton}>팔로우</button>
                            <span css={S.SDisplay}>⋮</span>
                        </div>
                    </div>
                    <div css={S.SImgContainer}>
                        <div css={S.SImgButtonBox}>
                            <div css={S.SImgContainerBox}>
                                <img src={Img} css={S.SImgLeft}/>
                                    <div css={S.SArray}>
                                        <img src={Img2} css={S.SImgRight}/>
                                        <img src={Img3} css={S.SImgRight}/>
                                    </div>
                            </div>
                            <button css={S.SLocation}>
                                <HiLocationMarker css={S.SLocationIcon}/>
                                <span css={S.SLocationText}>제주시 과거</span>
                                </button>
                        </div>
                    </div>
                    <div css ={S.STextContent}>
                        <span css={S.SText}>
                            작년 제주도 어딘지 기억은 안나지만 놀러간 곳 🚗
                        </span>
                    </div>
                    <div css={S.STagContainer}>
                        <span css={S.STagContent}>😎 더워요</span>
                        <span css={S.STagContent}>🖼️ 뷰가 좋아요</span>
                        <span css={S.STagContent}>👀 볼거리가 많아요</span>
                        <span css={S.STagContent}>😄 재밌어요</span>
                        <span css={S.STagContent}>📸 사진이에요</span>
                    </div>
                    <div css={S.SReactionContainer}>
                        <div css={S.SReactionRight}>
                            <GoSmiley css={S.SSmileIcon}/>
                            <span css={S.SReactionText}>반응 남기기</span>
                        </div>
                        <span css={S.SDayDate}>작년 8월쯤 방문</span>
                    </div>
                    <div css={S.SLocationContainer}>
                        <div css={S.SLocationContent}>
                            <div css={S.SLocationLeft}>
                                <span css={S.SLocationTopText}>제주도<BsChevronRight css={S.SIcon}/></span>
                                <span css={S.SLocationDownText}>여행 ∙ 제주 어디쯤</span>
                            </div>
                            <div css={S.SLocationRight}>
                                <PiStarThin css={S.SStarIcon}/>
                                <span css={S.SSaveText}>저장</span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <div css={S.SBoundary}></div>
        </ul>
    );
}

export default FeedTravelingContent;