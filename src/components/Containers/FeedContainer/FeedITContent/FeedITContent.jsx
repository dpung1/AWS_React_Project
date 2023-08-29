import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import profile from "../../../../assets/profile/profile2.jpeg"
import Img from "../../../../assets/Feed/react.png"
import Img2 from "../../../../assets/Feed/react book.jpeg"
import Img3 from "../../../../assets/Feed/com.jpeg"
import { GoSmiley } from "react-icons/go"
import { BsChevronRight } from "react-icons/bs"
import { PiStarThin } from "react-icons/pi"
import { HiLocationMarker } from "react-icons/hi"

function FeedITContent(props) {
    return (
        <ul css={S.SLayout}>
            <li css={S.SListContainer}>
                <div css={S.SContainer}>
                    <div css={S.SHeaderContainer}>
                        <div css={S.SInfoContainer}>
                            <img src={profile} css={S.SImgsBox}/>
                            <div css={S.STextBox}>
                                <span css={S.SName}>React F***</span>
                                <span css={S.SReviewAndFollower}>사진리뷰 ∞ ∙ 팔로워 ∞</span>
                            </div>
                        </div>
                        <div css={S.SFollowBox}>
                            <button css={S.SFolloewButton}>팔로우</button>
                            <span css={S.SDisplay}>⋮</span>
                        </div>
                    </div>
                    <div css={S.SImgContainer}>
                        <button css={S.SImgButtonBox}>
                            <div css={S.SImgContainerBox}>
                                <img src={Img} css={S.SImgLeft}/>
                                    <div css={S.SArray}>
                                        <img src={Img2} css={S.SImgRight}/>
                                        <img src={Img3} css={S.SImgRight}/>
                                    </div>
                            </div>
                            <button css={S.SLocation}>
                                <HiLocationMarker css={S.SLocationIcon}/>
                                <span css={S.SLocationText}>부산광역시 부산진구 최신</span>
                            </button>
                        </button>
                    </div>
                    <div css ={S.STextContent}>
                        <span css={S.SText}>
                            2023년 8월 30일 React -완-
                        </span>
                    </div>
                    <div css={S.STagContainer}>
                        <span css={S.STagContent}>😡 어려워요</span>
                        <span css={S.STagContent}>🐗 책표지가 멧돼지에요</span>
                        <span css={S.STagContent}>👩‍💻 시간이 잘가요</span>
                        <span css={S.STagContent}>📂 폴더가 많아요</span>
                        <span css={S.STagContent}>😑 보는건 편해요</span>
                    </div>
                    <div css={S.SReactionContainer}>
                        <div css={S.SReactionRight}>
                            <GoSmiley css={S.SSmileIcon}/>
                            <span css={S.SReactionText}>반응 남기기</span>
                        </div>
                        <span css={S.SDayDate}>8.30 수 제출</span>
                    </div>
                    <div css={S.SLocationContainer}>
                        <div css={S.SLocationContent}>
                            <div css={S.SLocationLeft}>
                                <span css={S.SLocationTopText}>코리아IT 코딩아카데미 부산점 <BsChevronRight css={S.SIcon}/></span>
                                <span css={S.SLocationDownText}>IT교육 ∙ 부산광역시 부산진구 부전동</span>
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

export default FeedITContent;