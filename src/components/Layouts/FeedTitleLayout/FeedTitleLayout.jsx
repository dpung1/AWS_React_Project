import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { Link, useSearchParams } from 'react-router-dom';

function FeedTitleLayout(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();

    const titles = [
        {
            id: 1,
            path: "/feed/it",
            name: "IT"
        },
        {
            id: 2,
            path: "/feed/traveling",
            name: "여행"
        },
        {
            id: 3,
            path: "",
            name: "한식"
        },
        {
            id: 4,
            path: "",
            name: "낚시"
        },
        {
            id: 5,
            path: "",
            name: "카페"
        },
        {
            id: 6,
            path: "",
            name: "숙박"
        },
        {
            id: 7,
            path: "",
            name: "양식"
        },
        {
            id: 8,
            path: "",
            name: "자연명소"
        },
        {
            id: 9,
            path: "",
            name: "일식"
        },
        {
            id: 10,
            path: "",
            name: "클래스∙소품"
        },
        {
            id: 11,
            path: "",
            name: "체험관광"
        },
        {
            id: 12,
            path: "",
            name: "피크닉"
        },
        {
            id: 13,
            path: "",
            name: "중식"
        },
        {
            id: 14,
            path: "",
            name: "캠핑"
        },
        {
            id: 15,
            path: "",
            name: "아시아/퓨전 음식"
        },
        {
            id: 16,
            path: "",
            name: "아이와 함께"
        },
        {
            id: 17,
            path: "",
            name: "뷔페/레스토랑"
        },
        {
            id: 18,
            path: "",
            name: "역사유적"
        },
        {
            id: 19,
            path: "",
            name: "레저∙액티비티"
        },
        {
            id: 20,
            path: "",
            name: "문화예술"
        },
        {
            id: 21,
            path: "",
            name: "물놀이"
        },
        {
            id: 22,
            path: "",
            name: "등산∙트레킹"
        },
    ]

    const scrollRef = useRef(null);

    const handleScroll = (scrollAmount) => {
        const container = scrollRef.current;
        if (container) {
            container.scrollLeft += scrollAmount;
        }
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <button css={S.SLeftButton} onClick={() => handleScroll(-720)}>⟨</button>
            <div css={S.SBox} ref={scrollRef}>
                <div css={S.SContent}>
                    {titles.map(title => <Link
                                            key={title.id}
                                            to={"/feed?category=" + title.name}
                                            // searchParams는 /feed?category 에서 ?뒤에 있는 category의 값을 가져옴
                                            // category의 값이 title.name 같으면 스타일이 변경됨
                                            css={searchParams.get("category") === title.name ? S.SButtonsSelect : S.SButtons} >
                                            {title.name}
                                        </Link>)}
                </div>
            </div>
                <button css={S.SRightButton} onClick={() => handleScroll(+720)}>⟩</button>
            </div>
        </div>
    );
}

export default FeedTitleLayout;