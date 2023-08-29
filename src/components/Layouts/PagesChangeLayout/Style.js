import { css } from "@emotion/react"


export const SLayout = css`
    padding: 0px 20px 0px 20px;
    background-color: #06b495;
`;

export const SHeaderFixed = css`
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    background-color: white;
    z-index: 100;
    transition: all 0.3s ease;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0px auto;
    width: 375px;
    height: 51px;
`;

export const SPageName = (isSelected) => css`
    position: relative; 
    padding: 18px 5px 12px 5px;
    font-size: 17px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    height: 100%;
    cursor: pointer;
    
    &::after {
        content: '';
        position: absolute; 
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${isSelected ? '#ffffff' : 'transparent'};
        border-radius: 1.5px 1.5px 1.5px 1.5px;
    }
    font-weight: ${isSelected ? '900' : '400'};
    color: ${isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
`;


