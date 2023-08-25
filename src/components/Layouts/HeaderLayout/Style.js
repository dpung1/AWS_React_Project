import { css } from "@emotion/react"

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 15px;
    border-bottom: 1px solid rgba(0, 0, 1, 0.04);
    background-color: #06b495;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 36px;
`;

export const SBrandLogo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SLogoIcon = css`
    margin: 8px 5px 7px 5px;
    padding: 5px;

    font-size: 21px;
    color: #06b495;
    background-color: #ffff;
`;

export const SLogoName = css`
    margin-left: 3px;
    padding: 11px 1px 5px 1px;

    font-size: 17px;
    font-weight: 600;
    color: #ffff;
`;

export const RightMenus = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;

export const SCoupon = css`
    display: flex;
    position: relative;
`;

export const SCouponIcon = css`
    margin: 0px 5px;
    width: 40px;
    height: 40px;
    color: #ffff;
`;

export const SCouponName = css`
    position: absolute;
    text-align: center;
    font-size: 12px;
    font-weight: 900;
    color: #ffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const SMenuIcon = css`
    font-size: 27px;
    color: #ffff;
`;

