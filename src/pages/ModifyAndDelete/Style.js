import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    `;
export const SHeaderBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 57px;
`;

export const SHaederIcon = css`
    margin-left: 8px;
    font-size: 35px;
`;

export const SHeaderText = css`
    padding-top: 4px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -1px;
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SProfileImgContainer = css`
    position: relative;
    display: flex;
    width: 90px;
    height: 90px;

    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 10px 0px;
`


export const SProfileImg = css`
    border: 2px solid #ffffff;
    border-radius: 50%;
`;

export const SCameraIconBox = css`
    position: absolute;
    right: -4px;
    bottom: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;

    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 4px 0px;
    background-color: white;
`;

export const SCameraIcon = css`
`;

export const SInfoSettingBox = css`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 22px;
`;

export const SInputBox = css`
    display: flex;
    flex-direction: column;
`;

export const SInfoTitle = css`
    margin: 7px 0px 7px 0px;

    font-size: 14px;
    font-weight: 700;
    color: #8f8f8f;
`;

export const SInfoTitles = css`
    margin: 14px 0px 14px 0px;

    font-size: 14px;
    font-weight: 700;
    color: #8f8f8f;
`;

export const SNameInput = css`
    width: 678px;
    padding: 0px 15px 0px 15px;
    min-height: 50px;

    border: none;
    border-radius: 8px;
    background-color: #f4f7f8;
`;

export const SDeleteBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 678px;
    margin-top: 20px;
`;

export const SDeleteIcon = css`
    font-size: 20px;
    color: #767676;
`;

export const SDeleteButton = css`
    margin: 2px 0px 0px -5px;
    border: none;
    font-size: 15px;
    color: #767676;
    background-color: transparent;
`;

export const SButtonLayout = css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px 10px 20px;
`;

export const SNextButton = css`
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    width: 678px;
    height: 52px;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    background-color: #00b49b;
    cursor: pointer;
`;