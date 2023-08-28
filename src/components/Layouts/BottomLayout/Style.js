import { css } from "@emotion/react"

export const SLayout = (pathname) => css`
    padding: 42px 0px 36px 0px;
    background-color: ${ pathname === "/feed" ? "#fafafa" : "none"};
`;

export const SSpan = css`
    display: inline-block;
    white-space: nowrap;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const STextBoundary = css`
    display: inline-block;
    white-space: nowrap;
    color: #e1e1e1;
    cursor: default;
`;

export const SFirstContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-size: 14px;
    font-weight: 500;
    color: #8f8f8f;
    width: 118px;
    height: 20px;
    cursor: pointer;
    `;

export const SSecondContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-top: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #8f8f8f;
    width: 288px;
    height: 20px;
    cursor: pointer;
    `;

export const SThirdContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    color: #8f8f8f;
    height: 20px;
    cursor: pointer;
`;
