import styled, { keyframes, css } from "styled-components";

export const TextAnimation = keyframes`

0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92%
    {
        color:#03A062;
        text-shadow: none;
        
    }
    18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100%
    {
        color:#fff;
        text-shadow: 0 0 10px #03A062,
                    0 0 20px #03A062,
                    0 0 40px #03A062,
                    0 0 80px #03A062,
                    0 0 160px #03A062;
        
    }

`;

export const Section = styled.div`

    display: flex;
    justify-content: center;


`;
export const Text = styled.h2`

        animation: ${TextAnimation} 1s linear infinite;
    


`;

export const Image = styled.img`

`;