import { css } from "@emotion/react"

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SContainer = css`
    display: flex;
    align-items: center;

    padding: 0px 17px;
    width: 720px;
    height: 48px;
    overflow-x: auto;
    
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const SContent = css`
    display: flex;
    padding: 10px 0px 2px 0px;
`;

export const SButtons = css`
    flex-shrink:  0;
    margin-right: 6px;
    padding: 0px 13px;
    border: 1px solid #eaeef2;
    border-radius: 19px;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    color: #666666;
    background-color: transparent;
    cursor: pointer;
`;

export const SButtonsSelect = css`
    flex-shrink:  0;
    margin-right: 6px;
    padding: 0px 13px;
    border: 1px solid #eaeef2;
    border-radius: 19px;
    height: 36px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    background-color: #424242;
    cursor: pointer;
`;