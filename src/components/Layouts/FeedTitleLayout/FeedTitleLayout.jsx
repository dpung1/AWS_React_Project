import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function FeedTitleLayout(props) {
    const [ selectedPick, setSelectedPick ] = useState("");

    const handleButtonOnClick = (buttonName) => {
        setSelectedPick(buttonName)
    }
    
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SContent}>
                    <button css={selectedPick === "IT" ? S.SButtonsSelect : S.SButtons} 
                        onClick={() => handleButtonOnClick("IT")}>
                        IT
                    </button>
                    <button css={selectedPick === "한식" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("한식")}>
                        한식
                    </button>
                    <button css={selectedPick === "낚시" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("낚시")}>
                        낚시
                    </button>
                    <button css={selectedPick === "카페" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("카페")}>
                        카페
                    </button>
                    <button css={selectedPick === "숙박" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("숙박")}>
                        숙박
                    </button>
                    <button css={selectedPick === "양식" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("양식")}>
                        양식
                    </button>
                    <button css={selectedPick === "자연명소" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("자연명소")}>
                        자연명소
                    </button>
                    <button css={selectedPick === "일식" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("일식")}>
                        일식
                    </button>
                    <button css={selectedPick === "클래스∙소품" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("클래스∙소품")}>
                        클래스∙소품
                    </button>
                    <button css={selectedPick === "체험관광" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("체험관광")}>
                        체험관광
                    </button>
                    <button css={selectedPick === "피크닉" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("피크닉")}>
                        피크닉
                    </button>
                    <button css={selectedPick === "중식" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("중식")}>
                        중식
                    </button>
                    <button css={selectedPick === "캠핑" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("캠핑")}>
                        캠핑
                    </button>
                    <button css={selectedPick === "아시아/퓨전 음식" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("아시아/퓨전 음식")}>
                        아시아/퓨전 음식
                    </button>
                    <button css={selectedPick === "아이와 함께" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("아이와 함께")}>
                        아이와 함께
                    </button>
                    <button css={selectedPick === "뷔페/레스토랑" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("뷔페/레스토랑")}>
                        뷔페/레스토랑
                    </button>
                    <button css={selectedPick === "역사유적" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("역사유적")}>
                        역사유적
                    </button>
                    <button css={selectedPick === "레저∙액티비티" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("레저∙액티비티")}>
                        레저∙액티비티
                    </button>
                    <button css={selectedPick === "문화예술" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("문화예술")}>
                        문화예술
                    </button>
                    <button css={selectedPick === "물놀이" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("물놀이")}>
                        물놀이
                    </button>
                    <button css={selectedPick === "등산∙트레킹" ? S.SButtonsSelect : S.SButtons}
                        onClick={() => handleButtonOnClick("등산∙트레킹")}>
                        등산∙트레킹
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeedTitleLayout;