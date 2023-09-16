import { css } from "@emotion/react";

export const SBottomFixed = css`
    position: -webkit-sticky;
    position: sticky;
    bottom: -1px;
    background-color: #39393c;
    z-index: 100;
    transition: all 0.3s ease;
`;

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;
`;

export const SNextButton = (mode) => css`
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 6px; 
    width: 460px;
    height: 52px;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    background-color: ${mode ? '#8990a0' : '#03c75a'};
    cursor: pointer;
`;