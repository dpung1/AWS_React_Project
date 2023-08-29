import { css } from "@emotion/react"

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SContainer = css`
    position: relative;
    display: flex;

    padding: 0px 20px;
    width: 720px;
`;

export const SLeftButton = css`
    position: absolute;
    top: 10px;
    left: -11.5px;

    border: none;
    width: 46px;
    height: 36px;
    font-size: 20px;
    font-weight: 500;
    color: transparent;
    background-color: transparent;
    cursor: pointer;
    :hover {
        color: #666666;
    }
`;

export const SBox = css`
    display: flex;
    align-items: center;

    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    scroll-behavior: smooth;
`;

export const SContent = css`
    display: flex;

    padding: 10px 0px 2px 0px;
`;

export const SButtons = css`
    display: flex;
    flex-shrink:  0;
    justify-content: center;
    align-items: center;
    
    margin-right: 6px;
    padding: 0px 13px;
    border: 1px solid #eaeef2;
    border-radius: 19px;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: #666666;
    background-color: transparent;
    cursor: pointer;
`;

export const SButtonsSelect = css`
    display: flex;
    flex-shrink:  0;
    justify-content: center;
    align-items: center;

    margin-right: 6px;
    padding: 0px 13px;
    border: 1px solid #eaeef2;
    border-radius: 19px;
    height: 36px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #ffffff;
    background-color: #424242;
    cursor: pointer;
`;

export const SRightButton = css`
    position: absolute;
    top: 10px;
    right: -11.5px;

    border: none;
    height: 36px;
    width: 46px;
    font-size: 20px;
    font-weight: 500;
    color: transparent;
    background-color: transparent;
    cursor: pointer;
    :hover {
        color: #666666;
    }
`;




