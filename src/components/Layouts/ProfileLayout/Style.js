import { css } from "@emotion/react"

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 0px 11px 0px;
    background-color: #06b495;
`;

export const SContainer = css`
    margin: 0px auto;
    padding: 0px 20px;
`;

export const SProfile = css`
    margin-bottom: 18px;
    display: flex;
    flex-grow: 1;
`;

export const SProfileBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 29px;
    border: 2px solid #ffffff;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    overflow: hidden;
    cursor: pointer;
`;

export const SLogin = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    font-size: 17px;
    font-weight: 500;
    color: #ffff;
    cursor: pointer;
`;

export const SLoginLink = css`
    margin: 0px 0px 3px 4px;
    font-size: 14px;
`;


export const SButtons = css`
    display: flex;
    justify-content: space-between;

`;

export const SReviewButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 8px;
    padding-top: 2px;
    width: 226px;
    height: 38px;
    font-size: 15px;
    font-weight: 700;
    color: #ffff;
    background-color: #0cc5a4;
    cursor: pointer;
`;

export const SReviewIcon = css`
    margin: 0px 5px 0px 0px;
    font-size: 19px;
`;

export const SMissionButton = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 7px;
    border: none;  
    border-radius: 8px;
    padding-top: 2px;
    width: 102px;
    height: 38px;
    font-size: 15px;
    font-weight: 700;
    color: #ffff;
    background-color: #0cc5a4;
    cursor: pointer;
`;


export const SMissionIcon = css`
    margin: 0px 4px 2px 0px;
    font-size: 18px;
`;