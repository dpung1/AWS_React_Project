import { css } from "@emotion/react"

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SListContainer = css`
    display: flex;
`;

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 0px auto;
    padding: 20px 20px 28px 20px;
    width: 720px;
`;

export const SHeaderContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -3px;
    height: 65px;
    cursor: pointer;
    `;

export const SInfoContainer = css`
    display: flex;
`;

export const SImgsBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 9px;
    border: 2px solid rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    overflow: hidden;
`;

export const STextBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SName = css`
    margin: 5px 0px 5px 0px;
    font-size: 16.5px;
    font-weight: 900;
    letter-spacing: -0.5px;
    color: #242424;
    `;

export const SReviewAndFollower = css`
    font-size: 13.5px;
    font-weight: 400;
    letter-spacing: -0.7px;
    color: #8f8f8f;
`;

export const SFollowBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SFolloewButton = css`
    border: none;
    border-radius: 4px;
    padding-top: 3px;
    width: 70px;
    height: 30px;
    font-size: 13px;
    font-weight: 600;
    color: #287cff;
    background-color: #eff6fe;
    cursor: pointer;
`;

export const SDisplay = css`
    margin: 3px -7px 0px 8px;
    font-size: 20px;
    text-align: right;
    color: #b8b8b8
`;

export const SImgContainer = css`
    display: flex;
    flex-direction: column;

    margin-top: 2px;
    `;
    
    export const SImgButtonBox = css`
    position: relative;
    border: none;
    background-color: transparent;
    padding: 0px;
    cursor: pointer;
`;

export const SImgContainerBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 680px;
`;

export const SImgLeft = css`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 401px;
    height: 360px;
`;

export const SArray = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 360px;
    overflow: hidden;
`;


export const SImgRight = css`
    width: 277px;
    height: 179px;
`;

export const SLocation = css`
    position: absolute;
    left: 4px;
    bottom: 5px;

    border: none;
    border-radius: 4px;
    height: 20px;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.5px;
    color: #ffffff;
    background-color: rgba(0,0,0,.6);
    cursor: pointer;
`;

export const SLocationIcon = css`
    margin: 2px 2px 0px -1px;
    width: 12px;
    height: 12px;
`;

export const SLocationText = css`
    position: relative;
    bottom: 1px;
`;

export const STextContent = css`
    margin-top: 11px;
    cursor: pointer;
`;

export const SText = css`
    font-size: 15px;
    letter-spacing: -1px;
    color: #666666;
    word-wrap: break-word;
    line-height: 22px;
`;

export const STagContainer = css`
    display: flex;

    margin-top: 5px;
    height: 33px;
`;

export const STagContent = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 0px 4px 7px 0px;
    border-radius: 4px;
    padding: 4px 7px;
    height: 26px;
    font-size: 13.4px;
    color: #666666;
    background-color: #f5f7f8;
`;

export const SReactionContainer = css`
    display: flex;
    justify-content: space-between;

    margin-top: 10px;
`;

export const SReactionRight = css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SSmileIcon = css`
    margin-left: 2px;
    font-size: 24px;
    color: #424242;
`;

export const SReactionText = css`
    margin: 2px 0px 0px 5px;
    font-size: 14px;
    color: #424242;
`;

export const SDayDate = css`
    margin-top: 7px;
    font-size: 13.5px;
    letter-spacing: -0.8px;
    color: #9a9a9a;
`;

export const SLocationContainer = css`
    margin-top: 15px;
    border: 1px solid #ecf0f2;
    border-radius: 8px;
    width: 684px;
    height: 68px;
`;

export const SLocationContent = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 16px 12px 15px;
    height: 66px;
`;

export const SLocationLeft = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SLocationTopText = css`
    margin: 3.5px 0px 7.5px 0px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: #242424;
    cursor: pointer;
`;

export const SIcon = css`
    font-size: 13px;
`;

export const SLocationDownText = css`
    font-size: 13px;
    letter-spacing: -1px;
    color: #8f8f8f;
`;

export const SLocationRight = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-right: 5px;
    color: #8f8f8f;
    cursor: pointer;
`;

export const SStarIcon = css`
    margin-bottom: 8px;
    font-size: 20px;
`;

export const SSaveText = css`
    font-size: 11px;
    font-weight: 500px;
`;

export const SBoundary = css`
    width: 100%;
    height: 10px;
    background-color: #fafafa;
`;